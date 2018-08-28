import createPersistedState from "vuex-persistedstate";
import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        user: undefined
    },
    mutations: {
        setUser: function (state, value) {
            state.user = value;
        },
    },
    plugins: [createPersistedState()]
});

export default store