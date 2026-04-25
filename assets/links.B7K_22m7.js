import{Bt as e,Gn as t,Gt as n,H as r,Qn as i,Rt as a,U as o,_n as s}from"./framework.BxU7WtNw.js";import{t as c}from"./theme.BYYphGEx.js";import"./chunks/vue-i18n.CeLwqkKF.js";import{a as l,i as u}from"./chunks/vue-router.LDVTdF7B.js";var d={__name:`index`,setup(d,{expose:f}){let p=t(JSON.parse(`{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/links/index.md"}`)),m=l(),h=u(),g=Object.assign(h.meta.frontmatter||{},p.value?.frontmatter||{});return m.currentRoute.value.data=p.value,e(`valaxy:frontmatter`,g),globalThis.$frontmatter=g,f({frontmatter:{}}),(e,t)=>{let l=c;return a(),r(l,{frontmatter:i(g)},{"main-content-md":s(()=>[o(` ---
title: 我的小伙伴们
keywords: 链接
description: 云游的小伙伴们
links: https://friends.yunyoujun.cn/links.json
random: true
---

<YunLinks :links="frontmatter.links" :random="frontmatter.random" /> `)]),"main-header":s(()=>[n(e.$slots,`main-header`)]),"main-header-after":s(()=>[n(e.$slots,`main-header-after`)]),"main-nav":s(()=>[n(e.$slots,`main-nav`)]),"main-content-before":s(()=>[n(e.$slots,`main-content-before`)]),"main-content":s(()=>[n(e.$slots,`main-content`)]),"main-content-after":s(()=>[n(e.$slots,`main-content-after`)]),"main-nav-before":s(()=>[n(e.$slots,`main-nav-before`)]),"main-nav-after":s(()=>[n(e.$slots,`main-nav-after`)]),comment:s(()=>[n(e.$slots,`comment`)]),footer:s(()=>[n(e.$slots,`footer`)]),aside:s(()=>[n(e.$slots,`aside`)]),"aside-custom":s(()=>[n(e.$slots,`aside-custom`)]),default:s(()=>[n(e.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{d as default};