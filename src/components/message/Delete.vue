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

        }
    }
}
</script>
 
