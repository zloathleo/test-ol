<template>

    <div>
        <div v-show="isShowDraw" class="modal-background" @click="isShowDraw = false"></div>

        <transition name="slide-fade">
            <div v-show="isShowDraw" class="drawer-content">
                <a class="dropdown-item" v-bind:class="{ 'is-active': selectedKey == 'dashboard' }" @click="clickMenu('dashboard')">
                    <div class="media">
                        <span class="icon media-left">
                            <i class="mdi mdi-view-dashboard mdi-24px"></i>
                        </span>
                        <div class="media-content">
                            <h3>Dashboard</h3>
                            <small>Everyone can see</small>
                        </div>
                    </div>
                </a>
                <a class="dropdown-item" v-bind:class="{ 'is-active': selectedKey == 'device-control' }" @click="clickMenu('device-control')">
                    <div class="media">
                        <span class="icon media-left">
                            <i class="mdi mdi-fire mdi-24px"></i>
                        </span>
                        <div class="media-content">
                            <h3>Device Control</h3>
                            <small>Only controller can see</small>
                        </div>
                    </div>
                </a>
                <a class="dropdown-item" v-bind:class="{ 'is-active': selectedKey == 'alarm' }" @click="clickMenu('alarm')">
                    <div class="media">
                        <span class="icon media-left">
                            <i class="mdi mdi-alert mdi-24px"></i>
                        </span>
                        <div class="media-content">
                            <h3>Alarm</h3>
                            <small>System Alarm</small>
                        </div>
                    </div>
                </a>
            </div>
        </transition>

    </div>

</template>

<style scoped lang="less">
.modal-background {
  z-index: 40;
  background-color: rgba(10, 10, 10, 0.5);
}
.drawer-content {
  position: absolute;
  width: 240px;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 50;
  background-color: #f9f9f9;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-240px);
  opacity: 0;
}
</style>

<script>
export default {
    data() {
        return {
            isShowDraw: false,
            selectedKey: "dashboard",
        }
    },
    mounted() {
        let _this = this;
        this.$globalEventHub.$on("showDrawer", function () {
            _this.isShowDraw = true;
        });
    },

    methods: {
        clickMenu(key) {
            this.selectedKey = key;
            this.isShowDraw = false;
            this.$router.push({ name: key });
            this.$globalEventHub.$emit("appLoading", true);
        },
    }
}
</script>