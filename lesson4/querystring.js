const querystring = require('querystring');
//querystring模块用来解析 url数据成json格式

var aaa = querystring.parse('name=fisher&pw=123456&age=18')
console.log(aaa);

// 输出：
// { name: 'fisher', pw: '123456', age: '18' }