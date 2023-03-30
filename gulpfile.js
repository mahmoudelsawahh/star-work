const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sass = gulpSass(require("sass"));

gulp.task("watch", async function () {
  gulp.watch("src/components/**/*.scss", async function () {
    gulp
      .src("src/components/**/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("src/css"));
  });
});

gulp.task("GlobalWatch", async function () {
  gulp.watch("src/index.scss", async function () {
    gulp.src("src/index.scss").pipe(sass()).pipe(gulp.dest("src"));
  });
});
