declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}

/**
* @说明 在vue文件和ts文件声明Payload，用于存放http的基本数据类型
*/
declare module "src/pages/*.vue" {
  global {
    interface Payload {
        [key: string]: any;
    }
  }
}

declare module "src/pages/*.ts" {
  global {
    interface Payload {
        [key: string]: any;
    }
  }
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
