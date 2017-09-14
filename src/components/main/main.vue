<template lang="html">
    <div id="main">
        <div id="mainBox" :style="ww < 980 ? `height:${mh}px` : `min-height: ${mh}px`">
            <slot name="panel" />
        </div>
    </div>
</template>

<script>
import { bus } from '../../util/util';

export default {
    data() {
        return {
            oh: 0,
            fh: 0
        };
    },
    methods: {
        mainH() {

        }
    },
    beforeMount() {
        bus.$on('otherH', (oh) => {
            this.oh = oh;
        });
        bus.$on('footerH', (fh) => {
            this.fh = fh;
        });
    },
    computed: {
        mh() {
            if (window.innerWidth < 980) {
                return this.oh;
            }
            return this.oh - this.fh;
        },
        ww() {
            return window.innerWidth;
        }
    }
};
</script>

<style lang="less">
@import "./main.less";
</style>
