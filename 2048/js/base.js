

//处理一些基础的画面

var Base = function(){
    this.title = "2048"; //标题
}

Base.prototype.init = function(){
    this.drawDivideLine();
    this.drawTitle();
    this.drawScore();
    this.drawMaxScore();
}
//标题分割线
Base.prototype.drawDivideLine = function(){
    var x = 0;
    var y = ch*0.2; 
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.moveTo(x,y);
    ctx.lineTo(cw,y);
    ctx.stroke();
    ctx.restore();
}
//标题
Base.prototype.drawTitle = function(){
    var x = cw*0.05;
    var y = ch*0.025;
    var w = cw*0.3;
    var h = ch*0.15;
    
    rect.drawRect(x,y,w,h,"#FFC107")

    ctx.save();

    ctx.font = "bold 2rem sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";  //水平对齐
    ctx.textBaseline = "middle";  //垂直对齐方式
    ctx.fillText(this.title,x+w/2,y+h/2,w);

    ctx.restore();
}

//积分
Base.prototype.drawScore = function(){
    var x = cw*0.4;
    var y = ch*0.05;
    var w = cw*0.25;
    var h = ch*0.1;
    var score = "得分"
    rect.drawRect(x,y,w,h,"#797676")

    ctx.save();
    
    ctx.textAlign = "center";  //水平对齐
    ctx.textBaseline = "middle";  //垂直对齐方式

    ctx.font = "bold 1rem sans-serif";
    ctx.fillStyle = "#9E9E9E";
    ctx.fillText(score,x+w/2,y+h*1/4,w);
    ctx.fillStyle = "white";
    ctx.font = "bold 1.5rem sans-serif";
    ctx.fillText(data.score,x+w/2,y+h*3/4,w);
    ctx.restore(); 
}
//最高分
Base.prototype.drawMaxScore = function(){
    var x = cw*0.7;
    var y = ch*0.05;
    var w = cw*0.25;
    var h = ch*0.1;
    var maxScoreText = "最高记录"
    rect.drawRect(x,y,w,h,"#797676")

    ctx.save();
    
    ctx.textAlign = "center";  //水平对齐
    ctx.textBaseline = "middle";  //垂直对齐方式

    ctx.font = "bold 1rem sans-serif";
    ctx.fillStyle = "#9E9E9E";
    ctx.fillText(maxScoreText,x+w/2,y+h*1/4,w);
    ctx.fillStyle = "white";
    ctx.font = "bold 1.5rem sans-serif";
    ctx.fillText(data.maxScore,x+w/2,y+h*3/4,w);
    ctx.restore(); 
}

//gameover
Base.prototype.gameOver = function(){
    ctx.save();
    
    ctx.font = "bold 2rem sans-serif";
    ctx.textAlign = "center";  //水平对齐
    ctx.textBaseline = "middle";  //垂直对齐方式
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    console.log("filltext gameover1")
    ctx.fillStyle = "white";
    ctx.fillText("GAME OVER",cw/2,ch/2);
    
    ctx.restore();
     console.log("filltext gameover2")
}
