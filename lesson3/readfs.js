const fs=require('fs');


//1. fs.readFile(文件名，回调函数)
//2. fs.writeFile()


fs.readFile('aaa.txt',function(err, data){
    if(err) {
        console.log('读取失败');
    }else {
        console.log(data.toString());
    }
})





