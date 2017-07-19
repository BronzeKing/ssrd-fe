/**
 * Created by newlife on 2017/7/6.
 */
let _private = {
    hasOwnProperty: Object.prototype.hasOwnProperty         // 判断一个属性是定义在对象本身而不是继承自原型链
};

class I {
    constructor (item) {
        this.text = item.text || '';
        this.alias = item.alias || '';
        this.value = item.value || null;
    };
    // 自定valueof方法，不继承Object方法，后代类继承该方法。
    valueOf () {
        return this.value;
    };
    // 自定toSting方法，不继承Object方法，后代类继承该方法。
    toString () {
        return String(this.value);
    }
}

class Enums {
    constructor (items) {
        // 将传入的items赋值为函数的静态类
        Object.keys(items).forEach((key) => {
            // 判断一个属性是定义在对象本身而不是继承自原型链，意思就是循环该对象上本身的属性，而不是继承的属性
            if (_private.hasOwnProperty.call(items, key)) {
                // 该赋值操作会触发下面的get(),和set();
                // 并制定该属性的原型来自I，继承来自I的value of, toSting方法。
                this[key] = new I(items[key]);
            }
        });

        // 该赋值操作会触发下面的get items(),和set items();
        this.items = items;
    };

    get (partten) {
        let num;
        let buffer;

        // 优先匹配枚举值
        if (typeof partten === 'number') {
            num = partten;
        } else {
            buffer = parseInt(partten);

            if (!isNaN(buffer)) {
                num = buffer;
            }
        }

        if (!isNaN(num)) {
            // 按枚举值查找
            let items = this.items;

            // 使用全等匹配查找
            buffer = items.filter(function (item) { return item.value === num; });

            return buffer && buffer.length > 0 ? buffer[0] : null;
        } else {
            // 按枚举名称查找
            if (hasOwnProperty.call(this, partten)) {
                return this[partten];
            }
        }
    };

    set (name, value, text) {
        if (_private.hasOwnProperty.call(this, name)) {
            value && (this[name].value = value);
            text && (this[name].text = text);
        }
    };

    get items () {
        return this._items;
    }

    set items (items) {
        this._items = [];
        Object.keys(items).forEach((key) => {
            _private.hasOwnProperty.call(this, key) && this._items.push(this[key]);
        });
    };
}

export default (Enum) => new Enums(Enum);
