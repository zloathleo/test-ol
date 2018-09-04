<template>
    <div class="block">
        <div class="block-header-end">

            <div class="table-count">
                <div class="select is-small">
                    <select v-model="pageCount" @change="pageCountChange">
                        <option value="10">10条</option>
                        <option value="20">20条</option>
                    </select>
                </div>
            </div>

            <div class="field table-search has-addons">
                <div class="control">
                    <input ref="searchInput" class="input is-small" type="text" :placeholder="placeholder?placeholder:''">
                </div>
                <div class="control">
                    <a class="button is-info is-small" @click="searchTable">
                        搜索
                    </a>
                </div>
            </div>

            <button class="button is-small is-primary" @click="addItem">
                <span class="icon">
                    <i class="mdi mdi-plus"></i>
                </span>
                <span>添加</span>
            </button>
            <button class="button is-small is-success" @click="refreshTable">
                <span class="icon">
                    <i class="mdi mdi-refresh"></i>
                </span>
                <span>刷新</span>
            </button>

        </div>

        <div class="block-header-begin">
            <div class="block-title">{{title}}</div>
        </div>
    </div>
</template>

<style scoped lang="less">
</style>

<script>  
export default {
    props: ['title', 'placeholder'],
    data() {
        return {
            pageCount: 10,
        }
    },
    mounted() {

    },
    methods: {
        addItem() {
            this.$emit('addItem');
        },
        refreshTable() {
            this.$emit('refreshTable');
        },
        pageCountChange(_event) {
            this.$emit('pageCountChange', this.pageCount);
        },
        searchTable() {
            let _input = this.$refs.searchInput;
            this.$emit('searchTable', _input.value);
        }
    }
}
</script>