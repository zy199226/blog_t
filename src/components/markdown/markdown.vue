<template lang="html">
    <div id="markdown">
        <input type="text" name="title" placeholder="标题" v-model="title">
        <mavon-editor style="height: 100%" @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>
        <button @click="submit">发布</button>
        <div class="shadow" v-if="!success">
            <router-link :to="'/login'">请登录</router-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

export default {
    components: {
        mavonEditor
    },
    data() {
        return {
            title: '',
            img_file: {}
        };
    },
    methods: {
        $imgAdd(pos, $file) {
            this.img_file[pos] = $file;
        },
        $imgDel(pos) {
            delete this.img_file[pos];
        },
        submit() {
            const content = document.getElementsByClassName('v-show-content-html')[0].textContent;
            this.$store.dispatch('axiosCreate', { title: this.title, content });
        }
    },
    computed: mapState({
        success: state => state.loginDetail.success
    })
};
</script>

<style lang="less">
@import "./markdown.less";
</style>
