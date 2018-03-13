const gulp = require('gulp');
const jasmineNode = require('gulp-jasmine-node');

gulp.task('test', function() {
    return gulp.src(['test/*spec.js']).pipe(jasmineNode({
        timeout: 10000
    }));
});