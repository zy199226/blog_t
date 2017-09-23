<template lang="html">
    <ul id="reg">
        <li><input type="text" name="username" placeholder="账号" v-model="username"></li>
        <li><input type="password" name="password" placeholder="密码" v-model="password"></li>
        <li><input type="password" name="password" placeholder="确认密码" v-model="password2"></li>
        <li><button @click="submit">注册</button></li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            password2: ''
        };
    },
    methods: {
        submit() {
            if (this.username === '') {
                alert('用户名不能为空！');
            } else if (this.password === '') {
                alert('密码不能为空！');
            } else if (this.password !== this.password2) {
                alert('两次密码不一致，请重新输入！');
            } else {
                this.$store.dispatch('axiosRegister', { username: this.username, password: this.password });
            }
        }
    }
};
</script>

<style lang="less">
@import "./reg.less";
</style>
