# node-lesson
Learn about node by myself

#### 第一课：历史、优势、现状、前景

官网：https://nodejs.org

NodeJs也是JS

1、切换盘符       e： </br>
2、改变目录       cd  目录名 </br>
3、执行程序       node xxx.js </br>

------------------------------------------------------------------

小提示：命令行 输入的时候可以按tab 会自动补全


nodeJS---服务器

http----协议

request        请求     输入 - 请求的信息
response     响应     输出 - 输出的东西 


#### 第二课：http系统模块使用

const http = require('http'); //http 定义之后不会再改了，所以用常量定义

//request        请求     输入 - 请求的信息
//response     响应     输出 - 输出的东西 
var server = http.createServer(function(req, res){  //创建一个server对象

    switch(req.url){
        case '/1.html':
            res.write('1111');
            break;
        case  '/2.html'
            res.write('2222');
            break;
        default:
            res.write('404');
            break;
    }

    //res.write('asdfg');
    res.end();

});

//监听--等着
//端口--数字(相当于门牌号)，可以自己定义
server.listen(9090);   //端口占用，可以用端口转发，后期查阅访问

//前台页面  url访问  http://localhost:9090 即可


#### 第三课-fs文件模块

http------模块

文件操作： fs--File System
node官网链接： https://nodejs.org/dist/latest-v8.x/docs/api/fs.html

异步VS同步
异步-----多个操作可以同时进行，签一次的操作没完事，后一次也能开始
同步-----一次一个

readFile(读取文件名， function(err, data){
//err  错误
//data 读取文件里面的内容
})

writeFile(新建文件名， 新建文件传入的内容，  function(err){
//err 错误
})

#### 第四课-http数据解析
注意：
提交form表单时。input标签一定要加上name=""的值，不然会提交没有信息

http
fs

数据请求——
前台->form、ajax、jsonp
后台->一样

前台 <-> 后台
http

请求方式：
1.GET		数据在url中
2.POST		数据不在url中

------------------------------------------------------------------

req.url=>"/aaa?user=blue&pass=123456"
/aaa
user=blue&pass=123456

------------------------------------------------------------------

GET数据解析
1.自己切
2.querystring		xxx=xx&xxx=xxx
3.urlLib			aaa?xxx=xx&xx=12

urlLib.parse(url, true);	pathname
			                query


#### 第五课 http数据解析-post
GET数据：
req.url——urlLib.parse(, true)

POST数据接收：POST数据比GET大得多

POST很大——分段
data	一段数据
end	全部到达


req.url	=>	'/aaa?a=12&b=5'

obj={
	pathname: '/aaa'
	query: {a: 12, b: 5}
}			       

#### 第六课

http/fs/get/post

用户注册、登录

接口：
/user?act=reg&user=aaa&pass=123456
	{"ok": false, "msg": "原因"}

/user?act=login&user=aaa&pass=123456
	{"ok": true, "msg": "原因"}

----------------------------------------------------------------------

对文件访问：
http://localhost:9090/1.html
http://localhost:9090/ajax.js
http://localhost:9090/1.jpg

对接口访问：
http://localhost:9090/user?act=xx...
http://localhost:9090/news?act=xxx...

#### 第七课
系统模块：

Assertion Testing： 断言测试
解释：在程序应用中，绝对应该出现的情况。 换一种说法，只要不是这种情况，程序就会崩溃。

Async Hooks：

Buffer： 二进制原始二进制的数据

C++ Addons：C++拓展，提高性能

C/C++ Addons - N-API：

Child Processes：子进程。

Cluster： 集群。充分利用计算机的多核性

Command Line Options： 命令行参数

Console：

Crypto： 加密   MD5  sha（安全级别高于MD5）

Debugger： 帮助调试程序，是命令行

Deprecated APIs：

DNS： 域名解析。

Domain：域名（已经废弃了）

ECMAScript Modules：

Errors：异常。抛出来的异常情况

Events：事件。（模拟事件模块）

File System：读写文件

Globals：

HTTP：

HTTP/2：

HTTPS：加密 安全

Inspector：

Internationalization：

Modules：帮助nodejs实现模块化的操作。  类似require()

Net：网络操作。 例如发送一封邮件

OS: operate system 操作系统信息。例如os.cpus() 当前cpu频率    os.freemen()当前空闲的内存 os.hostname()主机名字

Path: 用来专门处理文件路径。 例如：path.dirname()返回目录名字。 path.extname()返回拓展名

Performance Hooks:

Process: 进程。 

