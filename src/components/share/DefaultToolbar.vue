<template>
    <div class="toolbar-margin">
        <div class="toolbar-right">

            <select class="w3-select w3-border w3-small w3-padding-small toolbar-margin-right" style="width:6rem" v-model="pageCount" @change="pageCountChange">
                <option value="10">10条</option>
                <option value="20">20条</option>
            </select>

            <div class="toolbar-search w3-hide-small">
                <input ref="searchInput" class="w3-small w3-padding-small" type="text" style="width:12rem" :placeholder="placeholder?placeholder:''">
                <button class="w3-btn w3-small w3-padding-small color-primary toolbar-margin-right" style="width:4rem" v-on:click="searchTable">搜索</button>
            </div>

            <div class="toolbar-bottons">
                <button class="w3-btn w3-small w3-padding-small color-primary toolbar-margin-right" style="width:4rem" v-on:click="addItem">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    添加</button>
                <button class="w3-btn w3-small w3-padding-small w3-green" style="width:4rem" v-on:click="refreshTable">
                    <i class="fa fa-refresh w3-padding-tiny" aria-hidden="true"></i>刷新</button>
            </div>

        </div>

        <div class="title">
             {{title}} 
        </div>
    </div>
</template>

<style scoped lang="less">
.title{
    font-size: 20px;
    font-weight: 600;
}
.toolbar-margin {
  margin-bottom: 0.5rem;
}
.toolbar-right {
  display: flex;
  float: right;
  .toolbar-margin-right {
    margin-right: 0.3rem;
  }
  .toolbar-search {
    display: flex; 
  }
  .toolbar-bottons {
    display: flex; 
  }
}
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