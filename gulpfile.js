"use strict";

const root = './public_html/';
const subDomain = 'nikolays93';

/** {String} Domain for use local server proxy */
const domain = '';


const gulp = require("gulp");
const src = gulp.src;
const dest = gulp.dest;
const watch = gulp.watch;
const parallel = gulp.parallel;
const series = gulp.series;

const gulpif = require("gulp-if");
const browsersync = require("browser-sync");
const rename = require("gulp-rename");
const debug = require("gulp-debug");
const yargs = require("yargs");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
const mincss = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");

/** @type bool */
const production = !!yargs.argv.production;
const tunnel = !!yargs.argv.tunnel;

const webpackConfig = require('./webpack.config.js');
webpackConfig.mode = production ? 'production' : 'development';
webpackConfig.devtool = production ? false : "source-map";

gulp.task("buildStyles", function () {
    return src('./*.scss')
        .pipe(gulpif(!production, sourcemaps.init()))
        .pipe(sass())
        .pipe(gulpif(production, autoprefixer({ browsers: ["last 12 versions", "> 1%", "ie 8", "ie 7"] })))
        .pipe(gulpif(production, mincss({
            compatibility: "ie8",
            level: {
                1: {
                    specialComments: 0,
                    removeEmpty: true,
                    removeWhitespace: true
                },
                2: {
                    mergeMedia: true,
                    removeEmpty: true,
                    removeDuplicateFontRules: true,
                    removeDuplicateMediaBlocks: true,
                    removeDuplicateRules: true,
                    removeUnusedAtRules: false
                }
            },
            rebase: false
        })))
        .pipe(gulpif(production, rename({ suffix: ".min" })))
        .pipe(gulpif(!production, sourcemaps.write()))
        .pipe(dest('./dist/'))
        .pipe(debug({ "title": "CSS files" }))
        .on("end", () => browsersync.reload);
});

gulp.task("buildScript", function() {
    return src('./lightbox.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulpif(production, rename({ suffix: ".min" })))
        .pipe(dest('./dist/'))
        .pipe(debug({ "title": "Webpack" }))
        .on("end", browsersync.reload);
});

gulp.task("reloadHTML", function() {
    return src('./*.html')
        .pipe(debug({ "title": "RAW to HTML" }))
        .on("end", browsersync.reload);
});

gulp.task("watcher", function() {
    watch([ './*.scss' ], series("buildStyles"));
    watch([ './lightbox.js' ], series("buildScript"));

    watch([ './index.html' ], series("reloadHTML"));
});

gulp.task("serve", function () {
    var serverCfg = {
        port: 9000,
        notify: false
    }

    if( tunnel ) {
        serverCfg.tunnel = subDomain;
    }

    serverCfg.server = {baseDir: './'};

    browsersync.init(serverCfg);
});


/**
 * Build only
 */
gulp.task("build", parallel("buildStyles", "buildScript"));


/**
 * Build with start serve/watcher
 */
gulp.task("default", series("build", parallel("watcher", "serve")));
