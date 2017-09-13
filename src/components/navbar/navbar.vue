<template lang="html">
    <div id="header">
        <div class="container">
            <i id="setBtn" @click="setBtn">&#xe900;</i>
            <img src="../../assets/logo.png" alt="bbblog">
            <div :class="['links', { linkShow: show }]">
                <ul>
                    <li v-for="link of links"><router-link :to="{ name: '', params: {} }">{{link.name}}</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { name: '首页', src: '' },
                { name: '发布话题', src: '' },
                { name: '注册', src: '' },
                { name: '登录', src: '' }
            ],
            show: false
        };
    },
    methods: {
        setBtn() {
            this.show = !this.show;
        }
    }
};
</script>

<style lang="less">
@import "./navbar.less";
</style>
