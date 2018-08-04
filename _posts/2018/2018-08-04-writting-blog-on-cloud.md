---
layout: post
title: 使用云服务随时随地写博客
author: Ike
tags:
- git
- command
categories: Tourial
english: false
---

使用[Jekyll](https://done.moe/cheat-sheet/2017/06/05/useful-build-command-and-parameters-of-jekyll/)搭建博客的好处自然不用说，但是如果说弊端，自然是后台都在本地，维护博客还要带着电脑？

其实不然，只需要使用以下方法就可以让你随时随地维护你的博客。

## GitHub

GitHub是通过Git进行版本控制的软件源代码托管服务，由GitHub公司（曾称Logical Awesome）的开发者Chris Wanstrath、PJ Hyett和Tom Preston-Werner使用Ruby on Rails编写而成。 

2018年6月4日晚上，美国科技公司微软宣布以75亿美元的股票收购GitHub。[^1]

[^1]: 引用 https://zh.wikipedia.org/wiki/GitHub

幸好GFW并没有屏蔽它，所以我们需要的是将我们的代码托管到GitHub上，而且GitHub本身就内置Jekyll内核，也就是说GitHub会将你的源码自动编译成静态网站，这个服务叫做GitHub Page。

### 创建自己的博客主页

我们需要做的就是将我们的库名设置成``你的GitHub用户名.github.io``（例如你的用户名为``donemoe``，就设置成``donemoe.github.io``，每个用户只允许创建一个免费的GitHub Page），你的博客就自动生成了，通过访问``你的GitHub用户名.github.io``就可以看到你的博客，注意在提交Git时，把``_site``设置到忽略清单``.gitignore``中，因为``_site``里面的内容是编译后的文件，不是源代码，每次都会变化。

如果你还想使用自己的域名，不用担心，只需要以下几步：

1. 在你的``你的GitHub用户名.github.io``库根目录新建一个文件``CNAME``（注意没有扩展名，全大写），里面内容为``你的GitHub用户名.github.io``。

2. 设置你域名的DNS，``A``记录，主机名``@``，``IP``设置成GitHub的IP。IP可能会变化，所以见[此官方支持页面](https://help.github.com/articles/setting-up-an-apex-domain/#configuring-a-records-with-your-dns-provider)

3. 设置你域名``CNAME``记录，主机名``@``，指向``你的GitHub用户名.github.io``

4. 在GitHub库的Settings里面，找到GitHub Pages，Custom domain中填入你的域名，稍等片刻（约10分钟），你就可以通过你的域名访问了！同时，GitHub还良心提供免费的Https证书，勾选下面的Enforce HTTPS就可以自动申请HTTPS证书，可能会等2-8个小时不等。

之后你可以在GitHub在线编辑，新增博文，是不是很惬意？

## CodeAnyWhere

你可能觉得GitHub在线编辑的体验还不够好，你可能还是想用自己喜欢的IDE，比如VS Code。或许你不只是想简单的添加博文，还想修改一下CSS样式，编辑一下Jekyll主题。那么你需要一个在线的IDE。CodeAnyWhere就是一个非常好的选择。CodeAnyWhere是一个非常好用的在线IDE，支持多种语言的高亮，代码自动完成，可自动连接GitHub，DigitalOcean等服务。

为什么没有推荐Cloud9？因为Cloud9已经并入了Amazon云服务，注册起来异常麻烦，只能免费使用1年。所以果断放弃了。

注册CodeAnyWhere印象中非常简单，所以这里略过了。

操作起来也很简单，直接选择New Connection，然后选择GitHub，授权过后你就可以看到你的Git库``你的GitHub用户名.github.io``，选择Unbuntu + Ruby就可以开始创建工程了。创建完成后你就可以像VS Code那样愉快的编辑你的网站了。不过我没有在Codeanywhere虚拟机上成功安装Jekyll，因为提示Ruby的版本过低，因为并没有编辑博客的需求，所以也就没有过多研究，貌似升级Ruby是一件很麻烦的事情...

在左侧文件目录点击右键，然后选择SSH Terminal就可以打开控制台，然后你就可以使用[Git命令](https://done.moe/cheat-sheet/2018/07/28/basic-git-command/)将修改推送到GitHub。在右键菜单中还有像Upload这样的命令，可以允许你上传一些文件。是不是很方便？

突然发现以前闲置许久的Surface 3又派上了用场，当时因为Surface配置太低，装了几个软件就慢的要死，可是使用云环境的好处就是本地只需要打开个浏览器窗口就可以像在本地一样工作了！

## 结语

这篇文章就是通过云环境和我的老旧的Surface写成的。好了，说了这么多，你也赶快试一试吧！有什么问题可以给我留言。
