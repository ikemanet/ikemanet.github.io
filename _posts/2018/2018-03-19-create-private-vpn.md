---
layout: post
title: 如何自己搭建VPN服务？
author: 老马同学
tags:
- vpn
- server
- shadowsocks
categories: Tutorial
english: false
---

回国以后访问不了谷歌，查不了资料了怎么办？结合了网上的资料，将方法总结如下。注意！即便建立了私有VPN，频繁使用IP仍然可能被封，所以此方法仅限查资料用途，不要去Youtube看视频或下载。

## Solution

创建私有VPN使用方便，稳定，被封的几率小。

你可以先去DigitalOcean买一个虚拟机，我就是用的他家的，创建过程非常方便，不过需要每月交$5美元，或者你可以选择其他服务商。**如果你有网站，不建议你用你现有的服务器创建VPN，万一被封了连你的网站也用不了了。**

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

创建虚拟机时选择CentOS，其余都选最低的（默认配置）即可。接下来就是安装Shadowsocks服务端了。

### 安装 Shadowsocks 服务端

点击Access console进入服务器终端，输入以下命令行：

```
yum install python-setuptools && easy_install pip
pip install shadowsocks
```

如果是Linux系统，可输入如下命令

```
apt-get install python-pip
pip install shadowsocks
```

之后通过vi新建VPN的配置文件

```
vi /etc/shadowsocks.json
```
进入vi编辑器界面后，按INSERT键（Mac上按i键）进入编辑模式。输入如下内容，更改带注释的项目。

```javascript
{  
    "server":"0.0.0.0", //此处替换成你的服务器IP  
    "server_port":8388, //此处替换成你需要的端口，最好不要使用默认的8388 
    "local_address": "127.0.0.1",  
    "local_port":1080,  
    "password":"你的VPN密码",  
    "timeout":500,  
    "method":"aes-256-cfb",  
    "fast_open": false  
}
```

输入好后，点击ESC键退出编辑模式，然后输入``:x``即可保存文件。

之后输入如下命令启动VPN服务 

```
  ssserver -c /etc/shadowsocks.json -d start
```

如下命令可以停止服务 

```
  ssserver -c /etc/shadowsocks.json -d stop
```

如下命令可以在前台启动服务 

```
  ssserver -c /etc/shadowsocks.json
```

如果需要开机自动启动VPN服务，按如下进行操作 

```
  vi /etc/rc.local
```

文件内容编辑为： 

```
  ssserver -c /etc/shadowsocks.json -d start
```

Shadowsocks 日志保存在 ``/var/log/shadowsocks.log`` 

服务端配置好后，下面就是用 Shadowsocks 客户端来使用VPN服务了。 

### 安装 Shadowsocks 客户端

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

```
Windows   
https://github.com/shadowsocks/shadowsocks-windows/releases   
  
Mac OS X   
https://github.com/shadowsocks/ShadowsocksX-NG/releases

linux   
https://github.com/shadowsocks/shadowsocks-qt5/wiki/Installation
https://github.com/shadowsocks/shadowsocks-qt5/releases

Android   
https://play.google.com/store/apps/details?id=com.github.shadowsocks   
https://github.com/shadowsocks/shadowsocks-android/releases

iOS
由于多个地区商店均没有收录该应用，请在商店搜索
FirstWingy
```

**在客户端配置好服务器信息后，恭喜你现在可以自由上网了！**

<img src="/assets/img/posts/2018/03/googleplus.jpg" width="200">

### 被封了怎么办？

上文也说了，即便是私有VPN也有一定几率被封。被封了以后只能销毁掉之前的虚拟机，重新创建一个，创建时最好换一个区域。然后重新执行上述步骤即可。用DigitalOcean可以点击Destory，然后再Create即可。