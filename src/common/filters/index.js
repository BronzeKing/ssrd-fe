/**
 * 该文件用来防止vue全局fliters
 */

export {
    FormartPrice,
    dateFilter,
    wrapDeal
};

const FormartPrice = (val) => {
    let NumPart,    // 整数部分
        FloatPart;  // 小数部分

    // fixed = (fixed ? fixed : 2)

    // 校验传入值
    if (typeof val === 'number') {
        val = val.toFixed(2).toString();
    }

    if (typeof val === 'string') {
        if (val.indexOf('.') !== -1) {
            // 如果有小数点
            var splitNum = parseFloat(val).toFixed(2).split('.');

            NumPart = splitNum[0];
            FloatPart = '.' + splitNum[1];
        } else {
            // 如果没有小数点，补齐两位小数显示
            NumPart = val;
            FloatPart = '.00';
        }
        let index = -3;
        // 将每个字符串转换为数组
        let NumPart = NumPart.toString().split('');

        while (NumPart.length + index > 0) {
            // splice(起始位置，替换个数，数据); 起始位置为负数则倒着操作
            NumPart.splice(index, 0, ',');
            index -= 4;
        }

        return NumPart.join('') + FloatPart;
    }
};

/**
 * 时间格式化
 */
const dateFilter = (value, type) => {
    let result;
    if (value === 0) {
        return '无限';
    } else {
        value = value * 1000;
    }
    switch (type) {
        // 年月日
        case 1:
            if (window.attachEvent) {
                result = new Date(parseInt(value)).toLocaleDateString();
            } else {
                result = new Date(parseInt(value)).toLocaleDateString('chinese', { hour12: false });
            }
            break;
            // 年月日时间
        case 2:
            if (window.attachEvent) {
                result = new Date(parseInt(value)).toLocaleString();
            } else {
                result = new Date(parseInt(value)).toLocaleString('chinese', { hour12: false });
            }
            break;
        default:
            result = '未知';
            break;
    }
    return result;
};

// 文本换行处理
const wrapDeal = (text) => {
    return text && text.replace(/\n/g, '\r\n');
};
