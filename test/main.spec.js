'use strict';

const main = require('../main');

// console.log('changeColors.add js is', main.changeColors.add);

describe("nodeArg function", function() {
    let nodeArgumentFun;
    let mockArray;

    it("should return 3-rd argument of a given array", () => {
        nodeArgumentFun = main.changeColors.nodeArg;
        mockArray = [1, 2, 3];

        expect(nodeArgumentFun(mockArray)).toBe(3);
    });
});

// main.js should be the second node argument
// nodeArg shoudl be the 3rd node arg 

// const arrayColors should exist 
// secons element should be colors.green

//fs.readfile should : 
// throw error if no file 
// read date from file if file presented 
// write data.toString
// change colors words