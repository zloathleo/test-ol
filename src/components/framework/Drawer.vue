<template>

    <div>
        <div v-show="isShowDraw" class="modal-background" @click="isShowDraw = false"></div>

        <transition name="slide-fade">
            <div v-show="isShowDraw" class="drawer-content">

                <div class="side-header">
                    <b-icon icon="google-circles" size="is-small">
                    </b-icon>
                    <span class="side-header-appname">{{appName}}</span>
                </div>

                <a class="dropdown-item" v-for="item in items" v-bind:class="{ 'is-active': selectedKey == item.key }" @click="clickMenu(item.key)">
                    <div class="media">
                        <span class="icon media-left">
                            <b-icon icon="view-dashboard" />
                        </span>
                        <div class="media-content">
                            <h3>{{item.display}}</h3>
                            <small>{{item.display}}</small>
                        </div>
                    </div>
                </a>
            </div>
        </transition>

    </div>

</template>

<style scoped lang="less">
.side-header {
  margin: 0 auto;
  padding: 1rem 1.5rem;
  max-width: 100%;
  .side-header-appname {
    font-weight: 600;
  }
}
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
            appName: "后台管理",
            items: [
                {
                    key: "dashboard",
                    display: "Dashboard",
                    icon: "view-dashboard",
                    desc: ""
                },
                {
                    key: "device-control",
                    display: "Device Control",
                    icon: "view-dashboard",
                    desc: ""
                },
                {
                    key: "alarm",
                    display: "Alarm",
                    icon: "view-dashboard",
                    desc: ""
                }
            ]
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