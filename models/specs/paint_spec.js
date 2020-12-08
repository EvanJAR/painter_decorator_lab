const assert = require('assert');
const PaintCan = require('../paint.js');

describe("PaintCan", function(){
    let red;
    let blue;

    beforeEach( function(){
        red = new PaintCan(12);
        blue = new PaintCan(0, true);        
    });

    it("should have a number of litres of paint", function(){
        const actual = red.amountLitres;
        assert.strictEqual(actual, 12)
    });

    it("should be able to check if can is empty", function(){
        red.checkEmpty();
        const actual1 = red.isEmpty;
        assert.strictEqual(actual1, false)
        blue.checkEmpty();
        const actual2 = blue.isEmpty;
        assert.strictEqual(actual2, true);
    })

    it("should be able to empty itself", function(){
        red.emptyCan();
        const actual = red.amountLitres;
        assert.strictEqual(actual, 0)
    });

});