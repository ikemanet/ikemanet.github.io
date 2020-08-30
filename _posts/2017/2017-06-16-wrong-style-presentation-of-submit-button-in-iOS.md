---
layout: post
title: 解决在iOS中提交按钮风格错误展现的问题
author: 老马同学
title_en: Wrong style presentation of submit button in iOS
tags:
- CSS
- iOS
categories: Cheat-Sheet
---


在最近的开发中，我发现提交按钮并没有完全按照设定的css展现。比如我设置按钮底色是红色，边框为0。  
```css
.submit {
  background: red;
  border: 0;
}
```
然而实际上，显示出一个圆角的按钮，且背景颜色为从浅红向下渐变到红色，高度宽度也不对。而且无论是在Chrome上还是Safari上，都是相同的显示方式。

## Solution
经过搜索，我发现这是iOS的一个Bug，它会自动在提交按钮上附加一个系统默认样式，这样一来就覆盖了本来我设置的css样式了。  
解决办法很简单，就是再加一行``-webkit-appearance: none;``，不让它自动应用默认样式。
```css
.submit {
  background: red;
  border: 0;
  -webkit-appearance: none;
}
```