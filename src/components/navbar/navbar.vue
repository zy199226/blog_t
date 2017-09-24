<template lang="html">
    <div id="header" ref='header'>
        <div class="container">
            <i id="setBtn" @click="setBtn">&#xe900;</i>
            <img src="../../assets/logo.png" alt="bbblog">
            <div :class="['links', { linkShow: show }]" @click="setBtn" :style="ww < 980 ? `height: ${slideBarHeight}px` : ''">
                <ul @click="stop">
                    <li v-for="link of links" @click="setBtn">
                        <router-link :to="link.src" v-if="!link.c">{{link.name}}</router-link>
                        <router-link :to="link.src" v-else-if="link.c === 2 && success">{{link.name}}</router-link>
                        <router-link :to="link.src" v-else-if="link.c === 1 && !success">{{link.name}}</router-link>
                    </li>
                    <li v-if="success" @click="setBtn">{{username}}，<button @click="logout">退出</button></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { bus, stopBubble } from '../../util/util';

export default {
    data() {
        return {
            links: [
                { name: '首页', src: '/' },
                { name: '发布话题', src: '/create', c: 2 },
                { name: '注册', src: '/register', c: 1 },
                { name: '登录', src: '/login', c: 1 }
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
        },
        logout() {
            console.log(this);
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
    },
    computed: mapState({
        success: state => state.loginDetail.success,
        username: state => state.loginDetail.username
    })
};
</script>

<style lang="less">
@import "./navbar.less";
</style>
