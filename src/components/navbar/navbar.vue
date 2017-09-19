<template lang="html">
    <div id="header" ref='header'>
        <div class="container">
            <i id="setBtn" @click="setBtn">&#xe900;</i>
            <img src="../../assets/logo.png" alt="bbblog">
            <div :class="['links', { linkShow: show }]" @click="setBtn" :style="ww < 980 ? `height: ${slideBarHeight}px` : ''">
                <ul @click="stop">
                    <li v-for="link of links" @click="setBtn"><router-link :to="link.src">{{link.name}}</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { bus, stopBubble } from '../../util/util';

export default {
    data() {
        return {
            links: [
                { name: '首页', src: '/' },
                { name: '发布话题', src: '' },
                { name: '注册', src: '/register' },
                { name: '登录', src: '/login' }
            ],
            show: false,
            slideBarHeight: 'auto',
            ww: ''
        };
    },
    methods: {
        setBtn() {
            this.show = !this.show;
        },
        stop() {
            stopBubble();
        },
        sbh() {
            this.slideBarHeight = window.innerHeight - this.$refs.header.clientHeight;
            this.ww = window.innerWidth;
            bus.$emit('otherH', this.slideBarHeight);
        }
    },
    mounted() {
        this.sbh();
        window.onresize = () => this.sbh();
    },
    watch: {
        $route() {
            bus.$emit('otherH', this.slideBarHeight);
        }
    }
};
</script>

<style lang="less">
@import "./navbar.less";
</style>
