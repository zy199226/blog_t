<template lang="html">
    <ul id="log">
        <li><input type="text" name="username" placeholder="账号" v-model="username"></li>
        <li><input type="password" name="password" placeholder="密码" v-model="password"></li>
        <li><button @click="submit">登录</button></li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        submit() {
            if (this.username === '') {
                alert('用户名不能为空！');
            } else if (this.password === '') {
                alert('密码不能为空！');
            } else {
                this.$store.dispatch('axiosLogin', { username: this.username, password: this.password });
            }
        }
    }
};
</script>

<style lang="less">
@import "./log.less";
</style>
