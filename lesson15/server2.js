const express=require('express');
const expressStatic=require('express-static');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const jade=require('jade');
const ejs=require('ejs');

let server=express();
server.listen(9090);

server.use(cookieParser('asdw894asc123asc456'));

//2.使用session
var arr=[];
for(var i=0; i<10000; i++){
	arr.push('key_'+Math.random())
};
server.use(cookieSession({
	name: 'fisher_sesson_id', 
	keys: arr, 
	maxAge: 20*60*60*1000
}));

//3.post数据
server.use(bodyParser.urlencoded({extended: false}));

//用户请求
server.use('/', function(req, res, next){
	console.log(req.query, req.body, req.cookie, req.session)
});

//4.static数据
server.use(static('./www'));


