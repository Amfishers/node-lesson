const express = require('express');
let server = express();


server.use('/', function(req, res, next){ 
	console.log('a');
	next();  
	//如果继续往下执行，则应该添加next() 不然程序走到这里终止，链式不会继续往下进行
})
server.use('/', function(req, res){
	console.log('b');
})

server.listen(9090);