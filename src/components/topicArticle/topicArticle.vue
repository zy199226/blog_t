<template lang="html">
    <div id="topicArticle">
        <div class="err" v-if="!topic.success">此话题不存在或已被删除。</div>
        <div class="art" v-else>
            <div class="artHeader">
                <h1>{{topic.data.title}}</h1>
                <time>时间：{{create}}</time>
                <span>作者：{{topic.data.username}}</span>
            </div>
            <div class="article" v-html="topic.data.content"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['topic'],
    computed: {
        create() {
            return new Date(this.topic.data.create_at).toLocaleDateString();
        }
    }
};
</script>

<style lang="less">
@import "./topicArticle.less";
</style>
