//path difinition
module.exports = {
    assets: {
        jquery     : './node_modules/jquery/dist',
        easing     : './node_modules/jquery.easing',
        bootstrap  : './node_modules/bootstrap-honoka/dist/js',
        bowser     : './node_modules/bowser',
        gantt      : './node_modules/frappe-gantt',
        moment     : './node_modules/moment/min',
        snapsvg    : './node_modules/snapsvg/dist'
    },
    src: {
        ejs        : './src/ejs',
        scss       : './src/scss',
        assets     : '/assets',
        js         : './src/js',
        img        : './src/img',
        favicon    : './src/favicon'
    },
    config: {
        dir        : './src/config',
        config     : '/config.yml',
        commonvar  : '/commonvar.yml',
        gulpconfig : '/gulpconfig.yml',
        hachizetsu : './bin/subterranean/hachizetsu.yml',
        ftp        : './bin/subterranean/ftp.yml'
    },
    contents: {
        dir        : './src/contents'
    },
    template: {
        dir        : './bin/templates'
    },
    dist: {
        html       : './dist',
        news       : './dist/news',
        articles   : './dist/news/articles',
        css        : './dist/css',
        js         : './dist/js',
        img        : './dist/img'
    },
    sg: {
        html       : './sg/dist',
        md         : './readme.md',
        css        : '../../dist/css',
        js         : '../../dist/js',
        img        : '../../dist/img',
        favicon    : '../../dist/favicon',
        canceller  : '../src/css',
        template   : './sg/src/ejs'
    },
    admin: {
        scss       : './src/scss/admin',
        js         : './src/js/admin',
        dist       : './dist/daishi',
        views      : '/views',
        css        : '/public/css',
        distjs     : '/public/js'
    }
}