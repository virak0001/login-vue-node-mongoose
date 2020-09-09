import api from '@/services/api'
import router from '@/router/index.js'

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
};

const actions = {
    //user login
    async login({
        commit
    }, user) {
        commit('auth_request');
        try {
            let res = await api().post('/api/users/login', user)
            if (res.data.success) {
                const token = res.data.token;
                const user = res.data.user;
                // Store the token into the localstorage
                localStorage.setItem('token', token);
                // Set the axios defaults
                api().defaults.headers.common['Authorization'] = token
                commit('auth_success', token, user);
            }
            return res;
        } catch (err) {
            commit('auth_error', err);
            return Promise.reject(err);
        }
    },
    // Logout the user
    async logout({
        commit
    }) {
        await localStorage.removeItem('token');
        commit('logout');
        delete api().defaults.headers.common['Authorization'];
        router.push('/login');
        return
    },
     // Get the user Profile
     async getProfile({
        commit
    },) {
        commit('profile_request');
        let res = await api().get('/api/users/profile',{ headers: { Authorization:localStorage.getItem('token') }})
        commit('user_profile', res.data.user)
        return res;
    },
}

const mutations = {
    auth_request(state) {
        state.error = null
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
        state.error = null
    },
    auth_error(state, err) {
        state.error = err.response.data.msg
    },
    register_request(state) {
        state.error = null
        state.status = 'loading'
    },
    register_success(state) {
        state.error = null
        state.status = 'success'
    },
    register_error(state, err) {
        state.error = err.response.data.msg
    },
    logout(state) {
        state.error = null
        state.status = ''
        state.token = ''
        state.user = ''
    },
    profile_request(state) {
        state.status = 'loading'
    },
    user_profile(state, user) {
        state.user = user
    }
};
export default {
    state,
    getters,
    actions,
    mutations
};