import Vuex from 'vuex';
import globalvar from './globalvar';

const store = new Vuex.Store({
    state: {
        user: undefined,
        dashboardRouteName: undefined,
        currentRouteName: undefined,
        menuItems: undefined
    },
    mutations: {
        initUserUI: function (state, value) {
            state.user = value;
            if (value === undefined) {
                state.dashboardRouteName = undefined;
                state.menuItems = undefined;
            } else {
                if (value.type == "admin") {
                    state.dashboardRouteName = "adminDashboard";
                    state.currentRouteName = "adminDashboard";
                    state.menuItems = globalvar.adminMenuItems;
                } else if (value.type == "operator") {
                    state.dashboardRouteName = "operatorDashboard";
                    state.currentRouteName = "operatorDashboard";
                    state.menuItems = globalvar.operatorMenuItems;
                }
            }
        },
        refreshUserUI: function (state, value) {
            this.commit("initUserUI", value.user);
            state.currentRouteName = value.routeName;
        },
    },
});

export default store