const expect  = require('chai').expect;
const assert = require('chai').assert;
const PascalTriangle = require('../PascalTriangle');
const selectionSort = require('../selectionSort.js');


describe('Selection Sort', function () {
	it('should return the sorted array', function () {
        let sortedArray = selectionSort("2,3,4");
        expect([2,3,4]).to.eql(sortedArray);
    });

    /*
        Beneath is test for integers
    */

    it('Lower boundary integer over limit', function() {
        const sort = selectionSort('-101')
        expect([-100]).to.eql(sort)
    });
    
    it('Lower boundary integer mid limit', function() {
        const sort = selectionSort('-100')
        expect([-100]).to.eql(sort)
    });
    
    it('Lower boundary integer under limit', function() {
        const sort = selectionSort('-99')
        expect([-99]).to.eql(sort)
    });
    
    it('Upper boundary integer over limit', function() {
        const sort = selectionSort('101')
        expect([100]).to.eql(sort)
    });

    it('Upper boundary integer mid limit', function() {
        const sort = selectionSort('100')
        expect([100]).to.eql(sort)
    });
    
    it('Upper boundary integer limit', function() {
        const sort = selectionSort('99')
        expect([99]).to.eql(sort)
    });

    /*
        Beneath is test for lower case letters
    */

    it('Lower boundary lower case alphabet over limit', function() {
        /*
            unicode  dec 96 = `
        */
        const sort = selectionSort('`')
        expect([-1]).to.eql(sort)
    });

    it('Lower boundary lower case alphabet mid limit', function() {
        /*
            unicode dec 97 = a
        */
        const sort = selectionSort('a')
        expect([97]).to.eql(sort)
    });
    
    it('Lower boundary lower case alphabet under limit', function() {
        /*
            unicode dec 98 = b
        */
        const sort = selectionSort('b')
        expect([98]).to.eql(sort)
    });

    it('Upper boundary lower case alphabet over limit', function() {
        /*
            unicode  dec 123 = {
        */
        const sort = selectionSort('{')
        expect([-1]).to.eql(sort)
    });

    it('Upper boundary lower case alphabet mid limit', function() {
        /*
            unicode dec 122 = z
        */
        const sort = selectionSort('z')
        expect([122]).to.eql(sort)
    });
    
    it('Upper boundary lower case alphabet under limit', function() {
        /*
            unicode dec 121 = y
        */
        const sort = selectionSort('y')
        expect([121]).to.eql(sort)
    });

    /*
        Beneath is test for upper case letters
    */

    it('Lower boundary upper case alphabet over limit', function() {
        /*
            unicode  dec 64 = @
        */
        const sort = selectionSort('@')
        expect([-1]).to.eql(sort)
    });

    it('Lower boundary upper case alphabet mid limit', function() {
        /*
            unicode dec 65 = A
        */
        const sort = selectionSort('A')
        expect([65]).to.eql(sort)
    });
    
    it('Lower boundary upper case alphabet under limit', function() {
        /*
            unicode dec 66 = B
        */
        const sort = selectionSort('B')
        expect([66]).to.eql(sort)
    });

    it('Upper boundary upper case alphabet over limit', function() {
        /*
            unicode  dec 91 = [
        */
        const sort = selectionSort('[')
        expect([-1]).to.eql(sort)
    });

    it('Upper boundary upper case alphabet mid limit', function() {
        /*
            unicode dec 90 = Z
        */
        const sort = selectionSort('Z')
        expect([90]).to.eql(sort)
    });
    
    it('Upper boundary upper case alphabet under limit', function() {
        /*
            unicode dec 89 = Y
        */
        const sort = selectionSort('Y')
        expect([89]).to.eql(sort)
    });

    /*
        Beneath is test for sorting with integers
    */

    it('Sorting postive integers', function() {
        const sort = selectionSort('22,0,55,6')
        expect([0,6,22,55]).to.eql(sort)
    });

    it('Sorting negative integers', function() {
        const sort = selectionSort('-42,0,-15,-60')
        expect([-60,-42,-15,0]).to.eql(sort)
    });

    it('Sorting postive & negative integers', function() {
        const sort = selectionSort('75,3,-43,-41,3')
        expect([-43,-41,3,3,75]).to.eql(sort)
    });

    /*
        Beneath is test for sorting with letters
    */

    it('Sorting lower case letters', function() {
        const sort = selectionSort('c,b,a')
        expect([97,98,99]).to.eql(sort)
    });

    it('Sorting upper case letters', function() {
        const sort = selectionSort('Z,O,A')
        expect([65,79,90]).to.eql(sort)
    });

    it('Sorting upper and lower case letters', function() {
        /*
            Unicode dec
            d = 100         F = 70
            n = 110         P = 80
            x = 120
        */
        const sort = selectionSort('n,d,P,x,F')
        expect([70,80,100,110,120]).to.eql(sort)
    });

    /*
        Beneath is test for sorting integers and letters
    */

    it('Sorting integers and letters', function() {
        const sort = selectionSort('c,2,a,b,3,1')
        expect([1,2,3,97,98,99]).to.eql(sort)
    });

    /*
        Beneath is test for special cases
    */

    it('Multiple letters next to each other', function() {
        //Only takes the first letter
        const sort = selectionSort('abc')
        expect([97]).to.eql(sort)
    });

    it('Float numbers to int', function() {
        const sort = selectionSort('3.3,2.2,1.1')
        expect([1,2,3]).to.eql(sort)
    });

});


