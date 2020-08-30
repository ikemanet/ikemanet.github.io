---
layout: post
title: Jekyll 常用编译命令和参数
author: 老马同学
title_en: Useful build command and parameters of Jekyll
tags:
- Jekyll
categories: Cheat-Sheet
---

Jekyll是一个非常好的静态博客搭建平台，它的巨大优势就在于：你只需要一台Web服务器就可以搭建一个非常强大的静态博客，你可以最大程度的把重心放在博客的内容上，而不需要关心维护成本，也不需要考虑性能、数据库以及安全等等。同时你可以使用你熟悉的Markdown语言编写你的博客内容。  
如果你还不了解Jekyll，你可以去[官网](https://jekyllrb.com/)（英文）了解，同时还有[中文的官网](http://jekyllcn.com/)。

## 常用编译指令
下面的命令均在项目的根目录使用终端（Terminal）执行。
### 开发模式编译
```ruby
jekyll build
```
### 开发模式编译并运行
```ruby
bundle exec jekyll serve
```
### 开发模式编译（包含草稿）并运行
```ruby
bundle exec jekyll serve --drafts
```
### 生产模式编译
```ruby
JEKYLL_ENV=production jekyll build
```

## 编译配置文件
项目根目录的文件``_config.yml``中定义了编译需要的相关参数，在编译前需要有所了解。  
下面是一个包含了所有参数和默认值的完整的配置文件，摘自[官方文档](https://jekyllrb.com/docs/configuration/)。  
其中我总结了几个常用的参数和用法，请大家参考。  

```yaml
# Where things are 文件都存放在哪
source:       .
destination:  ./_site
plugins_dir:  _plugins
layouts_dir:  _layouts
data_dir:     _data
includes_dir: _includes
collections:
  posts:
    output:   true

# Handling Reading 阅读相关的参数
safe:                 false
include:              [".htaccess"]
exclude:              ["Gemfile", "Gemfile.lock", "node_modules", "vendor/bundle/", "vendor/cache/", "vendor/gems/", "vendor/ruby/"]
keep_files:           [".git", ".svn"]
encoding:             "utf-8"
markdown_ext:         "markdown,mkdown,mkdn,mkd,md"
strict_front_matter: false

# Filtering Content 内容过滤
show_drafts: null
limit_posts: 0
future:      false
unpublished: false

# Plugins 需要的插件
whitelist: []
plugins:   []

# Conversion 代码转换相关
markdown:    kramdown
highlighter: rouge
lsi:         false
excerpt_separator: "\n\n"
incremental: false

# Serving 服务器相关
detach:  false
port:    4000
host:    127.0.0.1
baseurl: "" # does not include hostname
show_dir_listing: false

# Outputting 输出相关
permalink:     date
paginate_path: /page:num
timezone:      null

quiet:    false
verbose:  false
defaults: []

liquid:
  error_mode: warn

# Markdown Processors MD语言处理器
rdiscount:
  extensions: []

redcarpet:
  extensions: []

kramdown:
  auto_ids:       true
  entity_output:  as_char
  toc_levels:     1..6
  smart_quotes:   lsquo,rsquo,ldquo,rdquo
  input:          GFM
  hard_wrap:      false
  footnote_nr:    1
```

### baseurl参数
这个参数是指部署到生产服务器时，域名后面是否要包含子目录。这个参数体现在生成sitemap上。  
例如你的网站主页如果是``https://yoursite.com/extra/index.html``，那么``baseurl``应维护为extra。  
一般情况下，我们都留空。

### host和port参数
这两个参数只在运行时有用，也就是说你用到``serve``命令生成服务器时生效。  
这就是为什么生成服务器后，我们能通过``http://127.0.0.1:4000``访问。  
如果你是通过FTP把``_site``目录下的文件上传到服务器的方式发布你的网站，那这两个参数只用于本机测试。对生产没有任何影响。  

### url参数
这个参数并没有体现在默认参数中，但对于生成sitemap来说非常关键。  
在没有加url参数时，我发现sitemap里面的url都是相对目录，比如``/index.html``。这样会导致像Google Search Console通过你的sitemap提交网页url时报错。  
实际上url指的就是你网站的域名。你可以维护成下面的形式：
```yaml
url: "https://ike.today"
```
这样你会发现sitemap中已经包含了你的域名。

### timezone参数
你可以通过[https://en.wikipedia.org/wiki/List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)查询你需要的时区。对于中国，可以维护成北京时间``Asia/Shanghai``。

### include参数
该参数指明了：  
在项目根目录，哪些文件需要强制作为网站文件，被放到_site目录。  
默认情况下，Jekyll默认会排除以``.``开头的文件，例如``.htaccess``文件，你需要将这些文件配置到include参数中，这样Jekyll在编译时会将这些文件拷贝到_site目录中。

### exclude参数
这个参数指明哪些文件需要排除，不放在_site目录中。

### keep_files参数
这个参数可以在输出目录（也就是_site目录）被清除时，指明哪些文件需要保留而不被删掉。一般情况我们也不需要在_site目录放什么东西。大可以用上面``include``参数放置文件。
