import path from "path";
import { buildWebpackConfig, IBuildPaths, IBuildEnv } from "./config";

export default (env: IBuildEnv) => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
    };

    const mode = env.mode || "development";
    const isDev = mode === "development";
    const PORT = env.port || 3000;

    return buildWebpackConfig({ mode, paths, isDev, port: PORT });
};