describe('Test setup', function() {
    it('is 1 equal to 1', function() {
        assert.equal(1, 1);
    });
});

describe('Pascal Triangle', function() {
    it('Pascal Triangle 1', function() {
        expect([[1]]).to.eql(PascalTriangle.PascalTriangle(1));
    
    });

    it('Pascal Triangle 2', function() {
        expect([[1],[1,1]]).to.eql(PascalTriangle.PascalTriangle(2));
   });

   it('Pascal Triangle 3', function() {
       expect([[1],[1,1],[1,2,1]]).to.eql(PascalTriangle.PascalTriangle(3));
    });

    it('Pascal Triangle 0', function() {
        assert.equal(PascalTriangle.PascalTriangle(0),0);
    });
    it('Pascal Triangle Letter', function() {
        assert.equal(PascalTriangle.PascalTriangle("s"),0);
    });
    it('Pascal Triangle Max', function() {
        expect([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],
        [1,5,10,10,5,1],[1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1],[1,8,28,56,70,56,28,8,1],
        [1,9,36,84,126,126,84,36,9,1]]).to.eql(PascalTriangle.PascalTriangle(10));
    });
    it('Pascal Triangle Negative Value', function() {
        assert.equal(PascalTriangle.PascalTriangle(-1),0);
    });
   
    it('Pascal Triangle MaxMinusOne Value', function() {
        expect([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1],[1,8,28,56,70,56,28,8,1]]).to.eql(PascalTriangle.PascalTriangle(9));
    });

    it('Pascal Triangle ArrayStrings Value', function() {
        assert.equal(PascalTriangle.PascalTriangle(["a","b"]),0);
    });

    it('Pascal Triangle Middle Value', function() {
        expect([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]).to.eql(PascalTriangle.PascalTriangle(5));
    });
});


describe('Valid Input', function() {
    it('Valid Input Not an Int', function() {
        assert.equal(PascalTriangle.ValidInput("A"),false);
    });
    it('Valid Input Int withing limitation', function() {
        assert.equal(PascalTriangle.ValidInput(5),true);
    });
    it('Valid Input Int over limitation', function() {
        assert.equal(PascalTriangle.ValidInput(11),false);
    });

    it('Valid Input Int under limitation', function() {
        assert.equal(PascalTriangle.ValidInput(-1),false);
    });
});