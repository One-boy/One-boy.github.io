

//主文件

var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');
var base;
var data;
var rect;
var event;
var cw;  //canvas宽
var ch; //canvas高
var gameOver = false;
var main = function(){

}

main.prototype.init = function(){
    
    this.windowInit();  
    event = new Event();
    event.init();
    data = new Data();
    rect = new Rect();
    rect.init();
    base = new Base();
    base.init();
    

}

//窗口初始化
main.prototype.windowInit =function(){
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    if (width < 600 || height < 800){
        cw = canvas.width = width;
        ch = canvas.height = height;
    }else{
        cw = canvas.width = 600;
        ch = canvas.height = 800;
    }
}

//初始化
var mainObj = new main();
mainObj.init();

