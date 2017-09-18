<template lang="html">
    <Mains>
        <Panel slot="main" header="注册">
            <Reg slot="article"></Reg>
        </Panel>
    </Mains>
</template>

<script>
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';
import Reg from '../components/reg/reg.vue';

export default {
    components: {
        Mains,
        Panel,
        Reg
    }
};
</script>

<style lang="less">
</style>
