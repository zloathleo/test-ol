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
                            <button ref="loginSubmit" class="button is-small is-primary column is-half is-offset-one-quarter loginButton" @click="login">
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
import globalvar from '../../common/globalvar';
import statePersisted from '../../common/state-persisted';
export default {
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
            let un = this.$refs.inputUsername.newValue;
            let pw = this.$refs.inputPassword.newValue;

            if (un && pw && un.length > 1 && pw.length > 0) {
                pw = jsmd5(pw);
                let url = '/account/login';
                let params = new URLSearchParams();
                params.append('name', un);
                params.append('password', pw);

                let _this = this;
                this.$myaxios.post(url, params).then(function (res) {

                    _this.$toast.open({
                        message: "用户登录成功,进入页面",
                        position: 'is-bottom',
                        type: 'is-success'
                    });

                    statePersisted.commit("setUser", res.data);

                    setTimeout(function () {
                        _this.$router.push({ name: 'dashboard' });
                    }, 500);

                }).catch(function (error) {
                    _this.$toast.open({
                        message: "登录异常 - " + globalvar.parseError(error),
                        position: 'is-bottom',
                        type: 'is-danger'
                    });
                });
            } else {
                _this.$toast.open({
                    message: "用户名,密码不合法或为空",
                    position: 'is-bottom',
                    type: 'is-danger'
                });
            }

            // this.$router.push({ name: 'dashboard' });
        }
    }
}
</script>