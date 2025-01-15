---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
---

<style src="/.vitepress/theme/style/fav.css"></style>

<script setup>
import { NAV_DATA } from '/.vitepress/theme/untils/data'
</script>

# 收藏夹

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>