Punycode: 已经废弃了

Query Strings: 将地址转化为json形式
querystring.parse('foo=bar&baz=qux&baz=quux&corge')
// returns
{ foo: 'bar', baz: ['qux', 'quux'], corge: '' }

Readline:

REPL: 指nodejs的命令行

Stream:流操作。 读一点文件 发送一点文件。 提高利用率。

String Decoder: 字符串编码解码使用

Timers: 定时器

TLS/SSL:加密传输。

Tracing:

TTY: 连接到远端的命令行

UDP/Datagram:  反义词TCP。  数据包传输协议

URL:  解析url用

Utilities: 小工具类。例如 util.isNumber() util.isObject()  util.isString()

V8:  涉及nodejs v8引擎相关

VM: 虚拟机

ZLIB:用来做压缩的（本质上是流）


比较重要模块：

Crypto	加密
Events	事件
Net	网络操作
OS	操作系统信息
Path	处理文件路径
Stream	流操作
Timers	定时器
ZLIB	压缩


#### 第八课

require   请求：引入模块
module    模块：批量输出
exports   输出：

注：module.exports 与 exports 是一致的
  '.js'是可选的

var  a = 12;
不能像上面这样直接写，因为node里面没有全局变量。所以会输出 undefined
可以这样写:
exports.a =  12;

原因:
1、防止全局变量，污染变量环境
2、输出变量变得更加可控
3、当写node模块的时候，系统默认转化
 (function(require, exports, module){
 	 // var a = 12;
 	 // var b = 5;
 	 //
 	 // exports.a = 12;	
      //立即执行函数
      //变量不会污染全局
 
 })()


module  批量输出
例如：
module.exports={
	a: 12, 
	b: 5, 
	c: 99
};

------------------------------------------------------------------

NPM: NodeJs package Manager(NodeJS包管理器)
1、统一下载途径
2、自动下载依赖

------------------------------------------------------------------

安装： npm install xxx
删除： npm uninstall xx

------------------------------------------------------------------


放置node_modules 模块

方法：
1、添加路径 './'
2、不加'./' 但是模块文件必须放置在 node_modules文件夹里面

require
1、如果有'./'
	从当前目录找

2、如果没有'./'
	先从系统模块里面找
	然后再从node_modules找


------------------------------------------------------------------

##### npm 模块教程

总命令
```
npm init //初始化
npm publish  //发布
npm update   //更新包
npm --force unpublish  //删除 
```

输入npm即可查看

C:\Users\Administrator>npm

Usage: npm <command>

where <command> is one of:
    access, adduser, bin, bugs, c, cache, completion, config,
    ddp, dedupe, deprecate, dist-tag, docs, doctor, edit,
    explore, get, help, help-search, i, init, install,
    install-test, it, link, list, ln, login, logout, ls,
    outdated, owner, pack, ping, prefix, prune, publish, rb,
    rebuild, repo, restart, root, run, run-script, s, se,
    search, set, shrinkwrap, star, stars, start, stop, t, team,
    test, tst, un, uninstall, unpublish, unstar, up, update, v,
    version, view, whoami

npm <command> -h     quick help on <command>
npm -l           display full usage info
npm help <term>  search for help on <term>
npm help npm     involved overview

Specify configs in the ini-formatted file:
    C:\Users\Administrator\.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@5.3.0 F:\nodejs\node_modules\npm


1、命令行输入 npm 可以查看node的相关信息，如操作指令
2、输入 npm login 按要求填入信息，就可以登录node
3、输入 npm whoami 就可以查看登录之后的用户名
4、命令行 node init 输出包的信息

新建一个npm包
命令行 node init 输出包的信息

package name:  test233     //包的名字
version: (1.0.0)  0.0.1     //包的版本
description:  这是个测试包  //描述
entry point: (index.js)     //这个包的主入口，默认是index.js
test command:               //包测试的命令
git repository:             //git仓库地址，可连接到git
keywords:                   //关键字
author:                     //作者
license:(ISC)               //包遵循什么开源协议，商用或者不允许商用
 
然后新建一个 index.js 文件，写上方法。
然后命令行输入 npm public 进行包的上传

上传之后在本地即可进行下载，命令行输入： npm  install test9090 进行下载


如果需要更新包，本地修改之后，上传发布的时候必须要修改 package.json 里面的版本号
然后再输入npm public进行更新

用户如果之前下载了包，需要进行更新。 就得命令行输入： npm update  进行包更新


