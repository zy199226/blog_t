import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

    },
    mutations: {
        axiosLogin(state, a) {
            state.loginDetail = a;
        }
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
                if (res.data.success) {
                    commit('axiosLogin', res.data);
                    window.location.href = './#/';
                } else {
                    alert(res.data.err);
                }
            });
        },
        axiosLogin({ commit }, { username, password }) {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/login',
                data: `username=${username}&password=${password}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((res) => {
                console.log(res);
                if (res.data.success) {
                    commit('axiosLogin', res.data);
                    window.location.href = './#/';
                } else {
                    alert(res.data.err);
                }
            });
        }
    },
    plugins: [createLogger()]
});
