const gulp = require('gulp');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');

const tsProject = ts.createProject('tsconfig.json');

const build = () =>
  gulp
    .src('src/**/*.ts')
    .pipe(tsProject())
    .pipe(gulp.dest('dist'));

// See https://github.com/JacksonGariety/gulp-nodemon/issues/46
gulp.task('build', build);

const watch = done =>
  nodemon({
    script: 'dist/main.js', // run ES5 code
    watch: ['src'],
    ext: 'ts',
    // ext: 'js json',
    // ignore: 'dist',
    // watch: watchFiles, // watch ES2015 code
    tasks: ['build'], // compile synchronously onChange
    done: done,
    verbose: true
  });

module.exports = {
  watch: gulp.series(build, watch)
};
