<template>
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
        <nav class="navbar ">
            <div class="navbar-brand">
                <a class="navbar-item" @click="showDrawer">
                    <b-icon icon="view-headline"></b-icon>
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item">
                        Home
                    </a>
                    <a class="navbar-item">
                        Config
                    </a>
                    <a class="navbar-item">
                        About
                    </a>
                    <span class="navbar-item">
                        <a class="button is-primary is-inverted">
                            <b-icon icon="account"></b-icon>
                            <span>Login</span>
                        </a>
                    </span>
                </div>
            </div>
        </nav>
    </div>
</template>
 
<script>  
export default {
    methods: {
        showDrawer() {
            this.$globalEventHub.$emit("showDrawer");
        }
    }
}
</script>