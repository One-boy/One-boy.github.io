

//数据

var Data = function(){
    this.score = 0
    this.maxScore = 0;
}

Data.prototype.storageName = "maxScore";

//
Data.prototype.init = function(){
    this.getMaxScore();
}
//获取最高分
Data.prototype.getMaxScore = function(){
    if(typeof localStorage == "object"){
        var storeageScore = localStorage.getItem(this.storageName);
        if(storeageScore != null){
            this.maxScore = parseInt(storeageScore);
        }
    }
}
//加分数
Data.prototype.addScore = function(score){
    this.score += score;
}

//最高分更新
Data.prototype.updateMaxScore = function(){
    if (this.score > this.maxScore){
        this.maxScore = this.score;
        if(typeof localStorage == "object"){
            localStorage.setItem(this.storageName,this.maxScore);
        }
    }
}