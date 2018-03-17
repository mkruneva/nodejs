'use strict';

const main = require('../main');
const mock = require('mock-fs');

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

describe("readfile function", function() {
    let readfileFunction;

    it("should be defined", function() {
        readfileFunction = main.changeColors.arrayFromFile;

        expect(readfileFunction).toBeDefined();
    })

    it("should read the file and pass it's contents to the callback", function() {
        var mockFs = { readFile: function() {} };

        var spyFs = spyOn(mockFs, "readFile").andCallFake(function(fileName, enc, cb) {
            cb(null, "ala bala nica")
        });

        main.changeColors.arrayFromFile(mockFs, "file1", function(err, data) {
            expect(err).toBeNull();
            expect(data).toEqual(["ala", "bala", "nica"]);
        });

        expect(spyFs).toHaveBeenCalledWith("file1", "utf8", jasmine.any(Function));
    });
});

describe("paintwords function", function() {
    it("should print every word with the coresponding colour", function() {
        var mocks = {
            red: function() {},
            green: function() {},
            blue: function() {},
            write: function() {}
        }
        var red = spyOn(mocks, "red").andReturn("red");
        var green = spyOn(mocks, "green").andReturn("green");
        var blue = spyOn(mocks, "blue").andReturn("blue");
        var colours = [mocks.red, mocks.green, mocks.blue];

        var spyWrite = spyOn(mocks, "write").andCallFake(function(word) {});

        main.changeColors.paintwords(mocks.write, colours, ["1", "2", "3", "4", "5", "6", "7"]);

        expect(spyWrite).toHaveBeenCalledWith("red");
        expect(spyWrite).toHaveBeenCalledWith("green")
        expect(spyWrite).toHaveBeenCalledWith("blue")
        expect(spyWrite).toHaveBeenCalledWith("red")
        expect(spyWrite).toHaveBeenCalledWith("green")
        expect(spyWrite).toHaveBeenCalledWith("blue")
        expect(spyWrite).toHaveBeenCalledWith("red");

        expect(red).toHaveBeenCalledWith("1 ")
        expect(red).toHaveBeenCalledWith("4 ")
        expect(red).toHaveBeenCalledWith("7 ")
    });
});

describe("paintwords function", function() {
    let paintwordsFunction;
    let writeFunction;
    const colorF = () => { console.log('ok') };
    const mockArrayColors = [colorF];
    const mockArrayWords = ['first', 'second', 'third'];

    it("should be defined", function() {
        paintwordsFunction = main.changeColors.paintwords;
        writeFunction = main.changeColors.write;

        expect(paintwordsFunction).toBeDefined();
    })

    // it("should do something ...", function() {
    //     paintwordsFunction = main.changeColors.paintwords;

    //     paintwordsFunction(mockArrayColors, mockArrayWords);

    //     expect(writeFunction).toHaveBeenCalled();
    // })
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