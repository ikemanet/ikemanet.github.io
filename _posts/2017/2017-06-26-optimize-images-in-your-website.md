---
layout: post
title: 优化你网站上的图片文件
author: 老马 Ike MA
title_en: Optimize images in your website
tags:
- Web
categories: Tutorial
---


如果你是一名站长，一定很在乎网页的加载速度和占用的带宽。通常图片都是拖慢加载速度和加大带宽占用的大户。通过Chrome开发人员工具的Network功能，你就可以看到图片的加载占用了80%的时间。所以核心问题就是怎样能在尽量保持图片质量的情况下，缩减图片大小。


## Solution
我们引入两个工具，optipng和jpegoptim，前者用来优化PNG图片，后者优化JPG和JPEG。实测通常可以让图片减小40%以上。  

### 安装
#### Linux
```
apt-get install optipng
apt-get install jpegoptim
```
#### Mac OS
```
brew install optipng
brew install jpegoptim
```
如果你还没有Homebrew，你可以前去了解一下，Homebrew是Mac上的软件包管理器，你值得拥有。[传送门](https://brew.sh/)  

### 使用
#### optipng
优化所有文件，你可以使用下面的指令
```
find . -iname "*.png" -exec optipng {} \;
```
如果你想获得更好的优化效果，并且不那么在乎花更多时间，你可以使用下面的指令
```
find . -iname "*.png" -exec optipng -o7 {} \;
```
#### jpegoptim
优化所有文件，你可以使用下面的指令
```
find . -iregex ".*\.jpe?g" -exec jpegoptim {} \;
```
你可以通过降低质量的方式，获得更小的文件体积，通常我使用85%的质量，一般情况肉眼看不出来区别。
```
find . -iregex ".*\.jpe?g" -exec jpegoptim --max=85 {} \;
```