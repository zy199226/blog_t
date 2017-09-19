<template lang="html">
    <Mains>
        <Panel slot="main" header="登录">
            <Log slot="article"></Log>
        </Panel>
    </Mains>
</template>

<script>
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';
import Log from '../components/log/log.vue';

export default {
    components: {
        Mains,
        Panel,
        Log
    }
};
</script>

<style lang="less">
</style>
