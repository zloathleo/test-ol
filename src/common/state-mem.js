import Vuex from 'vuex';
import globalvar from './globalvar';

const store = new Vuex.Store({
    state: {
        user: undefined,
        dashboardRouteName: undefined,
        menuItems: undefined
    },
    mutations: {
        initUserUI: function (state, value) {
            state.user = value;
            if (value.type == "admin") {
                state.dashboardRouteName = "group";
                state.menuItems = globalvar.adminMenuItems;
            } else if (value.type == "operator") {
                state.dashboardRouteName = "device";
                state.menuItems = globalvar.operatorMenuItems;
            }
        },
    },
});

export default store