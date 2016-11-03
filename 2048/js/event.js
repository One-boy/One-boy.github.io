

//触摸事件

var Event = function(){
    this.startX = 0; 
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
}

Event.prototype.init =function(){
    var main = this;
    canvas.addEventListener("touchstart",function(e){
        e.preventDefault();
       main.startX = e.touches[0].clientX;
       main.startY = e.touches[0].clientY;
    },false)

    canvas.addEventListener("touchend",function(e){
     e.preventDefault();
      main.endX = e.changedTouches[0].clientX;
      main.endY = e.changedTouches[0].clientY;

       //滑动是否在活动区内
       if (main.startY > rect.backStartY && main.startY < rect.backStartY+rect.num*rect.width && main.endY > rect.backStartY && main.endY < rect.backStartY+rect.num*rect.width){
           var re = main.judgeDirection();
            if (re != "no"){
                rect.move(re);
            }
       }
      
    },false)
    
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

