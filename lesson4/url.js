const urlLib = require('url');
//url模块用来解析 url

var aaa = urlLib.parse('http://localhost:9090/aaa?name=fisher&pw=123456')
console.log(aaa);

// 输出：
// Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'localhost:9090',
//   port: '9090',
//   hostname: 'localhost',
//   hash: null,
//   search: '?name=fisher&pw=123456',
//   query: 'name=fisher&pw=123456',
//   pathname: '/aaa',
//   path: '/aaa?name=fisher&pw=123456',
//   href: 'http://localhost:9090/aaa?name=fisher&pw=123456' }
//   



//如果在 urlLib.parse() 加上true，就会把 query里面的内容变成 json 格式

var bbb = urlLib.parse('http://localhost:9090/aaa?name=fisher&pw=123456', true)
console.log(bbb.pathname, bbb.query);
