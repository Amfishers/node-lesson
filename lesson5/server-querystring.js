const http=require('http');
const querystring = require('querystring');

http.createServer(function(req, res){

	var str=''; //因为分多次接收，所以接收的数据需要拼接
	var i=0; //看一下是分几次接收
	
	var POST;

	//接收数据会分段接收，好处：
	//1、防止阻塞
	//2、如果遇到下载错误，只需重新下载错误片段，缩小成本
	req.on('data', function(data){	
		console.log(`我是第${i++}次接收`);
		str+=data;
	});

	//end接收结束之后，返回的回调 
	req.on('end', function(){	
		POST = querystring.parse(req) 
		console.log(POST);
	});



}).listen(9090);