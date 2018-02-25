//先用npm 安装express express-static 组件

const express = require('express');
const bodyParser = require('body-parser');
let server = express();

//server.use();  //多个use 其实是链式操作

server.use(bodyParser.urlencoded({
	extended: false,        //拓展模式
	limit:    2*1024*1024   //限制-2M  
}));

server.use('/', function(req, res){
	console.log(req.body);
})

server.listen(9090);

//req.query  GET
//req.body   POST