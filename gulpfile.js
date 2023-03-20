const { src, dest, series, watch } = require("gulp");
const concat = require("gulp-concat");
const htmlMin = require("gulp-htmlmin");
const autoprefixes = require("gulp-autoprefixer");
const cleanCss = require("gulp-clean-css");
const svgSprite = require("gulp-svg-sprite");
const imagesGulp = require("gulp-image");
const uglify = require("gulp-uglify-es").default;
const babel = require("gulp-babel");
const notify = require("gulp-notify");
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");
const gulpIf = require("gulp-if");
const argv = require("yargs").argv;
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const nouiSlider = require("nouislider");
const justValidate = require("just-validate");

const clean = () => {
  return del(["dist"]);
};
const resources = () => {
  return src("src/resources/**").pipe(dest("dist"));
};

const fontsLoad = () => {
  return src("src/fonts/**/*").pipe(dest("dist/fonts"));
};

const styles = () => {
  return src("src/styles/**/*.css")
    .pipe(gulpIf(!argv.prod, sourcemaps.init()))
    .pipe(concat("main.css"))
    .pipe(
      autoprefixes({
        cascade: false,
      })
    )
    .pipe(
      gulpIf(
        argv.prod,
        cleanCss({
          level: 2,
        })
      )
    )
    .pipe(sourcemaps.write())
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

function buildStyles() {
  return src("src/styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("main.css"))
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
}

const htmlMinify = () => {
  return src("src/**/*.html")
    .pipe(
      gulpIf(
        argv.prod,
        htmlMin({
          collapseWhitespace: true,
        })
      )
    )
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

const svgSprites = () => {
  return src("src/img/svg/**/*.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
          },
        },
      })
    )
    .pipe(dest("dist/images"));
};

const images = () => {
  return src([
    "src/img/**/*.jpg",
    "src/img/**/*.png",
    "src/img/*.svg",
    "src/img/**/*.jpeg",
  ])
    .pipe(imagesGulp())
    .pipe(dest("dist/images"));
};

const scripts = () => {
  return src(["src/js/components/**/*.js", "src/js/main.js"])
    .pipe(gulpIf(!argv.prod, sourcemaps.init()))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("app.js"))
    .pipe(
      gulpIf(
        argv.prod,
        uglify({
          toplevel: true,
        }).on("error", notify.onError())
      )
    )
    .pipe(sourcemaps.write())
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });
};

watch("src/fonts/**/*", fontsLoad);
watch("src/**/*.html", htmlMinify);
watch("src/styles/**/*.css", styles);
watch("src/styles/**/*.scss", buildStyles);
watch("src/img/svg/**/*.svg", svgSprites);
watch("src/js/**/*.js", scripts);
watch("src/resources/**", resources);

exports.buildStyles = buildStyles;
exports.styles = styles;
exports.htmlMinify = htmlMinify;
exports.scripts = scripts;
exports.default = series(
  clean,
  resources,
  fontsLoad,
  htmlMinify,
  scripts,
  styles,
  buildStyles,
  images,
  svgSprites,
  watchFiles
);
