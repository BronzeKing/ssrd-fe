declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare const process: {
    env: {
        NODE_ENV: string
    }
};

declare const require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};
