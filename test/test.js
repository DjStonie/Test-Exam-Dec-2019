const expect  = require('chai').expect;
const assert = require('chai').assert;
const PascalTriangle = require('../PascalTriangle');
const selectionSort = require('../selectionSort.js');


describe('Selection Sort', function() {
    const assertions = [
      { val: '-101', result: [-100],message: "Lower boundary integer over limit" },
      { val: '-100', result: [-100],message: "Lower boundary integer mid limit" },
      { val: '-99', result: [-99],message: "Lower boundary integer under limit" },
      { val: '101', result: [100],message: "Upper boundary integer over limit" },
      { val: '100', result: [100],message: "Upper boundary integer mid limit" },
      { val: '99', result: [99],message: "Upper boundary integer limit" },
      //Boundary based on unicode
      { val: '´', result: [-1],message: "Lower boundary lower case alphabet over limit" },
      { val: 'a', result: [97],message: "Lower boundary lower case alphabet mid limit" },
      { val: 'b', result: [98],message: "Lower boundary lower case alphabet under limit" },
      { val: '{', result: [-1],message: "Upper boundary lower case alphabet over limit" },
      { val: 'z', result: [122],message: "Upper boundary lower case alphabet mid limit" },
      { val: 'y', result: [121],message: "Upper boundary lower case alphabet under limit" },
      { val: '@', result: [-1],message: "Lower boundary upper case alphabet over limit" },
      { val: 'A', result: [65],message: "Lower boundary upper case alphabet mid limit" },
      { val: 'B', result: [66],message: "Lower boundary upper case alphabet under limit" },
      { val: '[', result: [-1],message: "Upper boundary upper case alphabet over limit" },
      { val: 'Z', result: [90],message: "Upper boundary upper case alphabet mid limit" },
      { val: 'Y', result: [89],message: "Upper boundary upper case alphabet under limit" },
      { val: '22,0,55,6', result: [0,6,22,55],message: "Sorting postive integers" },
      { val: '-42,0,-15,-60', result: [-60,-42,-15,0],message: "Sorting negative integers" },
      { val: '75,3,-43,-41,3', result: [-43,-41,3,3,75],message: "Sorting postive & negative integers" },
      { val: 'c,b,a', result: [97,98,99],message: "Sorting lower case letters" },
      { val: 'Z,O,A', result: [65,79,90],message: "Sorting upper case letters" },
      /*
            Unicode dec
            d = 100         F = 70
            n = 110         P = 80
            x = 120
        */
      { val: 'n,d,P,x,F', result: [70,80,100,110,120],message: "Sorting upper and lower case letters" },
      { val: 'c,2,a,b,3,1', result: [1,2,3,97,98,99],message: "Sorting integers and letters" },
      { val: 'abc', result: [97],message: "Multiple letters next to each other" },
      { val: '3.3,2.2,1.1', result: [1,2,3],message: "Float numbers to int" }
    ];

    assertions.forEach(({val, result, message}) => {
      describe(`Selection Sort Testing ${message}`, function() {
        it(`should return ${result}`, function() {
          expect(selectionSort(val)).to.eql(result)
        })

    })
    })
  })


describe('Pascal Triangle', function() {
    const assertions = [
      { val: 1, result: [[1]] },
      { val: 2, result: [[1],[1,1]] },
      { val: 3, result: [[1],[1,1],[1,2,1]] },
      { val: 0, result: [] },
      { val: "s", result: 0 },
      { val: 10, result: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],
        [1,5,10,10,5,1],[1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1],[1,8,28,56,70,56,28,8,1],
        [1,9,36,84,126,126,84,36,9,1]] },
      { val: -1, result: 0 },
      { val: 9, result: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],
        [1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1],[1,8,28,56,70,56,28,8,1]] },
      { val: ["a","b"], result: 0 },
      { val: 5, result: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] }
    ];

    assertions.forEach(({val, result}) => {
      describe(`Pascal Triangle Testing ${val}`, function() {
        it(`should return ${result}`, function() {
          expect(PascalTriangle.PascalTriangle(val)).to.eql(result)
        })
      })
    })
  })



describe('Valid Input', function() {
    const assertions = [
      { val: "A", result: false },
      { val: 5, result: true },
      { val: 11, result: false },
      { val: -1, result: false }
    ];

    assertions.forEach(({val, result}) => {
      describe(`Valid Input Testing ${val}`, function() {
        it(`should return ${result}`, function() {
          expect(PascalTriangle.ValidInput(val)).to.eql(result)
        })
      })
    })
  })
