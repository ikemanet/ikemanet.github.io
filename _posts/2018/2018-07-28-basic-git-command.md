---
layout: post
title: Git 最基本的命令
author: Ike
tags:
- git
- command
categories: Cheat-Sheet
english: false
---

本人比较懒，不是很爱学习新东西，之前用Git一直在用GUI SourceTree，今天因为用到Cloud IDE+GitHub才迫不得已用一下Git的命令行，如果你是Git的新手，也分享给你最基本的命令。

## 新建一个Git版本库

把一个本地文件夹变成一个Git版本库：

```shell
$ git init
```
## 更新远端最新文件

在提交修改之前，应先检查是否远端有更新，先要应用更新，然后再执行本地修改，避免文件合并等复杂操作。

```shell
$ git push origin master
```

## 查看变更

查看（从上一次变更提交后）都有哪些文件改动，使用以下命令：

```shell
$ git status
```

## 确认变更

简单来说，就是在提交一次变更之前，需要确认哪些文件需要提交进去，一般来说我们都是提交所有修改了的文件到这次变更，那么就用以下命令：

```shell
$ git add .
```

如果你想取消确认某个文件，可以用以下命令：

```shell
$ git reset HEAD 你的文件
```
## 提交变更

提交上一个步骤已经确认过的文件，``-m``后面填上本次变更的备注：

```shell
$ git commit -m '本地变更的备注内容'
```

也可以把``add``放到``commit``里面一起操作，如下：


```shell
$ git commit -a -m '本地变更的备注内容'
```

## 设置远端库

本地提交完成后，还需要推送到远端，第一次提交到远端时，需要设置远端库的路径，使用以下命令：

```shell
$ git remote add origin 你的远端库URL
$ git remote -v
```

如果是GitHub的话，可以从GitHub的Quick Setup页面找到URL。

![](https://help.github.com/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

设置远端的这个步骤只需要执行一次，设置成功后你的远端代号就叫``origin``。

## 推送到远端

本地提交完成后，用此命令推送到远端：

```shell
$ git push origin master
```
``master``是你要推送的分支。

你可以用下面的命令让git记住你的用户名密码信息：

```shell
$ git config credential.helper store
```

还可以设置缓存时间（记住多久，单位秒，默认值900）：

```shell
$ git config credential.helper cache <缓存时间>
```

推送到我的私有Git远端时，我遇到报错：

```shell
error: refusing to update checked out branch: refs/heads/master
error: By default, updating the current branch in a non-bare repository
error: is denied, because it will make the index and work tree inconsistent
error: with what you pushed, and will require 'git reset --hard' to match
error: the work tree to HEAD.
error: 
error: You can set 'receive.denyCurrentBranch' configuration variable to
error: 'ignore' or 'warn' in the remote repository to allow pushing into
error: its current branch; however, this is not recommended unless you
error: arranged to update its work tree to match what you pushed in some
error: other way.
error: 
error: To squelch this message and still keep the default behaviour, set
error: 'receive.denyCurrentBranch' configuration variable to 'refuse'.
```

原因是因为远端库不是裸库，用下面的方法把已有的git库转换成裸库。（我之前远端用的是``git init``，并非创建的裸库）

```shell
$ git config --bool core.bare true
```

## 分支的操作

要在当前分支的基础上新建一个分支``branch1``并切换到该分支，可以使用以下命令：

```shell
$ git checkout -b branch1
```

单独且还分支，则不加``-b``参数，例如要切换回``master``分支，则：

```shell
$ git checkout master
```

若要将分支``master``合并到``branch1``，也就是说合并后``master``和``branch1``是一样的，则用以下命令：

```shell
$ git checkout master
$ git merge branch1
```
如果合并遇到冲突，则可以通过``git status``来检查冲突点。


要删除分支``branch1``，则用以下命令：

```shell
$ git branch -d branch1
```

