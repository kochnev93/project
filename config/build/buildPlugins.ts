import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {IBuildOptions} from "./types";

export function buildPlugins({paths}: IBuildOptions): webpack.WebpackPluginInstance[] {
    return [
            new HTMLWebpackPlugin({
                template: paths.html
            }),
            new webpack.ProgressPlugin(),
    ]
}