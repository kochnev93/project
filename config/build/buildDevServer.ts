import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { IBuildOptions } from './types';

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
    const { port } = options;

    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
