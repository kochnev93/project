export type BuildModeType = "production" | "development";

export interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface IBuildOptions {
    mode: BuildModeType;
    paths: IBuildPaths;
    isDev: boolean;
}