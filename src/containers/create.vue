<template lang="html">
    <Mains>
        <Panel slot="main" header="发布话题">
            <MarkDown slot="article"></MarkDown>
        </Panel>
    </Mains>
</template>

<script>
import { mapState } from 'vuex';
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';
import MarkDown from '../components/markdown/markdown.vue';

export default {
    components: {
        Mains,
        Panel,
        MarkDown
    },
    methods: {
        re() {
            if (!this.success) {
                window.location.href = './#/';
            }
        }
    },
    beforeMount() {
        this.re();
    },
    computed: mapState({
        success: state => state.loginDetail.success,
        loginDetail: state => state.loginDetail
    }),
    watch: {
        loginDetail() {
            this.re();
        }
    }
};
</script>

<style lang="less">
</style>
