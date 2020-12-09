const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint.js');
const Room = require('../room.js');


describe("Decorator", function () {

    let decorator;

    beforeEach( function(){
        decorator = new Decorator();
        bluePaint = new PaintCan(10);
        redPaint = new PaintCan(12);
        bathroom = new Room(22);
    });

    it("should be able to start with empty paint stock", function(){
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, [])
    });

    it("should be able to add a can of paint to paint stock", function(){
        const red = redPaint;
        decorator.addPaintCan(red);
        assert.deepStrictEqual(decorator.paintStock, [redPaint])

    });

    it("should be able to calculate total paint litres", function(){
        totalPaint = redPaint.amountLitres + bluePaint.amountLitres;
        decorator.addPaintCan(bluePaint);
        decorator.addPaintCan(redPaint);
        const actual = decorator.calculateLitreTotal();
        assert.strictEqual(actual, totalPaint)
    });

    it("should be able to calculate whether there is enough paint to paint a room", function(){
        decorator.addPaintCan(bluePaint);
        decorator.addPaintCan(redPaint);
        assert.strictEqual(decorator.enoughPaint(bathroom), true);
    });

});
