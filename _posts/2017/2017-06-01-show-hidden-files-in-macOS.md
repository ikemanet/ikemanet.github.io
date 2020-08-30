---
layout: post
title: 在macOS中显示隐藏文件
author: 老马同学
keywords: macOS, show, hidden files, 显示, 隐藏文件
tags:
- macOS
categories: Tutorial
english: true
comments: true
description: 作为一个码农，我们经常会接触到.gitignore、.htaccess这样的文件，又或者是.git这种文件夹，今天就介绍怎样在macOS显示它们
---


作为一个码农，我们经常会接触到`.gitignore`、`.htaccess`这样的文件，又或者是`.git`这种文件夹，但这些文件你在Finder上是看不到的。  
{:.ch}
As a programmer, we usually run into `.gitignore`, `.htaccess`, or something like `.git` folder, but we can't see them in the Finder.
{:.en}

## Solution
打开Terminal，运行如下命令即可显示所有**隐藏文件**。  
{:.ch}
Open the Terminal, run the following command to show all the **hidden files**.  
{:.en}
```
defaults write com.apple.Finder AppleShowAllFiles TRUE
```
关闭所有Finder，再打开你就可以看到所有的隐藏文件了！  
{:.ch}
Close all Finder, restart it and you can see all the hidden files!  
{:.en}

执行如下命令即可不显示所有**隐藏文件**。  
{:.ch}
Run the following command to hide again all **hidden files**.  
{:.en}
```
defaults write com.apple.Finder AppleShowAllFiles FALSE
```