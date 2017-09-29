'use strict';
let storage = require('./storage');

const Levels = {
    debug: 1,
    warn: 2,
    error: 3,

    toString: function (level) {
        switch (level) {
            case this.debug:
                return 'DEBUG';
            case this.warn:
                return 'WARN';
            case this.error:
                return 'ERROR';
        }
    }
};

let LogEntry = function (level, source, message, data) {
    this.level = level;
    this.source = source;
    this.message = message;
    this.data = data;
    // this.timestamp = Date.now().toString('yyyy-MM-dd HH:mm:ss.S');
    this.timestamp = new Date().toLocaleString();
};

let consoleLogger = {
    write (entry) {
        // let buffer = String.format('{0} [{1}] {2} [{3}] {4}', entry.timestamp, Levels.toString(entry.level), entry.source, entry.message, entry.data ? JSON.stringify(entry.data) : '');
        let buffer = entry.timestamp + ' [' + Levels.toString(entry.level) + ' ' + entry.source + ' ' + entry.message + '] ' + (entry.data ? JSON.stringify(entry.data) : '');
        /* eslint-disable no-console */
        switch (entry.level) {
            case Levels.debug:
                {
                    console.log(buffer);
                    break;
                }
            case Levels.warn:
                {
                    console.warn(buffer);
                    break;
                }
            case Levels.error:
                {
                    console.error(buffer);
                    break;
                }
        }
    }
};

let storageLogger = {
    LOG_PREFIX: 'logs_item_',
    LENGTH_KEY: 'logs_length',

    write (entry) {
        let index = this.count();       // 采用长度作为下一日志索引
        let length = index + 1;         // 新的长度

        // 设置日志序号。
        entry.index = index;

        // 插入日志记录。
        storage.set(this.LOG_PREFIX + index, entry);

        // 更新日志长度。
        storage.set(this.LENGTH_KEY, length);
    },

    read () {
        let logs = [];
        let items = storage.search(this.LOG_PREFIX);

        items.sort(function (a, b) {
            return a.index > b.index ? 1 : -1;
        });

        for (let i = 0; i < items.length; i++) {
            logs.push(items[i]);
        }

        return logs;
    },

    clear () {
        // 获取日志长度。
        let length = this.count();
        let keys = [];

        for (let i = 0; i < length; i++) {
            // 批量移除日志。
            storage.remove(this.LOG_PREFIX + i);
        }

        // 更新日志长度。
        storage.set(this.LENGTH_KEY, 0);
    },

    count () {
        // 获取日志长度。
        let count = storage.get(this.LENGTH_KEY) || 0;

        return count;
    }
};

const logger = {
    settings:
    {
        'logModel': 'console'
    },
    write: function (entry) {
        switch (this.settings.logModel) {
            case 'console':
                consoleLogger.write(entry);
                break;
            case 'storage':
                storageLogger.write(entry);
                break;
        }
    },

    debug (source, message, data) {
        let entry = new LogEntry(Levels.debug, source, message, data);

        this.write(entry);
    },

    warn (source, message, data) {
        let entry = new LogEntry(Levels.warn, source, message, data);

        this.write(entry);
    },

    error (source, message, data) {
        let entry = new LogEntry(Levels.error, source, message, data);

        this.write(entry);
    }
};

export default logger;