####删除包-- 必须24小时之内
命令行输入： npm unpublish 
会输出
E:\node-lesson\node-source\lesson8\node2>npm unpublish
npm ERR! Refusing to delete entire project.
npm ERR! Run with --force to do this.
npm ERR! npm unpublish [<@scope>/]<pkg>[@<version>]

意思是： 确认要删除吗？如果确认 就需要加入 --force这个指令

所以命令行输入： npm --force unpublish
就可以删除了
注意： 这里删除的只是你版本 package.json 里面版本号的文件，如果还需要删除其他版本，应该修改 package.json 里面的版本号，再重新输入命令行删除
执行之后，这时在npm官网搜索  fishertest1 ，就找不到这个包了。



#### 第九课
npm输入安装命令  npm install express
安装express模块 
接着命令行运行 server.js 

express框架
1.安装
2.配置
3.接收请求
4.响应

---------------------------------------------------------------------------------------------------------------------

express的 request 和 response是经过封装过的

req:
res:
例如： 原生res.write() 和 res.end() 仍保存的
但是express 添加了 res.send() 这里的send()相比write() 功能更加强大，send可以输出json    		
但是wrire()就会报错

--------------------------------------------------------------------------------

express中间件
//express的插件形式 叫中间件

npm安装： npm search express-static

req.query 自带方法，从url中获取参数，转化成json形式
res.send({ok: false, msg: '此用户不存在'});  这里发送给前台的是字符串形式
前端ajax接收时候 应该对这一段字符串进行 json 解析，json = eval('('+str+')')

#### 第十课

首先需要安装模块 express express-static

Express：
1.数据：GET、POST
2.中间件：使用、写、链式操作

----------------------------------------------------------------------------------------------------------------

GET-无需中间件
req.query

POST-需要"body-parser"
server.use(bodyParser.urlencoded({}));

server.use(function (){
	req.body
});

----------------------------------------------------------------------------------------------------------------

链式操作：

----------------------------------------------------------------------------------------------------------------

1.GET、POST
  req.query
  
  server.use(bodyParser.urlencoded({limit: }));
  server.use(function (req, res, next){
    req.body
  });

2.链式操作
  server.use(function (req, res, next){});
  server.get('/', function (req, res, next){});
  server.post(function (req, res, next){});

  next——下一个步骤
  next();

  server.use('/login', function (){
    mysql.query(function (){
      if(有错)
        res.emit('error');
      else
        next();
    });
  });

3.中间件(body-parser)、自己写中间件
  next();

  server.use(function (req, res, next){
    var str='';
    req.on('data', function (data){
      str+=data;
    });
    req.on('end', function (){
      req.body=querystring.parse(str);
      next();
    });
  });


  
#### 第十一课

http -- 无状态的，所以不知道用户是否登录
cookie  session
cookie： 在浏览器保存一些数据，每次向服务器发起请求 都会带过来
*用户可以在浏览器随意修改cookie，所以不安全
*大小有限

session： 也是保存数据，但是保存在服务端
*安全、容量大

------------------------------------------------------------------------------------------------------
session：基于cookie实现
cookie中会有一个session的ID，服务器利用这个session的ID来找到session文件、读取、写入

隐患： session挟持（意思是：别人用你的cookie身份登录） 无法避免，只能缓解

------------------------------------------------------------------------------------------------------
需要安装组件：  express  express-static  cookie-parser cookie-session
cookie：
1、父级页面可以获取子级页面的cookie， 其他的访问不了
2、空间非常小---省着用
3、安全性非常差

需要：
1.精打细算
2.校验cookie是否被篡改过

a.发送cookie
res.secret='字符串';
res.cookie(名字, 值, {path: '/', maxAge: 毫秒, signed: true});

b.读取cookie
cookie-parser

server.use(cookieParser('秘钥'));

server.use(function (){
	req.cookies		未签名版
	req.signedCookies	签名版
});

c.删除cookie
res.clearCookie(名字);

--------------------------------------------------------------------------------------------------------------

cookie-session

server.use(cookieParser());
server.use(cookieSession({
	keys: [.., .., .., ..]
}));

server.use('/', function (){
	req.session
});

delete req.session
--------------------------------------------------------------------------------------------------------------

session

server.use(cookieParser('签名字符串'));
server.use(cookieSession({

}));

server.use(function (req, res){
	res.cookie(名字, 值, {signed: true});

	res.cookies['user']
	res.clearCookie('名字');

	res.session['xxx']
	delete res.session['xxx'];
});


#### 第十二课 jade模板库1：介绍、配置安装、基础语法

