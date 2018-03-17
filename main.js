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
            return fs.readFile(fileName, "utf8", function(err, data) {
                if (err) throw err;
                let str = data.toString();
                let result = str.split(" ");
                cb(null, result);
            });
        },
        paintwords: function(colors, arrayOfWords) { // give and array of words and colorisation functions it colorises the words and prints them on the screen
            arrayOfWords.forEach((word, i) => {
                process.stdout.write(colors[i % colors.length](word + ' '));
            });
        },
        main: function() {
            const that = this;
            const fileName = that.filename(process.argv);
            that.readfile(fileName, function(err, words) {
                that.paintwords(arrayColors, words);
            });
        },
    }

    exports.changeColors.main();
})();