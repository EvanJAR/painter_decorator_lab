const Room = require("./room");

const Decorator = function(paintStock){
    this.paintStock = [];
};

Decorator.prototype.addPaintCan = function (paintCan) {
    this.paintStock.push(paintCan);
};

Decorator.prototype.calculateLitreTotal = function(){
    let totalPaintStock = 0
    for (let paint of this.paintStock){
        totalPaintStock += paint.amountLitres
    }
    return totalPaintStock
}; 

Decorator.prototype.enoughPaint = function(room){
    totalPaintAmount = this.calculateLitreTotal()
    if (totalPaintAmount >= room.area){
        return true;
    }
}


module.exports = Decorator; 