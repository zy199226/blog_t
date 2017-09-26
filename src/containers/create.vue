<template lang="html">
    <Mains>
        <Panel slot="main" header="发布话题">
            <MarkDown slot="article"></MarkDown>
        </Panel>
    </Mains>
</template>

<script>
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';
import MarkDown from '../components/markdown/markdown.vue';

export default {
    components: {
        Mains,
        Panel,
        MarkDown
    }
};
</script>

<style lang="less">
</style>
