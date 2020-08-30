---
layout: post
title: 在ProGuard中指定不想混淆的Class
author: 老马同学
title_en: Keep some class without obfuscation in ProGuard
tags:
- ProGuard
- Coding_Android
categories: Cheat-Sheet
english: true
---


在开发过程中，我使用到了第三方库，而在打包Apk时，又会用到ProGuard进行代码混淆。  
{:.cn}
In my developing, I use a 3rd party library. When I package the Apk file, I use ProGuard to obfuscate the source code.
{:.en}
我发现混淆后的程序在调用第三方库时，程序会崩溃，在查看日志时发现，由于运行时找不到那个第三方库，导致程序异常。  
{:.cn}
I found that the obfuscated app will crash when calling the 3rd party library, with seeing the logs, I found that the app met an exception because the app can't find the specific 3rd party library.  
{:.en}

## Solution
这是由于ProGuard将第三方库混淆后，类名、字段名、方法名均被混淆，导致找不到第三方库。可以简单用``-keep``来保留我们不想混淆的类。  
{:.cn}
That's becuase ProGuard has changed the Class name, Field Name and Function name, then caused this exception that the specific library can't be found. You can simply try to use ``-keep`` to keep the class that we don't want it to be obfuscated.  
{:.en}
在``ProGuard.cfg``中添加如下代码即可实现，将``theClassToKeep``替换成你的类名，例如``com.ikecode``：  
{:.cn}
In the ``ProGuard.cfg``, you can add the following code, replace ``theClassToKeep`` to your Class name, for example ``com.ikecode``:  
{:.en}
```
-keep class theClassToKeep.** {*;}
```
注意在类名中一定要用两个星号``**``作为通配符。  
{:.cn}
Be sure to use ``**`` as the Wildcard.
{:.en}