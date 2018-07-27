---
layout: post
title: 怎样下载Google字体
author: Ike
title_en: How to download Google Fonts
tags:
- CSS
- Fonts
categories: Tutorial
---


在设计前端网页时，我们可能会用到一些远程字体。我很喜欢Google的一些字体，比如PT Sans, Roboto，但是总是会担心Google的服务会被墙。  
那么如何把这些字体下载到本地，放在自己的服务器上使用呢？  

## Solution
我们可以使用命令行的方式下载。  
首先安装Google Webfont downloader  
```
npm install -g goog-webfont-dl
```
之后你就可以使用如下命令下载字体了  
比如你正在使用Roboto字体，你的请求是这样的：
```html
<link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400' rel='stylesheet' type='text/css'>
```
你就可以通过如下命令下载这个字体：
```
goog-webfont-dl -a -f 'Roboto' -y '100,300,400'
```
然后就将得到如下的目录结构：
```
/Roboto.css
/Roboto
  └─┬ Roboto-Light.ttf
    ├ Roboto-Light.woff
    └ ...
```
把这些文件放到你的assets/fonts文件夹中，将原来的css请求改为：
```html
<link href='/assets/fonts/Roboto.css' rel='stylesheet' type='text/css'>
```
这样就大功告成了！Enjoy！