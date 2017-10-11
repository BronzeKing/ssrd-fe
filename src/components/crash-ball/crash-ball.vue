<template lang="pug">
    .components.crash-ball(ref="crashBall" :style="{left: `${startX}px`, top: `${startY}px`}")
</template>
<script>
    let timer = null;

    export default {
        name: 'crash-ball',
        data () {
            return {
                crashBall: null,
                startX: 10,
                startY: 500,
                marginLeft: 0,
                marginTop: 0,
                maxX: 0,
                maxY: 0,
                x: 1,
                y: 1
            };
        },

        mounted () {
            this.$nextTick(() => {
                this.beginPlay();
                // 避免窗口大小变化时 动画出现问题
                window.addEventListener('resize', this.initPlay);
            });
        },

        beforeDestroy () {
            // 组件销毁之前清空回收定时器
            this.clearTimer();
        },

        methods: {
            // 递归调用 因为很可能初始化的时候#app的高度为0  // 直接延时2s执行了。
            beginPlay () {
                const appEl = document.querySelector('#app');
                timer = setTimeout(() => {
                    if (appEl.clientHeight > 0) {
                        this.clearTimer();
                        this.initPlay();
                        return;
                    } else {
                        this.beginPlay();
                    }
                }, 2000);
            },

            // 清除定时器
            clearTimer () {
                if (timer) {
                    clearInterval(timer);
                    timer = null;
                }
            },

            // 开始动画
            initPlay () {
                this.clearTimer();
                this.initVaries();
                window.requestAnimationFrame(this.timerTask);
            },

            // 初始化所有固定变量
            initVaries () {
                // console.log('initVaries');
                let crashBall = this.crashBall = this.$refs.crashBall;
                // 全网页跑
                // const appEl = document.querySelector('#app');
                // 当前屏幕范围跑
                const appEl = document.querySelector('body');
                this.maxX = appEl.clientWidth - crashBall.offsetWidth;
                this.maxY = appEl.clientHeight - crashBall.offsetHeight;
            },

            // 定时器任务
            timerTask () {
                let crashBall = this.crashBall;
                if (!crashBall) return;
                timer = setInterval(this.ballPlay, 30);
            },

            // 动画细节
            ballPlay () {
                // console.log('enter ball play');
                let marginLeft = this.marginLeft = parseInt(this.crashBall.style.left);
                let marginTop = this.marginTop = parseInt(this.crashBall.style.top);
                if (marginLeft < 0  || marginLeft > this.maxX) {
                    this.x *= -1;
                }
                if (marginTop < 0 || marginTop > this.maxY) {
                    this.y *= -1;
                }
                this.startX += this.x * 5;
                this.startY += this.y * 5;
                this.crashBall.style.left = this.startX;
                this.crashBall.style.top = this.startY;
            }

        }
    };
</script>
<style lang="scss">
    @import "./layout";
</style>