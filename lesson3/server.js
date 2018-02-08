const http=require('http');
const fs=require('fs');


var server = http.createServer(function(req, res){

    //req.url=>'/index.html'
    //读取=> './www/index.html'
    //  './www'+req.url
    var file_name = './www'+req.url;

    fs.readFile(file_name, (err, data)=>{ 
        if(err){
            res.write('404');
        }else{
            res.write(data.toString());
        }
        res.end();        
    })

    //res.end(); 结束如果放在这里会出错，因为readFile属于异步操作， res.end()放在这里会先执行，造成错误
    
})

server.listen(9090);

//好处： 不用重启服务器 就能在www里面添加文件，客户端直接请求
