

var htmlvp = require("html-webpack-plugin");

module.exports = {
    entry: __dirname + '/js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new htmlvp({
            title: "Handsontable",
            filename: "index.html",
            template: "Test.html"
        })
    ]
};