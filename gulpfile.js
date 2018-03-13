var gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');

const specReporter = new JasmineConsoleReporter({
    colors: 1, // (0|false)|(1|true)|2 
    cleanStack: 1, // (0|false)|(1|true)|2|3 
    verbosity: 4, // (0|false)|1|2|(3|true)|4 
    listStyle: 'indent', // "flat"|"indent" 
    activity: false
});


gulp.task('test', () =>
    gulp.src('test/main.spec.js')
    .pipe(jasmine({
        reporter: specReporter
    }))
);