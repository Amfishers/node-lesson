const fs=require('fs');


//writeFile(文件名， 内容， 回调)
fs.writeFile('aaass.txt', 'Hello Node.js', (err) => {
    if(err) { 
        console.log(err);
    }
    console.log('the file has been saved')

})


