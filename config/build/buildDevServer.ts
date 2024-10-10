import { IBuildOptions } from "./types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
    const { port } = options;

    return {
        port,
        open: true,
    };
}
