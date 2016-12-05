var path = require('path');

var DIST = path.resolve(__dirname, '../server/static/www');

module.exports = {
    entry: {
        app: ['./www/js/index.js']
    },
    output: {
        path: DIST,
        filename: 'index.js'
    },
    resolve: {
        modulesDirectories: [
            'www/js', 'node_modules'
        ],
        alias: {
            app: 'app',
            globals: 'globals',
            router: 'router',
            //Models
            baseModel: 'models/base',
            i18n: 'models/i18n',
            // Views
            base: 'views/base',
            home: 'views/home'
        }
    },
    module: {
        // preLoaders: [
        //   {test: /\.js$/, loader: 'eslint-loader' },
        // ],
        loaders: [
            {test: /\.html$/, loader: 'html' },
            {test: /\.css$/, loader: 'style!css' },
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    }
};