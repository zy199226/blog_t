<template lang="html">
    <Mains>
        <Panel slot="main" header="登录">
            <Log slot="article"></Log>
        </Panel>
    </Mains>
</template>

<script>
import { mapState } from 'vuex';
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';
import Log from '../components/log/log.vue';

export default {
    components: {
        Mains,
        Panel,
        Log
    },
    beforeMount() {
        if (this.success) {
            window.location.href = './#/';
        }
    },
    computed: mapState({
        success: state => state.loginDetail.success
    })
};
</script>

<style lang="less">
</style>
