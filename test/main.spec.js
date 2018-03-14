'use strict';

const main = require('../main');

describe("node Arguments file name function", function() {
    let filenameFunction;
    let mockArray;

    it("should return 3-rd argument of a given array", () => {
        filenameFunction = main.changeColors.filename;
        mockArray = [1, 2, 3];

        expect(filenameFunction(mockArray)).toBe(3);
    });
    it("should return undefined if array has less than 3 elements", () => {
        filenameFunction = main.changeColors.filename;
        mockArray = [1, 2];

        expect(filenameFunction(mockArray)).toBeUndefined();
    });
});

describe("main function", function() {
    let mainFunction;

    it("should be defined", function() {
        mainFunction = main.changeColors.main;

        expect(mainFunction).toBeDefined();
    })
});
// describe("paint words function", function() {
//     let mockColors;
//     let mockWords;
//     let mockWrite;

//     it("should print the words from the array and on the screen", () => {
//         // spyOn(rest, 'init');
//         // post = new Post(rest);
//         // expect(rest.init).toHaveBeenCalled();

//         mockColors = [];
//         mockWords = ['one', 'two', 'three'];
//         mockWrite = function(word) {};
//         let writeFunction = process.stdout.write();

//         main.changeColors.paintwords([], [], mockWrite);

//         expect(writeFunction).toHaveBeenCalled();

//     });
// });


// main.js should be the second node argument
// nodeArg shoudl be the 3rd node arg 

// const arrayColors should exist 
// secons element should be colors.green

//fs.readfile should : 
// throw error if no file 
// read date from file if file presented 
// write data.toString
// change colors words