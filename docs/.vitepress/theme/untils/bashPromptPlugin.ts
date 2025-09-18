// .vitepress/theme/plugins/bashPromptPlugin.ts
export function bashPromptPlugin(md: any) {
  const originalFence = md.renderer.rules.fence;
  const PROMPT_STYLE = 'user-select:none !important;pointer-events:none !important;';
  const ROOT_STYLE = 'color:#FF5252 !important;font-weight:bold !important;'; // 红色
  const AT_STYLE = 'color:#9E9E9E !important;'; // 灰色
  const LOCALHOST_STYLE = 'color:#4FC3F7 !important;'; // 蓝色
  const PATH_STYLE = 'color:#FFD54F !important;'; // 黄色
  const BRACKET_STYLE = 'color:#9E9E9E !important;'; // 灰色
  const SYMBOL_STYLE = 'color:#4CAF50 !important;font-weight:bold !important;'; // 绿色

  function getDisplayPath(path: string): string {
    if (path === '/' || path === '~') return path;
    const cleanPath = path.replace(/\/$/, '');
    return cleanPath.split('/').pop() || '/';
  }

  function updatePath(command: string, currentPath: string): string {
    const cdMatch = command.match(/^cd\s+(\S+)/);
    if (!cdMatch) return currentPath;
    
    const target = cdMatch[1];
    if (target.startsWith('/')) return target;
    if (target === '..') return currentPath === '~' ? '/' : currentPath.replace(/\/[^/]+$/, '') || '/';
    
    return currentPath === '/' ? `/${target}` : `${currentPath}/${target}`;
  }

  md.renderer.rules.fence = function(tokens: any[], idx: number, options: any, env: any, slf: any) {
    const token = tokens[idx];
    if (token.info.trim() !== 'bash') {
      return originalFence?.(tokens, idx, options, env, slf) ?? slf.renderToken(tokens, idx, options);
    }

    const lines: string[] = token.content.split('\n');
    let currentPath = '~';
    
    const processedLines = lines.map((line: string) => {
      if (!line.trim()) return line;
      
      const prompt = `[root@localhost ${getDisplayPath(currentPath)}]# `;
      currentPath = updatePath(line.trim(), currentPath);
      return prompt + line;
    });

    const originalContent = token.content;
    token.content = processedLines.join('\n');
    
    const rendered = originalFence?.(tokens, idx, options, env, slf) ?? 
                     slf.renderToken(tokens, idx, options);
    
    token.content = originalContent;
    
    // 处理被分段的提示符，为不同部分设置不同颜色
    return rendered
      // 处理完整的提示符（包括最后的空格）
      .replace(
        /(\[)(root)(@)(localhost\s+)([~\/\w\-\.]+)(\]# )/g,
        '<span style="' + PROMPT_STYLE + '">' +
        '<span style="' + BRACKET_STYLE + '">$1</span>' +      // [
        '<span style="' + ROOT_STYLE + '">$2</span>' +         // root
        '<span style="' + AT_STYLE + '">$3</span>' +           // @
        '<span style="' + LOCALHOST_STYLE + '">$4</span>' +    // localhost + space
        '<span style="' + PATH_STYLE + '">$5</span>' +         // path (~)
        '<span style="' + BRACKET_STYLE + '">$6</span>' +      // ]
        '</span>'
      )
      // 处理路径部分（~ 符号等）
      .replace(
        /(~)(?=<)/g,
        '<span style="' + PATH_STYLE + PROMPT_STYLE + '">$1</span>'
      )
      // 处理 [root@localhost 路径]# 格式的分段部分
      .replace(
        /(\[)(?=root)/g,
        '<span style="' + BRACKET_STYLE + PROMPT_STYLE + '">$1</span>'
      )
      .replace(
        /(root)(?=@)/g,
        '<span style="' + ROOT_STYLE + PROMPT_STYLE + '">$1</span>'
      )
      .replace(
        /(@)(?=localhost)/g,
        '<span style="' + AT_STYLE + PROMPT_STYLE + '">$1</span>'
      )
      .replace(
        /(localhost\s+)(?=<)/g,
        '<span style="' + LOCALHOST_STYLE + PROMPT_STYLE + '">$1</span>'
      )
      .replace(
        /([~\/\w\-\.]+)(?=\]<)/g,
        '<span style="' + PATH_STYLE + PROMPT_STYLE + '">$1</span>'
      )
      .replace(
        /(\])(?=#)/g,
        '<span style="' + BRACKET_STYLE + PROMPT_STYLE + '">$1</span>'
      )
      .replace(
        /(#\s)(?=<)/g,
        '<span style="' + SYMBOL_STYLE + PROMPT_STYLE + '">$1</span>'
      )
      // 处理单独的部分
      .replace(
        /(\[)(?![^<]*>)/g,
        '<span style="' + BRACKET_STYLE + PROMPT_STYLE + '">$1</span>'
      )
      .replace(
        /(root)(?![^<]*>)/g,
        '<span style="' + ROOT_STYLE + PROMPT_STYLE + '">$1</span>'
      )
      .replace(
        /(@)(?![^<]*>)/g,
        '<span style="' + AT_STYLE + PROMPT_STYLE + '">$1</span>'
      )
      .replace(
        /(localhost\s+)(?![^<]*>)/g,
        '<span style="' + LOCALHOST_STYLE + PROMPT_STYLE + '">$1</span>'
      )
      .replace(
        /([~\/\w\-\.]+)(?=\])(?![^<]*>)/g,
        '<span style="' + PATH_STYLE + PROMPT_STYLE + '">$1</span>'
      )
      .replace(
        /(\])(?![^<]*>)/g,
        '<span style="' + BRACKET_STYLE + PROMPT_STYLE + '">$1</span>'
      )
      .replace(
        /(#\s)(?![^<]*>)/g,
        '<span style="' + SYMBOL_STYLE + PROMPT_STYLE + '">$1</span>'
      )
      // 特殊处理 ~ 符号
      .replace(
        /(~)(?![^<]*>)/g,
        '<span style="' + PATH_STYLE + PROMPT_STYLE + '">$1</span>'
      );
  };
}