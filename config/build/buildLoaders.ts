import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { IBuildOptions } from "./types";

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [["i18next-extract", { locales: ["ru", "en"], keyAsDefaultValue: true }]],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:5]",
                    },
                },
            },
            "sass-loader",
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [fileLoader, svgLoader, babelLoader, tsLoader, cssLoader];
}
