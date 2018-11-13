---
layout: post
title: 华米运动手表2优化篇
author: Ike
tags:
- amazfit
- huami
- sport
- watch
- optimization
categories: Tutorial
english: false
---

## 前言

上一篇我已经介绍了如何延长华米运动手表2的续航，如果没有阅读的蛋友可以参考。[传送门](https://done.moe/tutorial/2018/10/31/battery-experience-of-amazfit-sport-watch-2/)

今天我们说说如何改善你的华米手表2，使你的手表更好用，更耐玩！

由于华米手表性价比很高，很受洋鬼子们的喜爱！其中不免有一些国外高手推出了一些神作，下面我们就来逐一看看。

**声明！下述操作需要有一定动手能力的蛋友尝试，本人不对误操作或本文错误导致的任何问题负责。操作前请有足够的心理准备。**

## 传说级表盘

国外一个大神Istvan Szabadi（[作者网站](http://amazfit.szabadi.info/)）推出了高清数字表盘，马上就让你的手表变得高大上起来！而且上面包含各种实用信息。

![表盘截图](/assets/img/posts/2018/11/huami-watch-face.png)

这位大神开发了``APK``表盘，不同于标准的``WFZ``表盘，``APK``表盘就如同一个安卓的应用程序，允许定义更个性化的显示方式，比如使用自定义的字体以及显示逻辑等，所以看起来也更炫。

我现在使用的就是上图的这款，个人非常满意！你可以在[此处下载](http://amazfit.szabadi.info/en/page/show/digital-dashboard-black)，或者在下面的百度云下载。

```
链接:https://pan.baidu.com/s/1hjH8J7FIDRAEAReFH-nvYw
密码:nwir
```

### 如何安装？

熟悉安卓的朋友都知道，APK是安卓的安装包，需要安装后才能使用。这里推荐使用[APK Installer](http://apkinstaller.com/downloads/)。

如果你在使用Windows 7则可能需要安装ADB Driver（驱动），可到我的百度云下载：

```
链接:https://pan.baidu.com/s/1ABuZdwLj21RalSwrPpMu0Q
密码:uupo
```

![APK Installer 截图](/assets/img/posts/2018/11/apkinstaller-for-pc-installation.jpg)

安装APK非常简单，将手表链接到PC，然后点击APK Installer界面上的Installer按钮，然后在空白处点击鼠标右键选择add APK，然后点击右下角的Install按钮即可完成安装。

安装后，稍等片刻你就可以在手表上找到新的表盘了。

## AmazMod

[查看AmazMod作者的GitHub](https://github.com/edotassi/AmazMod)

这是另一神作，出自作者Edoardo Tassinari，初衷主要是弥补了官方通知消息功能的缺失。（官方实在是太懒了，这么简单的功能都实现不好，竟整一些华而不实的功能）

有了AmazMod，再也不用担心错过通知了，也不用担心通知亮屏费电了，还可以秒回！

除了通知功能的完善，该Mod还实现了文件管理功能，这个功能太赞了，再也不需要连PC传歌了。主要功能如下：

- 可以控制通知收到之后解锁并亮屏/不亮屏（不亮屏时可以点击亮屏），震动/不震动，震动多长时间，停留多长时间等
- 可以控制通知样式，例如白色背景/黑色背景，字体大小等
- 可以实现通知的快速回复（适用于Whatsapp, Messager, Skype，微信不可用）
- 可以实现通知分组
- 电池电量分析
- 手表亮度细化设置
- 文件管理
- 命令行命令执行

![AmazMod 截图](/assets/img/posts/2018/11/amazmod.jpg)

### 如何安装？

需要在手机和手表中各安装一个终端，手机的可以在Google Play商店搜索``AmazMod``下载，手表的可以在[此处下载](https://github.com/edotassi/AmazMod/releases/latest)。手表客户端已经支持中文（我参与了部分翻译:)）

没有Google Play的朋友可以在我的百度云下载（手机客户端版本``1.0.64ch``，手表客户端版本``1702``）：

```
链接:https://pan.baidu.com/s/1IciGx8FUsjkKq9yXf5eJHQ
密码:xtue
```
安装完成后需要重启手机和手表，确保将手机端APP加入白名单，让其始终运行。

手表端我的设置分享如下：

![设置截图](/assets/img/posts/2018/11/amazmod-settings-1.jpg)
![设置截图](/assets/img/posts/2018/11/amazmod-settings-2.jpg)
![设置截图](/assets/img/posts/2018/11/amazmod-settings-3.jpg)
![设置截图](/assets/img/posts/2018/11/amazmod-settings-4.jpg)

在耗电方面，1702这个版本比上个版本更省电，几乎察觉不到费电的情况，但要按我上面的情况来设置，其实费电主要是背光，当然也取决于消息的多少。

## 国际版稳定版ROM

[出自XDA大神，点击查看原贴链接](https://forum.xda-developers.com/smartwatch/amazfit/fw-tool-stock-international-firmware-t3764636)

本ROM基于国际版2.3.6.1基础上改造，经本人实测，超级稳定超级省电，正常使用可以用至少6天以上，GPS定位超准。测试条件：

- 每周跑1次步（30分钟）
- 每天23点至8点飞行模式
- 关闭抬腕亮屏
- 关闭实时心率监测（打开则耗电少1天）
- 打开数据自动同步（保证步数及时同步）
- 安装了AmazMod（实现收到通知后，点击亮屏，既省电又不耽误看通知）

有以下缺点：

- 没有米家APP（可以后续安装）
- 手表没有来电归属地显示
- 跑步没有语音播报

但个人认为对我来说已经足够了。

### 如何安装？

**注意：安装步骤比较需要有风险性和技术性，需要自行承担风险！**

**此ROM只适用于华米运动手表2，不适用于1代和3代**

### 解锁

首先你需要解锁你的手表，解锁后才能刷入自定义ROM。解锁实际上就是要获得一个``Key``（``解锁码``），点击下面链接进入非官方解锁服务，解锁后你将收到一个解锁邮件，包含了``解锁码``。

[解锁网站（英文），点击进入](https://unlockamazfit.com/index.php)

注意：该网站使用了Google的人机身份验证reCAPTCHA，因此需要翻墙否则无法继续。你也可以将信息留言给我，我帮你解锁。

在第一个画面点击最后的按钮“I fully understand and want to continue”，然后第二个画面就是要输入你手表的一系列信息：

- First and last name	名字和姓（这里校验逻辑很诡异，我输入``Ike MA``则无法通过，最后我输入了我同事的名字``Matias De Hoz``成功...）
- Serial number	使用ADB命令行获取（见下文）
- Bootloader version 使用ADB命令行获取（见下文）
- Watch OS version 输入2.0.0即可
- Email address	输入你的email，用于接收解锁码
- Email address (repeat) 再次输入你的email

Bootloader version和Serial number你可以通过下面的方式获取：

首先让手表进入Bootloader模式：
```
adb shell reboot bootloader
```
进入后输入下面指令：
```
fastboot getvar all
```
你将得到类似的信息：
```
C:\adb>fastboot getvar all
< waiting for device >
(bootloader) version-bootloader: U-Boot 2013.07-00096-gf3b140c
(bootloader) version-baseband: N/A
(bootloader) version-hardware: V1.1 20130322
(bootloader) version-cdma: N/A
(bootloader) variant: watch
(bootloader) serialno: 0123456789abcdef
(bootloader) product: watch
(bootloader) secure: no
(bootloader) unlocked: no
(bootloader) uart-on: NO
(bootloader) partition-size:bootloader: 0x0000
(bootloader) partition-type:bootloader: emmc
(bootloader) partition-size:recovery: 0x1000
(bootloader) partition-type:recovery: emmc
(bootloader) partition-size:boot: 0x2000
(bootloader) partition-type:boot: emmc
(bootloader) partition-size:system: 0x3000
(bootloader) partition-type:system: ext4
(bootloader) partition-size:cache: 0x4000
(bootloader) partition-type:cache: ext4
(bootloader) partition-size:userdata: 0x5000
(bootloader) partition-type:userdata: ext4
(bootloader) max-download-size: 0x4000000
all:
finished. total time: 0.280s
```
其中``version-bootloader: ``后面的文字，填入Bootloader version，``serialno: ``后面的文字填入Serial number。

之后到[XDA原贴](https://forum.xda-developers.com/smartwatch/amazfit/fw-tool-stock-international-firmware-t3764636)下载ROM``Stock US/International 2.3.6.1 Firmware Installer with OTA updates``，或者到我的百度云下载：

```
链接:https://pan.baidu.com/s/1p6S01itV56zX7cOEGQiV9g
密码:69u7
```
下载后解压，重启手表至正常状态。

执行``flash_US2.bat``，等待其完成即可。

完成后你可以在手表``设置``里修改语言。
