<template>
    <div class="overflow-hidden loginbg" style="background-image: url(assets/img/photos/photo6@2x.jpg);">

        <div class="content">

            <div class="columns is-mobile">
                <div class="column" />
                <div class="column is-half-mobile is-one-quarter-tablet">

                    <img src="assets/img/login/logo.png" alt="">
                    <div class="">
                        <b-field>
                            <b-input ref="inputUsername" size="is-small" placeholder="用户名..." icon="account" rounded>
                            </b-input>
                        </b-field>

                        <b-field>
                            <b-input ref="inputPassword" size="is-small" type="password" placeholder="密码..." icon="textbox-password" password-reveal rounded>
                            </b-input>
                        </b-field>

                        <div class="columns is-mobile loginButtonPane">
                            <button ref="loginSubmit" class="button is-small is-primary column is-half is-offset-one-quarter loginButton" v-bind:class="{ 'is-loading': isLogining }" @click="login">
                                系统登录
                            </button>
                        </div>
                    </div>

                </div>
                <div class="column" />
            </div>

        </div>

    </div>
</template>

<style scoped lang="less">
.loginbg {
  overflow: hidden;
  background-position: 0 50%;
  -webkit-background-size: cover;
  background-size: cover;
  height: 100%;
  background-repeat: no-repeat;
}
.content {
  background-color: rgba(0, 0, 0, 0.4);
  top: 150px;
  position: relative;
  padding: 1rem;
}
.loginButtonPane {
  padding: 0.5rem;
  .loginButton {
    padding: 0rem;
  }
}
</style>

<script> 
import jsmd5 from 'js-md5';
import statePersisted from '../../common/state-persisted';
import stateMem from '../../common/state-mem';
export default {
    data() {
        return {
            isLogining: false
        }
    },
    mounted() {
        let _this = this;
        document.onkeydown = function (e) {
            var theEvent = window.event || e;
            var code = theEvent.keyCode || theEvent.which;
            if (code == 13) {//回车
                let _button = _this.$refs.loginSubmit;
                _this.$refs.loginSubmit.click();
            }
        }
    },
    methods: {
        login: function () {
            this.isLogining = true;
            let un = this.$refs.inputUsername.newValue;
            let pw = this.$refs.inputPassword.newValue;
            let _this = this;

            if (un && pw && un.length > 1 && pw.length > 0) {
                pw = jsmd5(pw);
                let url = '/account/login';
                let params = {
                    'name': un,
                    'password': pw
                };

                this.$myaxios.post(url, params).then(function (res) {
                    _this.$globalvar.toastSuccess(_this, "用户登录成功,进入主页面");

                    let _user = res.data;
                    
                    _this.$myaxios.defaults.headers.accessToken = _user.token;
                    statePersisted.commit("setUser", _user);
                    stateMem.commit("initUserUI", _user);

                    _this.isLogining = false;

                    let _routeName = stateMem.state.dashboardRouteName;
                    console.log(_routeName);
                    setTimeout(function () {
                        _this.$router.push({ name: _routeName });
                    }, 500);

                }).catch(function (error) {
                    statePersisted.commit("setUser", undefined);
                    stateMem.commit("initUserUI", undefined);
                    _this.isLogining = false;

                    _this.$globalvar.toastError(_this, "登录异常", error);
                });
            } else {
                statePersisted.commit("setUser", undefined);
                stateMem.commit("initUserUI", undefined);
                _this.isLogining = false;

                _this.$globalvar.toastError(_this, "用户名/密码不合法或为空");
            }
        }
    }
}
</script>