//npm安装 jade ejs

首先运行 jade1.js 文件

主要学习命令： 
	jade.render()  //渲染html
	jade.renderFile('./view/1.jade', {pretty: true});  //渲染文件，并且开启美化模式
	

模板引擎：
jade-破坏式、侵入式、强依赖
ejs-温和、非侵入式、弱依赖

------------------------------------------------------------------------------------------------------------

html				<html></html>

html				<html>
	head				<head>
		style				<style></style>
					</head>
	body				<body>
		div				<div></div>
		div				<div></div>
					</body>
				    </html>

------------------------------------------------------------------------------------------------------------

1.根据缩进，规定层级
2.属性放在()里面，逗号分隔
3.内容空个格，直接往后堆

------------------------------------------------------------------------------------------------------------

属性

<script src="a.js"></script>
script(src="a.js")

------------------------------------------------------------------------------------------------------------

内容
<a href="http://www.zhinengshe.com/">官网</a>
a(href="http://www.zhinengshe.com/") 官网

------------------------------------------------------------------------------------------------------------

<div>
	xxxxx
	<div>
		aaaaa
		...
	</div>
</div>

------------------------------------------------------------------------------------------------------------

style="width:200px;height:200px;background:red;"
1.普通属性写法
2.用json

class="aaa left-swrap active"
1.普通属性写法
2.用arr

------------------------------------------------------------------------------------------------------------

简写

------------------------------------------------------------------------------------------------------------

模板引擎：生成页面
1.jade：破坏式
2.ejs：保留式

------------------------------------------------------------------------------------------------------------

jade
1.根据缩进划分层级
2.属性用()表示，用逗号分隔
  *style={}
  *class=[]
3.内容
  div xxx
    span xxx
      a(href="xxx") 链接

------------------------------------------------------------------------------------------------------------

jade.render('字符串');
jade.renderFile('模板文件名', 参数)

------------------------------------------------------------------------------------------------------------



#### 第十四课 Express框架整合：express整合、multer使用、consolidate和route

首先npm安装模块，命令行输入
cnpm i express express-static cookie-parser cookie-session body-parser ejs jade multer 
consolidate router


post时候上传文件
enctype 三个属性

值 描述
application/x-www-form-urlencoded： 在发送前编码所有字符（默认）
multipart/form-data： 不对字符编码。在使用包含文件上传控件的表单时，必须使用该值。
text/plain  空格转换为 "+" 加号，但不对特殊字符编码。

安装multer



consolidate-适配

-------------------------------------------------------------------------------------------------------------------------

模板引擎：适配
1.consolidate

consolidate=require

server.set('view engine', 'html');
server.set('views', '模板文件目录');
server.engine('html', consolidate.ejs);

server.get('/', function (req, res){
  res.render('模板文件', 数据);
});

-------------------------------------------------------------------------------------------------------------------------

route-路由：
把不同的目录，对应到不同的模块

xxxx.com/aaa/   mod1
xxxx.com/news/  mod_news
  post      news_post
  list      news_list
  content   news_content
xxxx.com/user/    mod_users

-------------------------------------------------------------------------------------------------------------------------

server.get();
server.use()
server.post()

Router——迷你server
router.get();
router.post();
router.use();

-------------------------------------------------------------------------------------------------------------------------

Router——拆
/user/....    mod_user
/item/....    mod_item

//1.创建router
var router=express.Router();

//2.把router添加到server
server.use('/user', router);

//3.router内部
router.get('/1.html')
router.post('/2.html')

-------------------------------------------------------------------------------------------------------------------------

consolidate

server.set('view engine', 'html');
server.set('views', '模板目录');
server.engine('html', consolidate.ejs);

server.use(function (req, res){
  res.render('模板文件', 数据);
});

-------------------------------------------------------------------------------------------------------------------------

Router——子服务

var router1=express.Router();
server.use('/user', router1);

var r=express.Router();
router1.use('/user_mod', r);
router1.use('/user_reg', function (){});
http://www.xxxx.com/user/user_mod
http://www.xxxx.com/user/user_reg
http://www.xxxx.com/user/user_login

var router2=express.Router();
server.use('/news', router2);
http://www.xxxx.com/news/list
http://www.xxxx.com/news/post
http://www.xxxx.com/news/content

var router3=express.Router();
server.use('/item', router3);
http://www.xxxx.com/item/buy
http://www.xxxx.com/item/mod
http://www.xxxx.com/item/del

-------------------------------------------------------------------------------------------------------------------------
