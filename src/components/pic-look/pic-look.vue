<template lang="pug">
    section.components-lookpic(v-show="isShow" @click="hide")
        .lookpic-picture-wapper(v-if="imageUrls && imageUrls.length === 1")
            img(id="image" class="lookpic-picture" :src="imageUrls[0]")
        ul(id="image" v-if="imageUrls && imageUrls.length > 1")
            li(v-for="(item, index) in imageUrls" :key="index")
                img(:src="item" alt="Picture")
</template>
<script>
import Viewer from 'viewerjs';
// import 'viewerjs/dist/viewer.min.css';

let viewer = null;

let options = {
    navbar: false,
    movable: false,
    title: false
};

export default {
    name: 'lookpic',
    data () {
        return {
            isShow: false,
            index: null,
            viewer: null,
            imageUrls: []
        };
    },
    mounted () {
        // this.initViewer();
    },
    methods:{
        initViewer () {
            this.$nextTick(() => {
                if (this.viewer) {
                    this.viewer.show();
                    return;
                }
                let image = document.getElementById('image');
                this.viewer = new Viewer(image, {
                    ...options,
                    shown: () => {
                        // console.log(this.viewer, this.index);
                        this.viewer.view(this.index);
                    }
                });
                this.viewer.show();

                image.addEventListener('hide', () => {
                    this.hide();
                }, false);
            });
        },
        show ({images, index}) {
            this.isShow = true;
            this.index = index || 0;
            this.imageUrls = images;

            this.initViewer();
        },
        hide () {
            this.isShow = false;
            // this.index = null;
            // viewer.hide();
        }
    }
};
</script>
<style lang="scss">
    @import './layout';
</style>
