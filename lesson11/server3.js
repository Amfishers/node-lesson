const express=require('express');
const cookieParser=require('cookie-parser');

var server=express();

//cookie
server.use(cookieParser('avavav123'));

server.use('/', function (req, res){
  req.secret='avavav123';
  res.cookie('user', 'fisher', {signed: true});

  console.log('签名cookie：', req.signedCookies)
  console.log('无签名cookie：', req.cookies);

  res.send('ok');
});

server.listen(9090);
