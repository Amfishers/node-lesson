//先用npm 安装express express-static 组件

const express = require('express');
let server = express();

//server.use();  //多个use 其实是链式操作

server.use('/', function(req, res){
	console.log(req.query);
})

server.listen(9090);