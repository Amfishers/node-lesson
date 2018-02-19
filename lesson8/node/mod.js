//require   请求：引入模块
//module    模块：批量输出
//exports   输出：

//注：module.exports 与 exports 是一致的
//   '.js'是可选的

//var  a = 12;
//不能像上面这样直接写，因为node里面没有全局变量。所以会输出 undefined
//可以这样写:
//exports.a =  12;

//原因:
//1、防止全局变量，污染变量环境
//2、输出变量变得更加可控
//3、当写node模块的时候，系统默认转化
//  (function(require, exports, module){
//  	 // var a = 12;
//  	 // var b = 5;
//  	 //
//  	 // exports.a = 12;	
//       //立即执行函数
//       //变量不会污染全局
//  
//  })()


//module  批量输出
//例如：
//module.exports={
//	a: 12, 
//	b: 5, 
//	c: 99
//};

//------------------------------------------------------------------

//NPM: NodeJs package Manager(NodeJS包管理器)
//1、统一下载途径
//2、自动下载依赖

//------------------------------------------------------------------

// 安装： npm install xxx
// 删除： npm uninstall xx

//------------------------------------------------------------------


// 放置node_modules 模块

// 方法：
// 1、添加路径 './'
// 2、不加'./' 但是模块文件必须放置在 node_modules文件夹里面

// require
// 1、如果有'./'
// 	从当前目录找

// 2、如果没有'./'
// 	先从系统模块里面找
// 	然后再从node_modules找

//------------------------------------------------------------------

//npm 模块教程
//
//输入npm即可查看
//
// C:\Users\Administrator>npm

// Usage: npm <command>

// where <command> is one of:
//     access, adduser, bin, bugs, c, cache, completion, config,
//     ddp, dedupe, deprecate, dist-tag, docs, doctor, edit,
//     explore, get, help, help-search, i, init, install,
//     install-test, it, link, list, ln, login, logout, ls,
//     outdated, owner, pack, ping, prefix, prune, publish, rb,
//     rebuild, repo, restart, root, run, run-script, s, se,
//     search, set, shrinkwrap, star, stars, start, stop, t, team,
//     test, tst, un, uninstall, unpublish, unstar, up, update, v,
//     version, view, whoami

// npm <command> -h     quick help on <command>
// npm -l           display full usage info
// npm help <term>  search for help on <term>
// npm help npm     involved overview

// Specify configs in the ini-formatted file:
//     C:\Users\Administrator\.npmrc
// or on the command line via: npm <command> --key value
// Config info can be viewed via: npm help config

// npm@5.3.0 F:\nodejs\node_modules\npm


// 1、命令行输入 npm 可以查看node的相关信息，如操作指令
// 2、输入 npm login 按要求填入信息，就可以登录node
// 3、输入 npm whoami 就可以查看登录之后的用户名
// 4、命令行 node init 输出包的信息

//新建一个npm包
//命令行 node init 输出包的信息
//
// package name:  test233     //包的名字
// version: (1.0.0)  0.0.1     //包的版本
// description:  这是个测试包  //描述
// entry point: (index.js)     //这个包的主入口，默认是index.js
// test command:               //包测试的命令
// git repository:             //git仓库地址，可连接到git
// keywords:                   //关键字
// author:                     //作者
// license:(ISC)               //包遵循什么开源协议，商用或者不允许商用
 
然后新建一个 index.js 文件，写上方法。
然后命令行输入 npm public 进行包的上传

上传之后在本地即可进行下载，命令行输入： npm  install test9090 进行下载


如果需要更新包，本地修改之后，上传发布的时候必须要修改 package.json 里面的版本号
然后再输入npm public进行更新

用户如果之前下载了包，需要进行更新。 就得命令行输入： npm update  进行包更新


####删除包-- 必须24小时之内
命令行输入： npm unpublish 
会输出
E:\node-lesson\node-source\lesson8\node2>npm unpublish
npm ERR! Refusing to delete entire project.
npm ERR! Run with --force to do this.
npm ERR! npm unpublish [<@scope>/]<pkg>[@<version>]

意思是： 确认要删除吗？如果确认 就需要加入 --force这个指令

所以命令行输入： npm --force unpublish
就可以删除了
注意： 这里删除的只是你版本 package.json 里面版本号的文件，如果还需要删除其他版本，应该修改 package.json 里面的版本号，再重新输入命令行删除
