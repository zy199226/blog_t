import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loginDetail: false
    },
    mutations: {
        axiosLogin(state, a) {
            state.loginDetail = a;
        },
        logout(state) {
            state.loginDetail = {};
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
                    window.localStorage.setItem('uid', res.data.uid);
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
                if (res.data.success) {
                    commit('axiosLogin', res.data);
                    window.localStorage.setItem('uid', res.data.uid);
                    window.location.href = './#/';
                } else {
                    alert(res.data.err);
                }
            });
        },
        uidLogin({ commit }, uid) {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/login',
                data: `uid=${uid}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((res) => {
                if (res.data.success) {
                    commit('axiosLogin', res.data);
                    window.localStorage.setItem('uid', res.data.uid);
                    window.location.href = './#/';
                } else {
                    alert(res.data.err);
                }
            });
        },
        axiosCreate({ state }, { title, content }) {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/create',
                data: `uid=${state.loginDetail.uid}&title=${title}&content=${content}`,
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
