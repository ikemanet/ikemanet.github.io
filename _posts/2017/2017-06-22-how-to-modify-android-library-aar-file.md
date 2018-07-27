---
layout: post
title: 如何修改Android Library aar文件
title_en: How to modify Android Library AAR file
tags:
- Coding_Android
categories: Tutorial
english: true
---


我们知道AAR文件实际上是一个压缩包，有时我们需要修改里面的资源文件，所以我们需要解压，修改资源然后再打包回AAR。  
{:.cn}
As we know, AAR is a kind of compressed package. In some cases, we need to change the reference inside. So we need to unzip, change the res and package again at last.  
{:.en}
那么正确的操作方式是怎样的呢？  
{:.cn}
But what is the correct way to do this?  
{:.en}


## Solution
下面就告诉你正确的姿势。  
{:.cn}
Let me show you the correct way.  
{:.en}
我们推荐使用命令行的方式：  
{:.cn}
We recommend to use command line:  
{:.en}
首先，进入到需要修改的AAR所在目录。
{:.cn}
Firstly, go to the folder which the AAR file that you want to modify is located.
{:.en}
```
cd /libFolder
```
然后执行解压缩命令，会将AAR中的全部内容解压到新建文件夹tempFolder中。  
{:.cn}
Then execute the unzip command, it will unpackage all things from AAR to the new folder tempFolder.  
{:.en}
```
unzip thelib.aar -d tempFolder
```
接着修改你想要修改的文件。  
{:.cn}
You can modify the reference whatever you want.  
{:.en}
最后打回AAR包：  
{:.cn}
Finally, package to AAR.  
{:.en}
```
jar cvf newlib.aar -C tempFolder/ .
```
删除tempFolder和thelib.aar，将newlib.aar重命名为thelib.aar，就大功告成了！  
{:.cn}
Delete the tempFolder and thelib.aar, rename newlib.aar to thelib.aar, done!  
{:.en}