const express=require('express');
const static=require('express-static');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const multer=require('multer');
const ejs=require('ejs');
const jade=require('jade');
const pathLib=require('path');
const fs=require('fs');

var server=express();

server.listen(9090);


//1.解析cookie
server.use(cookieParser('sdfasl43kjoifguokn4lkhoifo4k3'));

//2.使用session
var arr=[];
for(var i=0;i<100000;i++){
  arr.push('keys_'+Math.random());
}
server.use(cookieSession({
	name: 'zns_sess_id', 
	keys: arr, 
	maxAge: 20*3600*1000
}));

//3.post数据
//接收普通数据以及文件数据
server.use(bodyParser.urlencoded({extended: false}));
server.use(multer({dest: './www/upload'}).any());

//用户请求
server.use('/', function (req, res, next){
  console.log(req.query, req.body, req.files, req.cookies, req.session);

  //1.获取原始文件扩展名
  //2.重命名临时文件
  //
  var newName=req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
  fs.rename(req.files[0].path, newName, function (err){
    if(err)
      res.send('上传失败');
    else
      res.send('成功');
  });

});

//4.static数据
server.use(static('./www'));
