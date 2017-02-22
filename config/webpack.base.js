var path = require("path");
var config = require("./config");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var base = {
    entry: {
        main: config.srcDir + "/main.js"
    },
    output: {
        filename: "scripts/[name].js",
        path: config.distDir + "/asserts/",
    },
    module: {
        rules: [{
            test: /\.vue?$/,
            exclude: [
                path.resolve(__dirname, "../node_modules")
            ],
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        loader: 'css-loader',
                        fallbackLoader: 'vue-style-loader'
                    })

                }
            }
        }, {
            test: /\.css?$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            use: [{ loader: 'file-loader' }]
        }]

    }
};
module.exports = base;
