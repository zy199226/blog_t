<template lang="html">
    <div id="app">
        <NavBar />
        <router-view></router-view>
        <Footers />
    </div>
</template>

<script>
import NavBar from '../components/navbar/navbar.vue';
import Footers from '../components/footer/footer.vue';

export default {
    components: {
        NavBar,
        Footers
    },
    beforeCreate() {
        const uid = window.localStorage.getItem('uid');

        if (uid) {
            this.$store.dispatch('uidLogin', uid);
        }
    }
};
</script>

<style lang="less">
@import "~normalize.css/normalize.css";

//iconfont
@font-face {
    font-family: 'icomoon';
    src: url('../fonts/icomoon.eot?-ivr5ln');
    src: url('../fonts/icomoon.eot?#iefix-ivr5ln') format('embedded-opentype'),
    url('../fonts/icomoon.ttf?-ivr5ln') format('truetype'),
    url('../fonts/icomoon.woff?-ivr5ln') format('woff'),
    url('../fonts/icomoon.svg?-ivr5ln#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
}

[class*="icon-"],
[class^="icon-"],
i {
    font-family: 'icomoon';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body{
    background: #f4f4f4;
}
</style>
