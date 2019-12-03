const expect  = require('chai').expect;
const assert = require('assert');
const PascalTriangle = require('../PascalTriangle');


describe('Test setup', function() {
    it('is 1 equal to 1', function() {
        assert.equal(1, 1);
    });
});

describe('Pascal Triangle', function() {
    it('Pascal Triangle 1', function() {
        expect([[1]]).to.eql(PascalTriangle(1));
    
    });

    it('Pascal Triangle 2', function() {
        expect([[1],[1,1]]).to.eql(PascalTriangle(2));
   });

   it('Pascal Triangle 3', function() {
       expect([[1],[1,1],[1,2,1]]).to.eql(PascalTriangle(3));
    });

    it('Pascal Triangle 0', function() {
        assert.equal(PascalTriangle(0),0);
    });
    it('Pascal Triangle Letter', function() {
        assert.equal(PascalTriangle("s"),0);
    });
    it('Pascal Triangle Max', function() {
        expect([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],
        [1,5,10,10,5,1],[1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1],[1,8,28,56,70,56,28,8,1],
        [1,9,36,84,126,126,84,36,9,1]]).to.eql(PascalTriangle(10));
    });
    it('Pascal Triangle Negative Value', function() {
        assert.equal(PascalTriangle(-1),0);
    });
   
    it('Pascal Triangle MaxMinusOne Value', function() {
        expect([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1],[1,8,28,56,70,56,28,8,1]]).to.eql(PascalTriangle(9));
    });

    it('Pascal Triangle ArrayStrings Value', function() {
        assert.equal(PascalTriangle(["a","b"]),0);
    });

    it('Pascal Triangle Middle Value', function() {
        expect([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]).to.eql(PascalTriangle(5));
    });
});