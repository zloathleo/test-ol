<template>
  <div>
    <DefaultToolbar title="管理" @addItem="addItem" @refreshTable="refreshTable" @pageCountChange="pageCountChange" />

    <div class="column">
      <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">页面名称</th>
            <th class="text-center">页面修改时间</th>
            <th class="text-center" style="width: 20%;">更新</th>
            <th class="text-center">操作</th>
            <th class="text-center" style="width: 20%;">激活</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData">
            <td class="text-center">{{index + 1}}</td>
            <td class="text-center font-w600">{{item.name}}</td>
            <td class="text-center">{{$globalvar.parseDateTime(item.updateTime)}}</td>
            <td class="text-center">
              <button class="button is-small is-primary" type="button" @click="editItem(item)">更新布局 </button>
            </td>
            <td class="text-center">
              <a v-if="item.label" class="button is-small is-primary" :href="'client.html?page=' + item.label" target="_blank">预览
              </a>
              <button class="button is-small is-danger" type="button" @click="deleteItem(item)">删除 </button>
            </td>
            <td class="text-center">
              <button v-if="item.active != true" class="button is-small is-primary" type="button" @click="publicItem(item)">点击激活 </button>
              <span v-if="item.active == true" class="tag is-success">已激活</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <b-pagination :total="total" :current.sync="current" size="is-small" :per-page="perPage">
    </b-pagination>

  </div>
</template>

<style scoped lang="less">
</style>

<script> 
import DefaultToolbar from '../share/DefaultToolbar.vue';
import ModalDelete from './Delete.vue';
import ModalAdd from './Add.vue';
export default {
  components: {
    DefaultToolbar
  },
  data() {
    return {
      tableData: [],
      total: 0,
      current: 1,
      perPage: 10,
    }
  },
  mounted() {
    this.refreshTable();
  },
  methods: {
    refreshTable() {
      let _this = this;
      this.$myaxios.get('/pages').then(function (response) {
        let _resData = response.data;
        _this.tableData = _resData.rows;
        _this.total = _resData.total;
      }).catch(function (err) {
        _this.$globalvar.toastError(_this, "获取表格数据异常", err);
      });
    },
    pageCountChange(_pageCount) {
      this.perPage = _pageCount;
    },
    addItem() {
      // this.$modal.open({
      //   parent: this, 
      //   component: ModalAdd,
      //   hasModalCard: true
      // })
    },
    editItem(item) {

    },
    deleteItem(item) {
      this.$modal.open({
        parent: this,
        props: item,
        component: ModalDelete,
        hasModalCard: true
      });
    },
    publicItem(item) {

    }
  }
}
</script>