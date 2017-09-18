<template lang="html">
    <div id="main">
        <div id="mainBox" :style="ww">
            <slot name="main" />
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
    beforeCreate() {
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
            return window.innerWidth < 980 ? `height:${this.mh}px` : `min-height: ${this.mh}px`;
        }
    }
};
</script>

<style lang="less">
@import "./main.less";
</style>
