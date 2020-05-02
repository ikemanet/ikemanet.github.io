---
layout: post
title: Android Webview https SSL证书错误
author: 老马 Ike MA
title_en: Https SSL certificate error on Android Webview
tags:
- https
- ssl
- Coding_Android
categories: Cheat-Sheet
english: true
---


今天遇到一个诡异的问题，当webview加载一个https的地址时，在华为一款手机上无法加载，经过debug发现日志里报如下错误：  
{:.cn}
Today I found a weird issue. When the webview tried to load a https URL on a Huawei mobile phone, it stoped working. After debugging, I found the following error in the logs:
{:.en}
```
primary error: 5 certificate: Issued to: CN=my-site.com;
Issued by: CN=GeoTrust DV SSL CA - G3,OU=Domain Validated SSL,O=GeoTrust Inc.,C=US;
on URL: https://my-site.com/index.php
```

## Solution
Google了很久，最终发现这是webview的bug，出现在Android 6的webview的版本v53和v54，**所有使用Symantec证书的网站都将无法访问**。这正是我要的问题！[请参考bug链接](https://www.chromium.org/developers/androidwebview/webview-ct-bug)  
{:.cn}
During a long time researching on Google, I finally found that there is a bug in webview, it happends in version 53 and 54 in Android 6, **All pages served with Symantec certificates will not be loaded**. This is exactly same as my issue! [Link of this bug](https://www.chromium.org/developers/androidwebview/webview-ct-bug)  
{:.en}
解决办法只有让用户升级webview组件。进入Google Play商店（或其他商店），搜索``Android system webview``，安装即可。  
{:.cn}
The only solution is to ask user to upgrade there webview. Just enter to Google Play store, search ``Android system webview``, and install it.  
{:.en}