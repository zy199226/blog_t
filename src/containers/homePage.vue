<template lang="html">
    <Mains>
        <Topics v-for="(topic, i) of home" :key="i" slot="main" :topic="topic"></Topics>
    </Mains>
</template>

<script>
import { mapState } from 'vuex';
import Mains from '../components/main/main.vue';
import Topics from '../components/topics/topics.vue';

export default {
    components: {
        Mains,
        Topics
    },
    created() {
        this.$store.dispatch('axiosTopics');
    },
    computed: mapState({
        home: state => state.home
    })
};
</script>

<style lang="less">
</style>
