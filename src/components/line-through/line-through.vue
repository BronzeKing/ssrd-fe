<template>
    <div class="line-through">
        <fieldset>
            <legend>
                <slot>
                    <span class="font-grey" v-text="message"></span>
                </slot>
            </legend>
        </fieldset>
    </div>
</template>
<script>
    export default {
        name: 'line-through',
        props: {
            message: {
                type: String,
                default () {
                    return '没有更多消息了哦';
                }
            }
        }
    };
</script>
<style lang="scss">
    @import "./line-through";
</style>