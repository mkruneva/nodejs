'use strict';
(function() {
    const colors = require('colors');
    const fs = require('fs');

    const arrayColors = [
        colors.red,
        colors.green,
        colors.blue,
        colors.yellow,
        colors.magenta
    ];

    exports.changeColors = {
        filename: function(argArray) {
            return argArray[2]
        },
        readfile: function(fileName, cb) { // give a file name reads the file and returns an array of all words
            return [];
        },
        paintwords: function(colors, arrayOfWords, write) { // give and array of words and colorisation functions it colorises the words and prints them on the screen
            arrayOfWords.forEach((word, i) => {
                write(colors[i % colors.length](word + ' '));
            });
        },
        main: function() {
            const fileName = this.filename(process.argv);
            console.log(fileName);
            // this.readfile(fileName, function(err, words) {
            //     paintwords(arrayColors, words, process.stdout.write);
            // });
        },
        // readFile: function() {

        //     return fs.readFile(filename, "utf8", function(err, data) {
        //         if (err) throw err;
        //         let str = data.toString();
        //         let result = str.split(" ");
        // result.forEach((word, i) => {
        //     process.stdout.write(arrayColors[i % arrayColors.length](word + ' '));
        // });
        //     });
        // }
    }

    exports.changeColors.main();
})();