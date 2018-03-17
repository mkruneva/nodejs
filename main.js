'use strict';
const colors = require('colors');
const fs = require('fs');

(function() {
    exports.changeColors = function(fs, write, argv) {
        return {
            filename: function(argArray) {
                return argArray[2]
            },
            arrayFromFile: function(fileName, cb) { // give a file name reads the file and returns an array of all words
                return fs.readFile(fileName, "utf8", function(err, data) {
                    if (err) throw err;
                    let str = data.toString();
                    let result = str.split(" ");
                    cb(null, result);
                });
            },
            paintwords: function(colors, arrayOfWords) { // give and array of words and colorisation functions it colorises the words and prints them on the screen
                arrayOfWords.forEach((word, i) => {
                    write(colors[i % colors.length](word + ' '));
                });
            },
            arrayColors: [
                colors.red,
                colors.green,
                colors.blue,
                colors.yellow,
                colors.magenta
            ],
            main: function(arrayColors) {
                const that = this;
                const fileName = that.filename(argv);
                that.arrayFromFile(fileName, function(err, words) {
                    that.paintwords(arrayColors, words);
                });
            },
        }
    }
})();


var changeColors = exports.changeColors(
    fs,
    word => process.stdout.write(word),
    process.argv
);
changeColors.main(changeColors.arrayColors);