"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");

var copy = require('gulp-contrib-copy');
var clean = require('gulp-contrib-clean');

var htmlcomb = require('gulp-htmlcomb');

gulp.task('htmlcomb', function () {
  return gulp.src('*.html')
  .pipe(htmlcomb())
  .pipe(gulp.dest('.'));
});

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]}),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.reload({stream: true}));
});


gulp.task("images", function() {
  gulp.src("img/**/*.{png,jpg,gif,svg}")
  .pipe(imagemin({
    optimizationLevel: 3,
    progressive: true
  }))
  .pipe(gulp.dest("build/img"));
});

gulp.task("clean", function() {
  gulp.src('build')
    .pipe(clean());
});

gulp.task("copy", function() {
  gulp.src(["fonts/**/*.{woff,woff2}", "img/**","js/**", "*.html"], {base:"."})
  .pipe(copy())
  .pipe(gulp.dest("build"));
});

gulp.task("copy-html", function() {
  gulp.src(["*.html"], {base:"."})
  .pipe(copy())
  .pipe(gulp.dest("build"))
  .pipe(server.reload({stream: true}));
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: "build",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html", ["htmlcomb" ,"copy-html"]);
});

gulp.task("build", ["clean", "copy", "style","images"]);
