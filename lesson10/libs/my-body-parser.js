const querystring=require('querystring');

//第一种  外部调用方式  xxx
module.exports=function(req, res, next) {
  var str = '';
  req.on('data', function(data) {
    str+=data;
  });
  req.on('end', function(){
    req.body=querystring.parse(str);

    next();
  })
};

//第二种 外部调用方式 xxx()
/*module.exports=function(){
  return function(req, res, next){
    var str='';
    req.on('data', function(data){
      str+=data;
    });
    req.on('end', function(){
      req.body=querystring.parse(str);

      next();
    })
  }
};*/

//第三种 外部调用方式  xxx.aaa()
/*module.exports={
  aaa: function (){
    return function (req, res, next){
      var str='';
      req.on('data', function (data){
        str+=data;
      });
      req.on('end', function (){
        req.body=querystring.parse(str);

        next();
      });
    };
  }
};*/
