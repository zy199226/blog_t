<template lang="html">
    <div class="panel">
        <div class="title" v-if="$props.header">
            <span>{{$props.header}}</span>
        </div>
        <div class="article">
            <slot name="article"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header']
};
</script>

<style lang="less">
@import "./panel.less";
</style>
