

//触摸事件
var Event = function(){
    this.startX = 0; 
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
    this.direction = "no"; //滑动方向
    this.gameOver;
}

Event.prototype.getDirection = function(){
    return this.direction;
}

Event.prototype.init =function(){
    this.gameOver = false;
    canvas.addEventListener("touchstart",this.handleStart,false)

    canvas.addEventListener("touchend",this.handleEnd,false)
    
}


Event.prototype.handleStart = function(e){
    
    e.preventDefault(); //会组织后面的click事件触发
    eventObj.startX = e.touches[0].clientX*pixelRatio; //屏幕设备坐标转化成canvas画布坐标
    eventObj.startY = e.touches[0].clientY * pixelRatio;
}

Event.prototype.handleEnd = function(e){
    
    e.preventDefault();
    eventObj.endX = e.changedTouches[0].clientX * pixelRatio;
    eventObj.endY = e.changedTouches[0].clientY * pixelRatio;
    //滑动是否在活动区内
    if (!eventObj.gameOver && rect.isInBack(eventObj.startX,eventObj.startY) && rect.isInBack(eventObj.endX,eventObj.endY)){
        
        eventObj.direction = eventObj.judgeDirection();
        //调动主函数重新绘制
         mainObj.draw();
    }else{
       
        if(base.isInRestart(eventObj.startX,eventObj.startY) && base.isInRestart(eventObj.endX,eventObj.endY)){
            console.log("重新开始")
            mainObj.init();

        }else if(base.isInBack(eventObj.startX,eventObj.startY) && base.isInBack(eventObj.endX,eventObj.endY)){
            console.log("回退")
            ///TODO
        }
    }

}
//停止事件监听
Event.prototype.stopTouchmove = function(){
    //canvas.removeEventListener("touchstart",this.handleStart,false)

    //canvas.removeEventListener("touchend",this.handleEnd,false)

    this.gameOver = true;
}
//根据起始点和结束点判断滑动方向
Event.prototype.judgeDirection = function(){
    var dy = this.startY - this.endY;
    var dx = this.startX - this.endX;
    var result = 0;
    //如果滑动距离太短
    if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        return "no";
    }
    //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
    var angle = Math.atan2(dy, dx) * 180 / Math.PI;
    if(angle >= -45 && angle < 45) {
        return "left";
    }else if (angle >= 45 && angle < 135) {
        return "up";
    }else if (angle >= -135 && angle < -45) {
        return "down";
    }
    else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        return "right";
    }
}

