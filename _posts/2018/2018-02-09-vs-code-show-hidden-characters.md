---
layout: post
title: 用VS Code编辑markdown会出现隐藏字符？
author: Ike
tags:
- vscode
- markdown
- hidden_characters
- BS
categories: Cheat-Sheet
english: false
---


今天编辑[我的博客](https://done.moe/)，发现在Mac的Chrome上没有问题，但在Windows的Chrome浏览器，有的地方会出现一个黑底中间是个菱形的奇怪符号，我以为浏览器的问题，于是我用Mac下载了这个网页，然后用Sublime查看，的确里面出现了[BS]标识的字符。但是在VS Code里面没有显示出这个符号。

## Solution
Google了一下，原来VS Code默认不显示特殊字符，这个字符应该是一个隐藏的空格。至于怎么生成出来的就不得而知了。解决办法是这样的：

打开VS Code的配置文件，在用户设置的配置文件大括号里面加一行
```
"editor.renderControlCharacters": true
```
保存。然后回到那个文件，就会发现里面也出现了[BS]符号了。