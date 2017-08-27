'use strict';

if (!window.localStorage) {
    throw new Error('Browser does not support localstorage.');
}

let localStorage = window.localStorage;
let evenStorage = function () { };

let isJSON = function (obj) {
    return typeof obj === 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && !obj.length;
};

let isFunction = function (value) {
    return {}.toString.call(value) === '[object Function]';
};

let serialize = function (value) {
    return value === undefined || typeof value === 'function' ? value + '' : JSON.stringify(value);
};

let deserialize = function (value) {
    if (typeof value !== 'string') {
        return undefined;
    }

    try {
        return JSON.parse(value);
    } catch (e) {
        return value || undefined;
    }
};

let storage =
    {
        set: function (key, value) {
            evenStorage('set', key, value);

            if (key && !isJSON(key)) {
                localStorage.setItem(key, serialize(value));
            } else if (key && isJSON(key) && !value) {
                for (let k in key) {
                    this.set(k, key[k]);
                }
            }

            return this;
        },

        get: function (key) {
            if (!key) {
                let result = {};

                this.forEach(function (key, value) {
                    result[key] = value;
                });

                return result;
            }

            return deserialize(localStorage.getItem(key));
        },

        clear: function () {
            this.forEach(function (key, value) {
                evenStorage('clear', key, value);
            });

            localStorage.clear();

            return this;
        },

        remove: function (key) {
            let value = this.get(key);
            localStorage.removeItem(key);
            evenStorage('remove', key, value);

            return value;
        },

        has: function (key) {
            return localStorage.hasOwnProperty(key);
        },

        keys: function () {
            let result = [];

            this.forEach(function (key, list) {
                result.push(key);
            });

            return result;
        },

        size: function () {
            return this.keys().length;
        },

        forEach: function (callback) {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);

                if (callback(key, this.get(key)) === false) {
                    break;
                }
            }

            return this;
        },

        search: function (str) {
            let keys = this.keys();
            let result = [];

            for (let i = 0; i < keys.length; i++) {
                if (keys[i].indexOf(str) > -1) {
                    result.push(this.get(keys[i]));
                }
            }

            return result;
        },

        onStorage: function (callback) {
            if (callback && isFunction(callback)) {
                evenStorage = callback;
            }

            return this;
        }
    };

export default storage;
