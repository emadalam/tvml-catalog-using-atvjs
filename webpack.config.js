var
    webpack = require('webpack'),
    root = __dirname + '/web/app',
    entry = {
        app: './web/app/app.js'
    },
    output = {
        path: __dirname,
        filename: '[name].js'
    };

module.exports.development = {
    debug: true,
    devtool: 'eval',
    entry: entry,
    output: output,
    resolve: {
        root: root,
        alias: {
            'handlebars': 'handlebars/runtime.js'
        }
    },
    plugins: [],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules|bower_components|native/,
            loader: 'babel-loader'
        }, {
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        }, {
            test: /\.css$|\.json/,
            loader: 'raw-loader'
        }]
    }
};

module.exports.production = {
    debug: false,
    entry: entry,
    output: output,
    resolve: {
        root: root,
        alias: {
            'handlebars': 'handlebars/runtime.js'
        }
    },
    plugins: [],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules|bower_components|native/,
            loader: 'babel-loader'
        }, {
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        }, {
            test: /\.css$|\.json/,
            loader: 'raw-loader'
        }]
    }
};

module.exports.test = {
    resolve: {
        root: root,
        alias: {
            'handlebars': 'handlebars/runtime.js'
        }
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules|bower_components|native/,
            loader: 'babel-loader'
        }, {
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        }, {
            test: /\.css$|\.json/,
            loader: 'raw-loader'
        }]
    }
};