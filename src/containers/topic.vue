<template lang="html">
    <Mains>
        <topicArticle slot="main" :topic="topic"></topicArticle>
    </Mains>
</template>

<script>
import { mapState } from 'vuex';
import Mains from '../components/main/main.vue';
import topicArticle from '../components/topicArticle/topicArticle.vue';

export default {
    components: {
        Mains,
        topicArticle
    },
    methods: {
        axios(id) {
            this.$store.dispatch('axiosTopic', id);
        }
    },
    created() {
        this.axios(this.$route.params.id);
    },
    watch: {
        $route() {
            this.axios(this.$route.params.id);
        }
    },
    computed: mapState({
        topic: state => state.topic
    })
};
</script>

<style lang="less">
</style>
