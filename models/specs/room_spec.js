const assert = require('assert');
const Room = require('../room.js');

describe("Room", function (){

    let bathroom;
    beforeEach(function() {
        bathroom = new Room(20);
    });

    it("should have an area", function() {
        const actual = bathroom.area;
        assert.strictEqual(actual, 20);

    });

    it("should start not painted", function(){
        const actual = bathroom.isPainted;
        assert.strictEqual(actual, false)

    });


});