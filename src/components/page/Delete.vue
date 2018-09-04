<template>

    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">删除页面</p>
            <button class="delete" aria-label="close" @click="$parent.close()"></button>
        </header>
        <section class="modal-card-body">
            确定删除页面 {{name}} 吗?
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
    props: ["name", "label"],
    data: function () {
        return {
            itemData: {}
        }
    },
    mounted() {
    },

    methods: {
        ok: function () {
            let _label = this.label;

            console.log(_label);
            let _this = this;
            if (_label) {

                this.$myaxios.post('pages/' + _label + '/delete').then(function (response) {
                    _this.$globalvar.toastSuccess(_this, "删除页面成功");

                    _this.$parent.close();
                }).catch(function (error) {
                    _this.$globalvar.toastError(_this, "删除数据异常", error);
                    _this.$parent.close();
                });
            }


        }
    }
}
</script>
 
