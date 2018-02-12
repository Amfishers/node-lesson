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

			               