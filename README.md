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


