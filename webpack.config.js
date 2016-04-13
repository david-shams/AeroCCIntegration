/**
 * Created by david1 on 4/5/16.
 */
module.exports = {
    context: __dirname + '/app',
    entry: './index.js',//in relation to our context
    output: {
        //path: __dirname + '/app',
        //path: './app/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [

    ],
    externals: {
        angular: false, //this means you can get it off of todo: window.angular, if true you must include in <script> tag in index.html or require('angular')
        moments: true
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee']
    },
    loaders: [
        // SASS one omitted
        {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }
    ]
};