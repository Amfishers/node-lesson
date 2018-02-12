const http=require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

var users={};

//约定好接口
// 接口：
//     /user?act=reg&user=aaa&pass=123456
//     {"ok": false, "msg": "原因"}

//     /user?act=login&user=aaa&pass=123456
//     {"ok": true, "msg": "原因"}

http.createServer(function(req, res){
    //解析数据
    var str='';
    req.on('data', function(data){
        str+=data;
    });

    req.on('end', function(err){

        var obj=urlLib.parse(req.url, true);

        const url = obj.pathname;
        const GET=obj.query;
        const POST=querystring.parse(str);

        //区分--接口、文件
        if(url=='/user'){ //接口

            switch(GET.act){  //为什么是act, 因为接口协定是act
                case 'reg':
                    //1、检查用户名是否已经有了
                    //2、插入users
                    if(users[GET.user]){
                        res.write('{"ok": false, "msg": "用户名已被注册"}');
                    }else {
                        users[GET.user]=GET.pass;
                        res.write('{"ok": true, "msg": "注册成功"}');
                    }
                    break;
                case 'login':
                    //1、检查用户是否存在
                    //2、检查用户密码
                    if(users[GET.user]==null){
                        res.write('{"ok": false, "msg": "此用户不存在"}')
                    }else if(users[GET.user]!=GET.pass) {
                        res.write('{"ok": false, "msg": "用户名或密码错误"}')
                    }else {
                        res.write('{"ok": true, "msg": "登录成功"}')
                    }
                    break;
                default:
                    res.write('{"ok": false, "msg": "未知的act"}');
            }
            res.end();

        }else {
            //读取文件
            var file_name='./www'+url;
            fs.readFile(file_name, function(err, data){
                if(err){
                    res.write('404');
                }else{
                    res.write(data);
                }
                 res.end();
            });
        
        }

    });
    


}).listen(9090);