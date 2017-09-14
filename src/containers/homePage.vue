<template lang="html">
    <Mains>
        <Panel slot="panel"></Panel>
    </Mains>
</template>

<script>
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';

export default {
    components: {
        Mains,
        Panel
    }
};
</script>

<style lang="less">
</style>
