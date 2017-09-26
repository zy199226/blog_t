<template lang="html">
    <Mains>
        <div slot="main" class="" v-for="(topic, i) of home">
            <p :key="i">哈哈</p>
        </div>
        <Topics slot="main"></Topics>
        <Topics slot="main"></Topics>
        <Topics slot="main"></Topics>
        <Topics slot="main"></Topics>
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
