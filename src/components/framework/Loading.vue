<template>
    <div class="w3-overlay" style="z-index:5" v-bind:class="{ 'w3-show': isAppLoading }">
        <div class="w3-progressbar w3-blue pregressbar" v-bind:style="{ width: loadingPercent + '%' }"></div>
    </div>
</template> 

<style scoped lang="less">
.pregressbar {
  height: 0.2rem;
}
</style>
 
<script>   
export default {
    data() {
        return {
            conf: {
                animationTime: 40,//动画速度
                apiMaxTime: 6000,//api调用时长限制
                apiEndAnimationTime: 500,//api调用完成后动画时长
            },
            isAppLoading: false,//是否loading状态 
            loadingPercent: 0,
            _isApiEnd: false,//api调用是否完成,通讯完成后，进度条直接推进到底
            _apiEndStep: 0,//通讯完成后，进度条步伐长度
        }
    },
    beforeMount() {
        let _this = this;
        this.$globalEventHub.$on("appLoading", function (value) {
            console.log("appLoading:", value);
            if (value === true) {
                _this.reset();
                _this.isAppLoading = true;

                clearInterval(this._intervalCallback);
                _this._intervalCallback = setInterval(_this.refreshBar, _this.conf.animationTime);
            } else {
                _this._isApiEnd = true;
                _this._apiEndStep = (100 - _this.loadingPercent) / (_this.conf.apiEndAnimationTime / _this.conf.animationTime);
                setTimeout(_this.endApiAnimation, _this.conf.apiEndAnimationTime);
            }
        });
    },

    methods: {
        reset: function () {
            this.loadingPercent = 0;
            this._isApiEnd = false;
            this._apiEndStep = 0;
        },
        endApiAnimation: function () {
            clearInterval(this._intervalCallback);
            this.isAppLoading = false;
            this.loadingPercent = 0;

            this._isApiEnd = false;
            this._apiEndStep = 0;
        },
        refreshBar: function () {
            //一共80 6s  300次 一定结束   
            if (this.isAppLoading === true && this.loadingPercent < 100) {
                if (this._isApiEnd) {
                    //api调用完成动画
                    this.loadingPercent = this.loadingPercent + this._apiEndStep;
                } else {
                    //普通API调用动画
                    let _p = 100 / (this.conf.apiMaxTime / this.conf.animationTime);
                    this.loadingPercent = this.loadingPercent + _p;
                }

            }
        }
    }
}
</script>