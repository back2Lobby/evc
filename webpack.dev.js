const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "evc.dev.js",
        library: "EVC",
        libraryTarget: "umd"
    },
    mode: "development"
})