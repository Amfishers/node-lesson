const mod = require('modd')

console.log(mod.a, mod.b, mod.c);

// 引入模块

const test1 = require('fishertest1');

console.log(test1.sun(1, 3, 4));

//引入更新模块

console.log(test1.div(16, 2))

