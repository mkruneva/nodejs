'use strict';

const colors = require('colors');
const fs = require("fs");

const nodeArg = process.argv[2];

const arrayColors = [
    colors.red,
    colors.green,
    colors.blue,
    colors.yellow,
    colors.magenta,
]

fs.readFile(nodeArg, "utf8", function(err, data) {
    if (err) throw err;
    let str = data.toString();
    let result = str.split(" ");
    result.forEach((word, i) => {
        process.stdout.write(arrayColors[i % arrayColors.length](word + ' '));
    });
});