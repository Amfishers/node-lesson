const path=require('path');

var str='c:\\wamp\\www\\a.html';

var obj=path.parse(str);

//base      文件名部分
//ext       扩展名
//dir       路径
//name      文件名部分
console.log(obj);

//返回：
//  { root: 'c:\\',
//  dir: 'c:\\wamp\\www',
//  base: 'a.html',
//  ext: '.html',
//  name: 'a' }
