const PaintCan = function(amountLitres, isEmpty=false){
    this.amountLitres = amountLitres;
    this.isEmpty = isEmpty;
}

PaintCan.prototype.checkEmpty = function (){
    if (this.amountLitres === 0){
        this.isEmpty = true;
    }   
}

PaintCan.prototype.emptyCan = function (){
    this.amountLitres = 0;     
}

module.exports = PaintCan;