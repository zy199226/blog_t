import Vue from 'vue';
import App from './containers/App.vue';

import router from './router/router';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
