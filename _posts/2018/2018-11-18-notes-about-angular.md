---
layout: post
title: Angular 学习笔记（入门）
author: 老马 Ike MA
tags:
- angular
- typescript
- notes
- getting started
- quick guide
- cheatsheet
categories: Cheat-Sheet
english: false
featured: "notes-about-angular.jpg"
---

**此笔记根据我在Udemy的Angular视频课程而总结形成。**

**做此笔记主要是为了督促自己学习，也是为了方便其他学习者。转载请注明出处。**
[https://ike.today/cheat-sheet/2018/11/18/notes-about-angular/](https://ike.today/cheat-sheet/2018/11/18/notes-about-angular/)

**Day 1**
## 快速上手

### 简述
Angular 是前端框架之一，使用 TypeScript 作为编程语言，主要解决日渐庞大的前端（Front end）开发和测试问题。前端和后端通过HTTP协议用以传递数据（Data）。

### 开发环境准备
我的环境是macOS。
- 安装稳定版Nodejs，用来使用``npm``命令（Node Package Manager），以便安装后面所需的软件，安装完成使用``node --version``验证
- 安装Angular CLI（Command-Line Interface 命令行工具）
```shell
$ sudo npm install -g @angular/cli
```
``-g``代表 Global，将安装在公共目录，不带此参数代表只将Angular CLI安装在当前目录。安装完成后用``ng --version``来验证，``ng``是Angular CLI提供的命令

**Day 2**
### 第一个Angular应用
建立第一个Angular应用。
```shell
$ ng new hello-world
```
### 推荐的开发工具（IDE）
我使用[VS Code](https://code.visualstudio.com/)。
- 使用``Shift+CMD/CTRL+P``打开**命令面板**（Command Palette）
- 在命令面板中键入``code``，下面找到``Install code command in PATH``，这将允许你在命令行中键入``code 文件夹``用VS Code快速打开该目录。你可以用命令行进入``hello-world``目录然后键入``code .``打开hello-world项目。
- 添加``Auto Import``插件，以便VS Code可以自动完成引用所需``ts``模块的`import`代码。
- 使用``F2``可以对变量等内容进行批量重命名。

### 运行Angular应用
进入``hello-world``，然后
```shell
$ ng serve
```
这将建立一个Web服务器，你可以用浏览器打开``localhost:4200``来查看运行结果了。

### Angular 项目结构
- ``e2e``，端对端（End to End）测试，一种黑盒自动化测试方法
- ``node_modules``，我们这个项目的所需的``node``第三方模块（依赖）
- ``src``，我们项目的源代码
- ``-- app``，存放``module``和``component``，后续会继续介绍
- ``-- assets``，存放静态资源文件（例如图片，图标）
- ``-- environments``，环境配置信息
- ``-- index.html``，应用主页面（无需修改）
- ``-- main.ts``，程序起始逻辑
- ``-- polyfills.ts``，为主流浏览器提供Angular所需的JS特性适配
- ``-- test.ts``，测试文件
- ``.angular-cli.json``，Angular CLI所需配置
- ``.editorconfig``，为团队提供相同的编辑器配置
- ``.gitignore``，提交Git库可忽略的文件
- ``karma.conf.js``，Karma是一个JS测试工具
- ``package.json``，node的依赖库配置
- ``protractor.conf.js``，端到端测试配置
- ``tsconfig.json``，TypeScript配置
- ``tslint.json``，Tslint配置

### Webpack
Webpack是一个自动构建工具，它做了一件事，就是把你的HTML，Javascript，CSS都分别打包成了单一的``bundle.js``文件，并在运行时注入到页面中。

Angular使用Webpack作为编译工具，当你在编辑器修改了文件，Webpack可监控这些改动并重新编译并重新注入，你无需刷新浏览器即可看到修改生效。

### Angular 历史
- 2010年，Angular 1.0诞生（诞生时称作Angular，而现在改称为**AngularJS**，以区别于2.0以上的版本），诞生时是一个基于JavaScript的前端框架
- 随着Angular的升温，JavaScript并不能满足日益增多的开发需求和支撑AngularJS框架的日益庞大，于是Angular小组决定重写其框架底层
- 2016年，Angular 2诞生，基于TypeScript，你可以理解成几乎是一个全新的框架，这也给基于AngularJS的开发人员迁移到2.0造成了很大困扰
- Angular 2.0, 2.1, 2.2, 2.3之后，Angular 4突然出现了，但Angular 4其实并不是大幅度的更新，也可以理解成2.4，主要原因是为了统一其子组件的版本，在4之前，子组件的版本号参差不齐，最高的是``@angular/router``为3.3.0，因此干脆全部变成4.0
因此业界现在所说的**AngularJS**则代表的1.x（已经淘汰），**Angular**代表2.0和以后的版本。

## TypeScript 基础
因为Angular使用TypeScript作为主要开发语言，所以不得不先了解一下TypeScript。
### TypeScript 简述
TypeScript是一种由微软开发的自由和开源的程式语言。它是JavaScript的一个严格超集。 C#的首席架构师以及Delphi和Turbo Pascal的创始人安德斯·海尔斯伯格参与了TypeScript的开发。

TypeScript设计目标是开发大型应用，然后转译成JavaScript。由于TypeScript是JavaScript的严格超集，任何现有的JavaScript代码都可在TypeScript程序中顺利执行。

但可惜的是网页浏览器并不认识TypeScript（也没打算在今后支持），所以运行前TypeScript需要**转译**（严格意义上不算编译，但后文仍使用编译一词）成JavaScript，TypeScript的编译器``tsc``可以帮我们完成编译过程。

TypeScript有以下优势和特点：
- 强类型（Strong Type），必须定义变量类型，有助于调试，避免运行时错误等
- 面向对象特性，也就是有你在Java中熟悉的Class，Interface，Public，Private等等
- 可在编译时发现错误，避免运行时错误
- 优秀的IDE支持（例如VS Code）

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

### 编译

使用``tsc``（Type Script Complier）编译第一个TypeScript程序，``main.ts``
```shell
$ tsc main.ts
```
编译后，你将看到一个``main.js``文件，这就是编译后的文件。你可以用``node``来运行它
```shell
$ node main.js
```
在Angular中，我们不需要使用tsc来构建。Angular CLI会自动帮我们完成编译。

### 声明变量

在JavaScript中，我们用``var``来声明一个变量，一旦声明，它的作用域是这一行以下的全部区域。

而在TypeScript中，使用``let``定义变量，作用域类似于Java，只作用于当前代码块。因此TypeScript可以避免很多不必要的错误。

```ts
let count = 5; //定义一个变量并赋值5，赋值后count将为数字型
let count: number; //显性定义count为数字型
let count; //定义一个变量count为任意性，类似于js中的var

let a: number; //整数，小数
let b: boolean; //true, false
let c: string; //字符串
let d: any; //任意
let e: number[] = [1, 2, 3]; //数字型数组定义
let f: any[] = [1, true, 'a', false]; //任意型数组

const ColorRed = 0; //常量定义

//枚举类型定义，不定义则为数字型，从0开始自动赋值
enum Color { Red, Green, Blue }; 
let backgroundColor = Color.Green; //Color.Green 值为1
//建议给枚举类型的每一项赋值，避免日后从中间增加新项
enum Color { Red=0, Green=1, Blue=2 }; 
```
注意：即便在有错误的情况下，仍然可以编译出js文件，且js文件还可能正常运行，但一定要解决ts的错误。tsc只会报告给你错误，但并不阻止编译。

当变量类型为``any``时，我们需要**类型断言**（Type Assertion）为特定类型，以便使用该类型的方法，也开启了IDE的自动完成功能。

注意：类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的。
```ts
let message; //此时message为any型
message = 'abc';
//将message断言为string类型，才可使用endsWith方法
let endsWithC = (<string>message).endsWith('c');
//另一种断言写法
let alternativeWay = (message as string).endsWith('c');
```

### 箭头函数 (Arrow function)
```ts
let log = function(message) {
    console.log(message);
}
let doLog = (message) => {
    //有很多行
    console.log(message);
}
//函数内只有一行
let doAnotherLog = (message) => console.log(message); 
//函数没有参数
let doNoParameterLog = () => console.log();
```

### 接口（Interface）
很多时候，我们为了避免方法中包含过多入参，而会把这些入参定义为一个对象，并用对象作为入参取代若干参数。例如这样：
```ts
//使用内联注释的方式定义一个point对象
let drawPoint = (point: { x: number, y: number }) {
    // ...
}

drawPoint({
    x: 1,
    y: 2
})
```
该方法可用于简单的案例，缺点是point类型无法在其他函数中复用，drawPoint是独立的函数，其实应该归属于point（因为**画点**和**点**相关，他们应该归类在一起）。所以这里可考虑使用**接口**和**类**。
```ts
//给接口命名时，首字母大写
interface Point {
    x: number,
    y: number,
    draw: () => void
}
```
**接口**其实就是定义一个标准，比如**点**应该包含x和y，还有一个画点的方法。所以接口中只包含定义，而不包含方法的实现部分。

### 类（Class）
```ts
class Point {
    x: number;
    y: number;
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

//用new关键字生成Point类的一个实例
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();
```

### 构造方法 (Constructor)
上一节的代码其实有冗余之处，也就是我们用了好几行来给x和y赋值，但他们的值应该在创建point就应该具有了。

因此我们可以使用**构造方法**来完成这一操作。
```ts
class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let point = new Point(1, 2);
point.draw();
```
但在TypeScript中，只能定义一个构造方法。因此可以用``?``来定义该参数是否可选。
```ts
class Point {
    //...

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }
}
```
### 访问修饰符（Access Modifier），访问控制
有时候，我们不想有些成员变量可被外界访问。因此我们可以使用**访问修饰符**。也就是你熟悉的``private``、``public``。

不带修饰符的默认为``public``。``private``则限制该变量或方法只能在该类内部使用。
```ts
class Point {
    private x: number;
    private y: number;
}
```

### 自动构造成员变量
而在构造方法的输入参数中如果添加了``private``这样的修饰符则有额外作用，就是构造方法可以按照入参创建成员变量，并把入参值赋予该成员变量。
```ts
class Point {
    //...

    //相当于定义了成员变量 private x和y，并执行 this.x = x; this.y = y;
    constructor(private x?: number, private y?: number) {
    }
}
```

### 属性（Property）
上面的例子中，我们虽然控制了x和y无法从外界赋值，但外界也无法得到x和y的值。

通常我们需要创建``get``方法，例如创建``getX``，但外界就需要调用``point.getX()``来获取x的值。有没有办法可以用``point.x``这种更干净的写法呢？

而还有些时候，我们想让外界可以给x赋值，但只能赋特定的值或范围。

综合以上使用场景，我们可以使用**属性**。

```ts
class Point {
    constructor(private _x?: number, private _y?: number) {
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.');
        }
        this._x = value;
    }
}

let point = new Point(1, 2);
let x = point.x; //会执行get x方法
point.x = 10; //会执行set x方法
point.draw();
```
**属性**其实并不是成员变量，而只是简化了的Get和Set方法，但由于其用法类似于public变量，所以如果你定义了一个属性x，则会跟构造函数中定义的成员变量x冲突（IDE会报错，因为当调用方执行``point.x = 5``时不知道是应该给x赋值还是调用的属性方法set x），因此通常规则是private的成员变量以下划线开头命名，也就是``_x``，这样属性就可以定义成``x``。这样调用方可以认为``point.x``的x就是``Point``类的成员变量“x”了。

### 模块（Module）

你可以把关于Point类的代码放在另一个文件中，例如``point.ts``，然后通过``import``引用，这时Point就是一个**模块**。
```ts
//引用时，路径中不需要包含扩展名'.ts'
import { Point } from './point'

let point = new Point(1, 2);
//...
```

**Day 3**
## Angular 基础

### 概述
- **Component**(组件) 一个组件包含**数据 Data**，**HTML模板 Template**和**页面逻辑 Logic**，Component以树形结构组成
- **Module**(模块) 模块是包含多个Component的集合，复杂应用可能包含多个模块
- **Service**(服务) 从字面意思可得出，Service 类似于公共逻辑库，完成一项或多项任务。例如**读取数据**、**发送HTTP请求**等等，可被其他 Component 调用。而 Component 中的逻辑部分只限于页面显示逻辑，与业务相关的逻辑应当放置于 Service 中。同时服务可有助于单元测试和自动化测试。例如**数据库服务**可在单元测试时很容易的用**数据模拟服务**替代

### 组件和服务（Component & Service）
```shell
$ ng g c course
```
g代表generate（生成），c代表component。

命名规则为全小写，有多个词时用``-``隔开，例如``word1-word2``

在``course.component.ts``你可以看到component的主体代码，其中分为几部分：
- ``import``该Component所引用的模块
- ``@Component``修饰符，里面包含``selector``HTML标签名，``template``HTML模板（也就是这个Component在页面中所包含的HTML代码），``style``该Component包含的样式（作用域仅在该Component的HTML标签内部）
- ``export class``该Component的**数据部分**（类成员变量）和**逻辑部分**（类方法）

Component 需要**注册**到 Module 中才能使用（例如``app.moudle.ts``），在``declarations``中注册。

见以下例子：

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{% raw %}{{ title }}{% endraw %}</h2>
        <ul>
            <li *ngFor="let course of courses"></li>
        </ul>
    `
})
export class CoursesComponent {
    title = "list of courses";
    courses = ["course1", "course2", "course3"];
}
```

其中一些概念：
- ``{% raw %}{{ }}{% endraw %}``称为 String Interpolation（字符串插值），也就是在HTML中插入一些逻辑代码的意思，因此在大括号里面你可以使用该Component的变量和方法
- ``*``这种用法称为 Directive（指令），类似于HTML标签的 Property（属性），每个 Directive 会包含一些逻辑或作用。

服务 Service 的代码就类似于一个普通的TS类，看以下例子：

```shell
$ ng g s courses
```

```ts
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
    getCourses() {
        return ["course1", "course2", "course3"];
    }
}
```
调用时，使用``依赖注入``的方式。

### 依赖注入（Dependency Injection）
什么是依赖注入？这个词貌似很难理解，其实就是下面这回事：
- 在Component中的构造方法中声明我要用的服务，这些服务也就是**依赖**（以构造方法的自动构造成员变量特性声明依赖）
- 在Module中的``providers``中**注入**该**依赖**，也就是声明服务的提供者
使用依赖注入的好处在于将服务的使用者与服务的提供者**解耦**。

具体来讲，原来我要在Component里面``new``一个Service，那么一旦将来要更换这个Service，我就要修改所有涉及调用该Service的Component。

而使用依赖注入的理念，我只需要在Component里面提供这个Service的名字，在Module中，我将该Service接入，那么利用面向对象的思想，我可以在Module中接入该Service，也可以接入该Service的子类，比如这个Service是负责发起HTTP请求的，我可以很轻易的创建一个该Service的子类，写死数据包模拟HTTP返回，这样可以为单元测试提供很大帮助

依赖注入时，服务将以**单例**方式被创建。

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

来看依赖注入的例子：
在``courses.component.ts``中：
```ts
//...
export class CoursesComponent {
    title = "list of courses";
    constructor(service: CoursesService) {
    }
}
```
在``app.module.ts``中：
```ts
@NgModule({
    //...
    providers: [
        CoursesService
    ]
    //...
})
```

在Service类中，你会发现``@Injectable()``修饰符，这表明该类中的构造方法可以使用依赖注入。而Component中没有``@Injectable()``但依然可以使用依赖注入是因为Angular对Component默认开启了这个权限。

**Day 4**
### DOM 属性绑定（Property Binding）
下面的写法，是将DOM定义的属性名字绑定给Component的成员变量。当成员变量值改变时，相应也会自动反应到页面中。

大多数DOM的属性名和HTML标签的属性名一致。但一定要明确绑定的是DOM的属性名。

```html
<!--使用字符串插值方式-->
<h2>{% raw %}{{ title }}{% endraw %}</h2>
<!--将src属性绑定到title变量-->
<img [src]="title">
```
上面的例子中，将img标签的src属性绑定为title变量，当title改变时，页面的图片也将会实时改变。而属性绑定是单向的，因此反之若用JavaScript修改了src属性的值，component的title变量值则不会改变。我们将会使用**双向绑定**处理这个场景。

### HTML 属性绑定（Attribute Binding）
就像上文说的，99%的DOM属性名和HTML属性名一致，但也有例外。例如在DOM中``td``是没有``colspan``属性的，因此需要使用``attr.``告诉Angular我们正在绑定HTML的属性``colspan``。
```html
<h1 [textContent]="title"></h1>
<table>
    <tr>
        <td [attr.colspan]="colSpan"></td>
    </tr>
</table>
```

### 给项目添加第三方库
例如我们要添加的是Bootstrap，一个非常知名的CSS样式库。
```shell
$ npm install bootstrap --save
```
``install``代表安装，而``--save``代表将Bootstrap添加到该项目的依赖配置文件（``package.json``）中。

添加依赖后，其他成员在下载了同一个项目之后，当他运行``npm install``时，npm将依据依赖配置文件``package.json``下载到软件仓库下载所需的库或组件。依赖配置文件对项目的环境搭建至关重要。

注意，在提交版本库时，``node_module``文件夹下的所有文件不应被提交，而是用``npm install``即时安装。

如果我们打开``package.json``，我们看到每个依赖后面都有一个版本信息，例如：

```json
{
    ...
    "dependencies": {
        ...
        "bootstrap": "^3.3.7",
        ...
    }
}
```
版本号规则大致为``大版本.小版本.补丁版本``，而``^``代表着可以使用大版本一致的最新版本。例如``^3.3.7``代表我们可以用``3.4``，``3.5``，但假设最新版本已经是``4.1.6``了，我们将会安装大版本为``3``的最后一个版本。

那么如何使用Bootstrap这个库呢？

因为它是一个样式库，因此我们可以在``styles.css``中引用Bootstrap

```css
@import "~bootstrap/dist/css/bootstrap.css"
```
``~``代表``node_module``文件夹。

之后就可以在Component中使用它了。

### 样式绑定（Style Binding）
怎样绑定HTML的``class``（css样式）和``style``属性呢？
```ts
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
    `
})
export class CoursesComponent {
    isActive = true;
}
```
此例中，样式``active``是否使用取决于``isActive``是否为``true``。

注意下面绑定的是DOM的style名称。
```ts
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    `
})
export class CoursesComponent {
    isActive = true;
}
```

