<template lang="html">
    <Mains>
        <Topics slot="main"></Topics>
        <Topics slot="main"></Topics>
        <Topics slot="main"></Topics>
        <Topics slot="main"></Topics>
        <Topics slot="main"></Topics>
        <Topics slot="main"></Topics>
        <Topics slot="main"></Topics>
    </Mains>
</template>

<script>
import Mains from '../components/main/main.vue';
import Topics from '../components/topics/topics.vue';

export default {
    components: {
        Mains,
        Topics
    }
};
</script>

<style lang="less">
</style>
