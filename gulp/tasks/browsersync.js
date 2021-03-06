const _         = require('../plugin')
const dir       = require('../dir')
const functions = require('../functions')
const gulpConfig = functions.getConfig(dir.config.gulpconfig).functions

let GENERATENEWS
if(gulpConfig.news) {
    GENERATENEWS = 'ejs' //新着情報を含む全てのejsタスク
}
else {
    GENERATENEWS = 'newsless.ejs' //新着情報なしのejsタスク
}

//自動リロード
_.gulp.task('browsersync', () => {
    _.browserSync({
        server: {
            baseDir: dir.dist.html
        },
        open: 'external',
        https: gulpConfig.ssl
    })

    _.watch(`${dir.src.ejs}/**/*.ejs`, _.gulp.series(GENERATENEWS, _.browserSync.reload))
    _.watch(`${dir.contents.dir}/**/*.md`, _.gulp.series('ejs', _.browserSync.reload))
    _.watch(`${dir.src.favicon}/**/*`, _.gulp.series('favicon', _.browserSync.reload))
    _.watch([`${dir.src.scss}/**/*.scss`, `!${dir.src.scss}/util/_var.scss`], _.gulp.series('sass', _.browserSync.reload))
    _.watch(`${dir.src.img}/**/*.+(jpg|jpeg|png|gif|svg)`, _.gulp.series('imagemin', _.browserSync.reload))
    _.watch(`${dir.src.js}/*.js`, _.gulp.series('js', _.browserSync.reload))
    _.watch([`${dir.config.dir}/**/*.yml`, `!${dir.config.dir}/gulpconfig.yml`], _.gulp.series(_.gulp.parallel(GENERATENEWS, 'scss', 'js'), _.browserSync.reload))
    _.watch(`${dir.contents.dir}/**/*.json`, _.gulp.series(GENERATENEWS, _.browserSync.reload));
})