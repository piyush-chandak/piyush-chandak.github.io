// configuration variable
const { PORT, BASE_DIRECTORY, DESTINATION_FOLDER_LOCATION, PATH } = require('./config');

// default varaibles
const { src, dest, parallel, series, watch } = require('gulp');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const changed = require('gulp-changed');

// css varaibles
const cssnano = require('gulp-cssnano'); 
const sass = require('gulp-sass')(require('sass'));

// js varaibles
const terser = require('gulp-terser');

// browser varaibles
const browserSync = require('browser-sync').create();

// html varaibles
const htmlclean = require('gulp-htmlclean');
const inject = require('gulp-inject');
const fs = require("fs");
const path = require('path');

// Clean old build
function clearCache() {
  return src(DESTINATION_FOLDER_LOCATION, { read: false })
  .pipe(clean());
}

// Converting SCSS to CSS and updating on change
function buildCSSFiles() {
  return src(PATH.CSS.SOURCE)
    .pipe(changed(PATH.CSS.DESTINATION))
    .pipe(sass({ errLogToConsole: true }))
    .pipe(concat(PATH.CSS.FILE_NAME))
    .pipe(rename({ extname: PATH.CSS.EXTENSION }))
    .pipe(cssnano())
    .pipe(dest(PATH.CSS.DESTINATION))
    .pipe(syncBrowser());
}

// Minify JS and updating on change
function buildJSFiles() {
  return src(PATH.JAVASCRIPT.SOURCE_FILES, { sourcemaps: true })
    .pipe(changed(PATH.JAVASCRIPT.DESTINATION))
    .pipe(concat(PATH.JAVASCRIPT.FILE_NAME))
    .pipe(terser())
    .pipe(rename({ extname: PATH.JAVASCRIPT.EXTENSION }))
    .pipe(dest(PATH.JAVASCRIPT.DESTINATION, { sourcemaps: '.' }))
    .pipe(syncBrowser());
}

// Updating HTML on change
function buildHTMLPages() {
  return injectInHtmlFile()
    .pipe(syncBrowser());
}

// Dynamic updating the css, js and mustache files in HTML Page
function injectInHtmlFile() {
  const cssFiles = src(PATH.CSS.DESTINATION_FILES, { read: false });
  const jsFiles = src(PATH.JAVASCRIPT.DESTINATION_FILES, { read: false });
  const mustacheFiles = src(PATH.MUSTACHE.DESTINATION_FILES, { read: false });

  return src(PATH.HTML.SOURCE)
    .pipe(htmlclean())
    .pipe(inject(cssFiles, { relative: true }))
    .pipe(inject(jsFiles, { relative: true }))
    .pipe(inject(mustacheFiles, {
      starttag: '<!-- inject:musatche -->',
      transform: function (filepath) {
        const absoluteFilePath = path.join(__dirname, filepath);
        const fileContent = fs.readFileSync(absoluteFilePath, 'utf8');
        return fileContent;
      }}))
    .pipe(dest(PATH.HTML.DESTINATION));
}

// Gulp Mustache Task 
function buildMustacheFile() {
  return src(PATH.MUSTACHE.SOURCE)
  .pipe(dest(PATH.MUSTACHE.DESTINATION))
  .pipe(syncBrowser())
  .pipe(src(PATH.HTML.SOURCE))
}

// Watch files
function watchFiles() {
  watch(PATH.HTML.SOURCE, buildHTMLPages);
  watch(PATH.CSS.SOURCE, buildCSSFiles);
  watch(PATH.JAVASCRIPT.SOURCE, buildJSFiles);
  watch(PATH.MUSTACHE.SOURCE, series(buildMustacheFile, buildHTMLPages));
}

// BrowserSync
function dynamicSync() {
  browserSync.init({
    server: {
      baseDir: BASE_DIRECTORY,
      index: PATH.HTML.DEFAULT_FILE
    },
    port: PORT
  });
}

function syncBrowser() {
  return browserSync.reload({ stream: true });
}

const defaultEvents = series(clearCache, buildCSSFiles, buildJSFiles, buildMustacheFile, injectInHtmlFile);

exports.watch = series(defaultEvents, parallel(watchFiles, dynamicSync));
exports.default = defaultEvents;