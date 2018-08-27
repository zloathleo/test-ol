<template>

    <div> 
        <section class="hero is-primary">
            <Toolbar />
        </section>
        <b-loading :is-full-page="true" :active.sync="isAppLoading"></b-loading>
        <Drawer />

        <router-view></router-view> 
        <Footer />
    </div>

</template>

<style scoped lang="less">
</style>

<script>
import globalvar from '../../common/globalvar'
import Toolbar from './Toolbar.vue'
import Drawer from './Drawer.vue'
import Footer from './Footer.vue'
export default {
    components: { Toolbar, Drawer, Footer },
    data() {
        return {
            appName: globalvar.appName,
            isAppLoading: false,//是否loading状态
        }
    },
    beforeMount() {
        let _this = this;
        this.$globalEventHub.$on("appLoading", function (value) { 
            _this.isAppLoading = value;
        });
    },
    methods: {
    }
}
</script>