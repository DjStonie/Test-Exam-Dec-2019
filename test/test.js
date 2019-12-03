const expect = require('chai').expect;
const selectionSort = require('../selectionSort.js');


  describe('sort', function () {
    it('should return the sorted array', function () {

      let sortedArray = selectionSort([2,3,4]);
// console.log("something happening...");
      // let result = purchase.internetConnection();
      expect(sortedArray).to.equal([2,3,4]);
    });
  });