### 事件绑定和过滤（Event Binding & Filtering）
**事件绑定**是用于绑定像``onclick``（点击事件），``onkeyup``（按键事件）等这类事件，看以下例子：
```ts
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>
    `
})
export class CoursesComponent {
    onSave($event) {
        console.log("Button was clicked", $event);
    }
    onDivClicked($event) {
        console.log("Div was clicked");
    }
}
```
使用小括号``()``包裹在事件属性（去掉``on``）上，使用``$event``用来传递事件信息。

注意多数事件的触发默认会向上传递（**事件冒泡** Event Bubbling），例如本例中，我们监听了``div``和``button``的点击事件，如果点击了``button``，结果将是：
```text
Button was clicked
    MouseEvent {...}
Div was clicked
```
如果不想向上传递，则可使用``$event.stopPropagtion()``来阻止。
```ts
onSave($event) {
    $event.stopPropagtion();
    console.log("Button was clicked", $event);
}
```

假设我们有一个场景是，仅当在输入框键入回车时完成表单提交，传统的做法是，监听``keyup``事件，在实现方法中用``if``判断``$event.keyCode``是否等于``13``。在Angular中，我们可以使用**事件过滤**：
```ts
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <input (keyup.enter)="onKeyUp()"
    `
})
export class CoursesComponent {
    onKeyUp() {
        console.log("ENTER was pressed");
    }
}
```
### 模板变量（Template Variable）
其实可以理解成内联变量，也就是在HTML标签内临时定义的变量，该变量代表了所在标签本身的对象。看以下例子：

