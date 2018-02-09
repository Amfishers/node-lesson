const http = require('http');
const querystring = require('querystring');
//querystring 用来解析 ame=fiser&pw=123 这个的

http.createServer((req, res)=>{

    var userInfo = {};

    //因为http 默认会返回2个值
    //1、真正的req.url
    //2、返回 /favicon.icon 页面左上角的icon
    if(req.url.indexOf('?') != -1){
        //console.log(req.url);  //  获得/aaa?name=fiser&pw=123
       
        var arr = req.url.split('?')  
        //获得 /aaa 和 name=fiser&pw=123

        var url = arr[0]; 
        // arr[0] =>地址 '/aaa'


        userInfo = querystring.parse(arr[1]);

    }else {

        var url = req.url; 


    }

    console.log(userInfo)
    //req获取前台请求数据
    res.write('aaa');
    res.end();


}).listen(9090);