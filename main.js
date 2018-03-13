'use strict';

exports.changeColors = {
    nodeArg: function(argArray) {
        // return process.argv[2]
        return argArray[2]
    },
    arrayColors: function() {
        const colors = require('colors');
        return [colors.red, colors.green, colors.blue, colors.yellow, colors.magenta]
    },
    readFile: function() {
        const fs = require('fs');
        return fs.readFile(nodeArg, "utf8", function(err, data) {
            if (err) throw err;
            let str = data.toString();
            let result = str.split(" ");
            result.forEach((word, i) => {
                process.stdout.write(arrayColors[i % arrayColors.length](word + ' '));
            });
        });
    }
}