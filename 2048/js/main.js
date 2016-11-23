

//主文件

var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');
var base;
var data;
var rect;
var eventObj;
var cw;  //canvas宽
var ch; //canvas高
var pixelRatio; 
var main = function(){

}

main.prototype.init = function(){
    this.windowInit();  
    eventObj = new Event();
    eventObj.init();
    data = new Data();
    data.init();
    rect = new Rect();
    rect.init();
    base = new Base();
    base.init();
}

//设置画布大小
main.prototype.windowInit =function(){
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    pixelRatio = window.devicePixelRatio || 1;
    if (width < 600 || height < 800){
        //这里，让canvas的宽高设置为canvas 节点css属性的2倍，以匹配手机高分辨率屏幕。
        cw = canvas.width = width*pixelRatio;
        ch = canvas.height = height*pixelRatio;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
    }else{
        //pad
        cw = canvas.width = 600*pixelRatio;
        ch = canvas.height = 800*pixelRatio;
        canvas.style.width = 600 + "px";
        canvas.style.height = 800 + "px";
    }
}

//移动方块，重绘
main.prototype.draw = function(){
        
        //1.清空画布
        ctx.clearRect(0,0,cw,ch);
        //2.画标题，分数等
        base.init();
        //3.画游戏区域背景
        rect.drawBack();
        //4.移动方块
        rect.move();
        //5.随机产一个方块
        rect.random();
        //6.画方块
        rect.drawSmallRect();
        //7.更新分数
        base.drawScore();
        if (rect.getSurplus() == 0 && rect.judgeDead()){
            //8.游戏结束
            console.log("gameover!");
            base.gameOver();
            eventObj.stopTouchmove();
            data.updateMaxScore();//更新最高分
        }

}

//初始化
var mainObj = new main();
mainObj.init();

