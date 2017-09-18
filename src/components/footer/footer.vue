<template lang="html">
    <div id="footer" ref="footer">
        <div class="center">
            <p>
                哈哈，有问题请联系 qq：122203566
            </p>
        </div>
    </div>
</template>

<script>
import { bus } from '../../util/util';

export default {
    mounted() {
        bus.$emit('footerH', this.$refs.footer.clientHeight);
    },
    watch: {
        $route() {
            bus.$emit('footerH', this.$refs.footer.clientHeight);
        }
    }
};
</script>

<style lang="less">
@import "./footer.less";
</style>
