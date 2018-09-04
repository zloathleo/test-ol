<template>

    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">添加消息</p>
            <button class="delete" aria-label="close" @click="$parent.close()"></button>
        </header>
        <section class="modal-card-body">

            <div class="field is-horizontal">
                <div class="field-label is-small">
                    <label class="label">消息类型</label>
                </div>
                <div class="field-body">
                    <div class="field is-narrow">
                        <div class="control">
                            <div class="select is-fullwidth is-small">
                                <select v-model="messageType">
                                    <option value='text'>文字</option>
                                    <option value='audio'>语音</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal" v-if="messageType === 'text'">
                <div class="field-label is-small">
                    <label class="label">文字消息内容</label>
                </div>
                <div class="field-body">
                    <div class="field is-narrow">
                        <div class="control">
                            <input v-model="messageText" class="input is-small" type="text" placeholder="文字消息内容">
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal" v-if="messageType === 'audio'">
                <div class="field-label is-small">
                    <label class="label">语音文件上传</label>
                </div>
                <div class="field-body">

                    <div class="field">
                        <div class="file is-info has-name">
                            <label class="file-label">
                                <input class="file-input" type="file" accept=".mp3" @change="fileChanged">
                                <span class="file-cta">
                                    <span class="file-icon">
                                        <i class="mdi mdi-music-note"></i>
                                    </span>
                                    <span class="file-label">
                                        请选择文件...
                                    </span>
                                </span>
                                <span class="file-name" v-if="selectedFile">
                                    {{ selectedFile.name }}
                                </span>
                            </label>
                        </div>
                    </div>

                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-small">
                    <label class="label">生效时间</label>
                </div>
                <div class="field-body">
                    <div class="field is-narrow is-flex">
                        <b-datepicker size="is-small" placeholder="点击选择日期..." v-model="fromDate" icon="mdi mdi-calendar">
                        </b-datepicker>

                        <b-timepicker size="is-small" placeholder="点击选择时间..." v-model="fromTime" icon="mdi mdi-clock">
                        </b-timepicker>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-small">
                    <label class="label">结束时间</label>
                </div>
                <div class="field-body">
                    <div class="field is-narrow is-flex">
                        <b-datepicker size="is-small" placeholder="点击选择日期..." v-model="toDate" icon="mdi mdi-calendar">
                        </b-datepicker>

                        <b-timepicker size="is-small" placeholder="点击选择时间..." v-model="toTime" icon="mdi mdi-clock">
                        </b-timepicker>
                    </div>
                </div>
            </div>

        </section>
        <footer class="modal-card-foot">
            <button class="button is-danger" @click="ok">确定</button>
            <button class="button" @click="$parent.close()">Cancel</button>
        </footer>
    </div>

</template>

<style scoped lang="less">
</style>

<script>    
export default { 
    data: function () {
        return {
            messageText: "",
            fromDate: new Date(),
            fromTime: new Date(),
            toDate: new Date(),
            toTime: new Date(),
            messageType: "text",
            selectedFile: undefined,
        }
    },
    mounted() {
    },

    methods: {
        fileChanged: function (_event) {
            let _input = _event.target;
            if (_input.files.length > 0) {
                this.selectedFile = _input.files[0];
            }
        },
        ok: function () {
            console.log("ok");
            var stime = this.fromDate.Format("yyyy-MM-dd HH:mm:ss");
            var etime = this.toDate.Format("yyyy-MM-dd HH:mm:ss");

            if (this.messageType === 'text' && this.messageText == "") {
                this.$globalvar.toastError(this, "消息内容不合法或为空");
                return;
            } else if (this.messageType === 'audio' && this.selectedFile === undefined) {
                this.$globalvar.toastError(this, "消息文件为空");
                return;
            }
            if (!stime) {
                this.$globalvar.toastError(this, "消息起始时间为空");
                return;
            }
            if (!etime) {
                this.$globalvar.toastError(this, "消息结束时间为空");
                return;
            }

            let form = {};
            form.type = this.messageType;
            if (this.messageType === 'audio') {
                form.file = this.selectedFile;
            } else {
                form.name = this.messageText;
            }
            form.startTime = stime;
            form.endTime = etime;

            let _this = this;
            this.$myaxios.post('messages/add', form).then(function (response) {
                _this.$globalvar.toastSuccess(_this, "添加消息成功");
                _this.$parent.close(); 
                let _tableParent = _this.$parent.$options.parent; 
                _tableParent.refreshTable(); 
            }).catch(function (error) {
                _this.$globalvar.toastError(_this, "删除数据异常", error);
                _this.$parent.close();
            });

        }
    }
}
</script>
 
