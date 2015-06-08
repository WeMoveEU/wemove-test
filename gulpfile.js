"use strict";
var gulp = require('gulp');
var gutil = require('gulp-util');
//var jasmine = require('gulp-jasmine');
var jasmine = require('gulp-jasmine-phantom');
var argv = require('yargs').argv;


if (typeof argv.config == "undefined") {
  var configFile = "config/localhost"; //this is changed from the command line, eg. gulp --config=example.org
  gutil.log(gutil.colors.red('Using config/localhost.json config, you should copy it to config/yourfile.json, then run with --config=yourfile'));

  } else {
  var configFile = "config/"+argv.config;
  gutil.log(gutil.colors.green("Using config/"+argv.config))
}
var config=require("./"+configFile+".json"); 
process.env.config = config;

gulp.task('default', function() {
}); 



gulp.task('specs', function () {
    return gulp.src('spec/*.js')
        .pipe(jasmine({integration:true}));
});

gulp.task('default', ['specs']);
