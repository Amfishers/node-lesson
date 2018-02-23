const express = require('express');

var server=express();

server.use('/a.html', function(req, res){

	res.send('abc');
	res.end();


});

//当用户请求 './' -> 根目录的时候，
//会请求 后面function 这个函数 


server.listen(9090);