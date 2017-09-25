<template lang="html">
    <Mains>
        <Panel slot="main" header="注册">
            <Reg slot="article"></Reg>
        </Panel>
    </Mains>
</template>

<script>
import { mapState } from 'vuex';
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';
import Reg from '../components/reg/reg.vue';

export default {
    components: {
        Mains,
        Panel,
        Reg
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
