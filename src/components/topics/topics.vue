<template lang="html">
    <div class="topics">
        <router-link :to="`/topic/${topic._id}`">{{topic.title}}</router-link>
        <time>时间：{{create}}</time>
        <span>作者：{{topic.username}}</span>
    </div>
</template>

<script>
export default {
    props: ['topic'],
    computed: {
        create() {
            return new Date(this.topic.create_at).toLocaleDateString();
        }
    }
};
</script>

<style lang="less">
@import "./topics.less";
</style>
