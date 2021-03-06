import path from "path";
import { merge } from "webpack-merge";
import common from "./webpack.common.js";

const __dirname = path.resolve();

export default merge(common, {
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "evc.min.js",
        library: "EVC",
        libraryTarget: "umd"
    },
    mode: "production"
})