/**
 * 这里时用来放ajax封装的。
 */
class Ajax {
    constructor (params) {
        this.params = params;
    }
    get () {
        return 'it s a get methods';
    }
    post () {
        return 'it s a post methods';
    }
}

export default new Ajax();
