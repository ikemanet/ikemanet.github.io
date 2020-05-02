---
layout: post
title: 如何在Windows环境的Git Bash下使用ssh-add？
author: 老马 Ike MA
tags:
- ssh
- ssh-agent
- ssh-add
- Windows
- Git Bash
categories: Tutorial
english: false
---

今天研究如何在Windows上使用Jekyll，最后用``rsync``同步的时候，需要添加密钥，于是使用``ssh-add``命令，可是我收到以下的错误：

```shell
$ ssh-add private.pub
Could not open a connection to your authentication agent.
```

Google了一下，把解决方案分享出来。

## Solution

使用``ssh-add``之前，要先启动``ssh-agent``，启动的方法如下：

```shell
  eval `ssh-agent`
```

之后你会看到执行结果：

```shell
  Agent pid 11476
```

后面的数字是随机的，这样就代表Agent启动成功了，然后你就可以使用``ssh-add``命令了。