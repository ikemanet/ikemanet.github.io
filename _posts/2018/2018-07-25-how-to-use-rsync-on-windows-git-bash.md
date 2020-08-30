---
layout: post
title: 如何在Windows环境的Git Bash下使用rsync？
author: 老马同学
tags:
- rsync
- Windows
- Git Bash
categories: Tutorial
english: false
---

``rsync``是非常高效的文件夹远程差异同步工具，我现在就用它来同步Jekyll博客系统的``_site``文件夹到我的Web服务器，不过以前都是在Macbook上操作，很是顺利，可在Windows上并没有官方的下载方式，折腾了很多办法，通过MingW下载的并不能在Git Bash上运行，可能是不兼容的。那么，今天我们就来看看如何获取Windows版的rsync。

## Solution

[Tiger Fok](https://blog.tiger-workshop.com/add-rsync-to-git-bash-for-windows/)在他的博客上告诉了我们一个非常好用的方法，那就是使用[pacman库](http://www2.futureware.at/~nickoe/msys2-mirror/msys/)中的rsync程序，里面i686代表32位系统，x86_64代表64位系统，也可以到下面我的百度网盘下载。

<div class="ggad_content">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-5561611607174812"
     data-ad-slot="9604834881"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>

## 32位rsync下载

```
链接: https://pan.baidu.com/s/10vW-Dy1cTfPmCg702p_dvw 密码: 1am3
```

## 64位rsync下载

```
链接: https://pan.baidu.com/s/1_QbnuzOQjwvDSVa4knK5NA 密码: xed6
```


下载完成后，用7Zip解压两次（百度网盘的我已经打包成Zip了），找到``rsync.exe``，把这个文件拷贝到Git Bash目录``C:\Program Files\Git\usr\bin``即可在Git Bash上使用了。