例如我们现在想知道用户按回车键时输入框输入的内容：

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <input #email (keyup.enter)="onKeyUp(email.value)"
    `
})
export class CoursesComponent {
    onKeyUp(email) {
        console.log(email);
    }
}
```
我们在input标签内使用``#``定义了一个模板变量``email``，此时``email``就代表了这个input标签本身，当在按下回车键时，我们将``email.value``，也就是input的value值（DOM中input.value代表着input输入框里面的内容）传递给``onKeyUp``方法。

### 双向绑定（Two-way Binding）
上面的代码可以解决简单问题，但能否不建立模板变量并传递，就可以在Component中读取input的值呢？
```ts
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"
    `
})
export class CoursesComponent {
    email = "me@example.com";

    onKeyUp() {
        console.log(this.email);
    }
}
``` 
在``app.module.ts``中：
```ts
//...
import { FormsModule } from '@angular/forms';
//...
@NgModule({
    //...
    imports: [
        //... ,
        FormsModule
    ]
});
```
用``[(ngModel)]``来表示双向绑定，后面接变量即可，并且要添加``FormsModule``。

### 管道和自定义管道（Pipes）
管道用于在页面上快速格式化显示文本，看以下例子：
```ts
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `{% raw %}
        {{ course.title | uppercase }} <br/> <!--大写-->
        {{ course.title | lowercase }} <br/> <!--大写-->
        {{ course.students | number }} <br/> <!--数字并用逗号表示千位分隔符-->
        {{ course.rating | number:'2.1-1' }} <br/> <!--2位整数，最少1位小数最多1位小数（结果：05.0，前补0，小数四舍五入位1位）-->
        {{ course.price | currency:'AUD':true:'3.2-2' }} <!--货币显示，true表示是否显示$-->
        {{ course.releaseDate | date:'shortDate' }}<!--日期显示-->{% endraw %}
    `
})
export class CoursesComponent {
    course = {
        title: "The Complete Angular Course",
        students: 30123,
        rating: 4.9745,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
}
``` 
可以在Angular官方网站[https://angluar.io/api/common/DatePipe](https://angluar.io/api/common/DatePipe)查看全部用法。

如何建立自定义管道呢？

我们以做一个截取字符串前50个字符的管道为例，

新建``summary.pipe.ts``：
```ts
import { Pipe, PipeTransform } from '@angular/core';

//管道名字
@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if (!value)
            return null;
        let actualLimit = (limit) ? limit : 50;
        return value.substr(0, actualLimit) + '...';
    }
}
```
在``app.module.ts``中注册这个管道：
```ts
//...
import { SummaryPipe } from './summary.pipe';
//...
@NgModule({
    //...
    declarations: [
        //... ,
        SummaryPipe
    ]
});
```
在Component中使用：
```ts
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {% raw %}{{ text | summary:10 }}{% endraw %}
    `
})
export class CoursesComponent {
    text = `
        Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.
    `
}
```