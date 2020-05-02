---
layout: post
title: MacOS SSH 报错 no matching cipher found
author: 老马 Ike MA
title_en: SSH issue - no matching cipher found in MacOS
tags:
- macOS
- ssl
- cipher
categories: Cheat-Sheet
english: false
---


好久没有更新了！今天当我用git的时候遇到一个问题，说我没权限访问git库，可是前几天还可以呢？我看了下我的git库是ssh方式的，于是我就用命令行ssh试了一下我Git服务器的IP地址，结果得到一下错误：
```
"Unable to negotiate with "xxx" port "xxx": no matching cipher found. 
Their offer: aes128-cbc, 3des-cbc, blowfish-cbc, cast128-cbc, 
arcfour, aes192-cbc, aes256-cbc, ..."
```

## Solution
Google了一下，发现是由于我升级了macOS High Sierra 到 version 10.13.2。解决方式很简单：  

1. 找到这个文件并编辑
/etc/ssh/ssh_config

2. 找到这行
```
#Ciphers aes128-ctr,aes192-ctr,aes256-ctr,aes128-cbc,3des-cbc
```
把前面的注释“#”去掉即可！