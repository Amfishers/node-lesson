const express=require('express');
const expressStatic=require('express-static');  

let server=express();
server.listen(9090);

//express的插件形式 叫中间件
//npm 安装 express-static
//命令行输入： npm install express-static

//未用到数据库，所以模拟用户数据
var users= {
    'fisher': '123456',
    'datou': '456789',
    'yangchong': '987321'
};

server.get('/login', function(req, res){
    //req.query 从url中获取参数，转化成json形式
    var user=req.query['user'];
    var pass=req.query['pass'];

    if(users[user] == null){
        res.send({ok: false, msg: '此用户不存在'});
    }else {
        if(users[user] != pass){
            res.send({ok: false, msg: '密码错误'});
        }else {
            res.send({ok: true, msg: '登录成功'})
        }
    }

});


//expressStatic()是一个函数
//里面有个参数，意思是： 去哪里读取文件
server.use(expressStatic('./www'));

