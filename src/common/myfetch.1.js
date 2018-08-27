import globalvar from './globalvar';

export default {

    _emitLoadingStatus: function (applyLoading, isLoading) {
        if (applyLoading === true) {
            globalvar.GlobalEventHub.$emit('appLoading', isLoading);
        }
    },

    _timeoutCall(_then) {
        if (globalvar.fetchUserTimeOut > 10) {
            setTimeout(function () {
                _then();
            }, globalvar.fetchUserTimeOut);
        } else {
            _then();
        }
    },

    _fetch(url, _opt, resolve, reject) {
        let _self = this;
        fetch(_url, _opt).then(
            function (response) {
                console.log("then:", response);
                response.json().then(function (_json) {
                    //ok 范围 200-299  
                    if (response.ok) {
                        _self._timeoutCall(function () {
                            _self._emitLoadingStatus(_applyLoading, false);
                            resolve(_json);
                        });
                    } else {
                        _self._emitLoadingStatus(_applyLoading, false);
                        //服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject 
                        let _dispatch = { err: response, json: _json };
                        reject(_dispatch);
                    }
                }).catch(function (err) {
                    console.log("catchcatch2:");
                    _self._emitLoadingStatus(_applyLoading, false);
                    reject(err);
                });
            }
        ).catch(function (err) {
            console.log("catchcatch333:");
            //网络请求失败返回的数据    
            _self._emitLoadingStatus(_applyLoading, false);
            reject(err);
        });
    },

    _fetch2(_url, _opt, resolve, reject) {
        console.log("_fetch2:", _url);
        let _self = this;
        fetch(_url, _opt);
    },

    fetchPromise: function (url, _opt) {
        _opt.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        //默认不显示loading
        let _applyLoading = _opt.appLoading || false;
        console.log("_applyLoading:", _applyLoading);
        let _url = globalvar.fetchServerHostURL + url;
        let _self = this;
        this._emitLoadingStatus(_applyLoading, true);
        return new Promise(function (resolve, reject) {
            _self._fetch2(_url, _opt, resolve, reject)
        });
    },

}