const jade=require('jade');
var str=jade.renderFile('./views/8.jade', {pretty: true});
console.log(str);


/*
1.jade

输出：
<html>
  <head>
    <style></style>
    <script></script>
  </head>
  <body>
    <div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div></div>
  </body>
</html>
*/

/*
2.jade

<html>
  <head>
    <style></style>
    <script src="a.js"></script>
    <link href="a.css" rel="stylesheet"/>
  </head>
  <body>
    <div>
      <ul>
        <li>
          <input type="text" id="txt1" value="abc"/>
        </li>
        <li>
          <input type="text" id="txt2" value="def"/>
        </li>
        <li>
          <input type="button" id="txt3" value="ghi"/>
        </li>
      </ul>
    </div>
    <div></div>
  </body>
</html>
 */

/**
3.jade

<html>
  <head>
    <style></style>
    <script>window.onload=function(){
      <var>oBtn=document.getElementById('div1');
        <!--注意这里一定得对齐，不然会报错，不能超出行了。-->
      </var>};
    </script>
  </head>
  <body><a href="http://www.zhinengshe.com/">官网</a><a href="http://www.baidu.c
om/">百度</a></body>
</html>

 */


/**
5.jade

<html>
  <head>
    <style></style>
  </head>
  <body>
    <div style="width:200px;height:200px;background:red"></div>
    <div style="width:200px;height:200px;background:red"></div>
    <div title="[object Object]"></div>
    <div>(1234)</div>
  </body>
</html>

 */

/**
 * 6.jade

<html>
  <head>
    <style></style>
  </head>
  <body>
    <div class="aaa left-warp active"></div>
    <div class="aaa left-warp active"></div>
    <div title="aaa,left-warp,active"></div>
  </body>
</html>
 */

/**
 * 8.jade

<html>
  <head>
    <style></style>
  </head>
  <body>
    <div title="aaa" id="div1"></div>
    <div title="aaa" id="div1"></div>
  </body>
</html>

 */