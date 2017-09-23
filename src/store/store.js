import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {
        axiosRegister({ commit }, { username, password }) {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/register',
                data: `username=${username}&password=${password}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((res) => {
                console.log(res);
            });
        }
    },
    plugins: [createLogger()]
});
