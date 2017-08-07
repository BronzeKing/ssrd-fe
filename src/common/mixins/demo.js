export default {
    data () {
        return {
            message: 'I \'m global Vue mixins.'
        };
    },
    created () {
        console.log(this.message);
    }
};
