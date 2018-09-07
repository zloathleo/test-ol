<template>
  <div>
    <DefaultToolbar title="管理" @addItem="addItem" @refreshTable="refreshTable" @searchTable="searchTable" @pageCountChange="pageCountChange" />

    <table class="w3-table w3-striped w3-bordered w3-border">
      <thead>
        <tr class="w3-light-grey">
          <th class="text-center">#</th>
          <th class="text-center">消息类型</th>
          <th class="text-center">消息内容</th>
          <th class="text-center">生效时间</th>
          <th class="text-center">结束时间</th>
          <th class="text-center">状态</th>
          <th class="text-center">操作</th>
        </tr>
      </thead>
      <tr v-for="(item, index) in currentPageData">
        <td class="text-center">{{index + 1}}</td>
        <td class="text-center">{{item.type === 'audio' ? '语音' :'文字'}}</td>
        <td class="text-center">{{item.name}}</td>
        <td class="text-center">{{$globalvar.parseDateTime(item.startTime)}}</td>
        <td class="text-center">{{$globalvar.parseDateTime(item.endTime)}}</td>
        <td class="text-center">{{$globalvar.parseMsgState(item.status)}}</td>
        <td class="text-center">
          <button class="w3-btn w3-small w3-padding-small w3-indigo" v-on:click="editItem(item)">编辑</button>
          <button class="w3-btn w3-small w3-padding-small w3-red" v-on:click="deleteItem(item)">删除</button>
        </td>
      </tr>
    </table>

    <Pagination :total="total" :current.sync="currentPage"  :per-page="perPage">
    </Pagination>

  </div>
</template>

<style scoped lang="less">
</style>

<script> 
import DefaultToolbar from '../share/DefaultToolbar.vue';
import Pagination from '../share/Pagination.vue';
export default {
  components: {
    DefaultToolbar, Pagination
  },
  data() {
    return {
      tableData: [],
      searchKey: undefined,
      total: 0,
      currentPage: 1,
      perPage: 10,
    }
  },
  computed: {
    currentPageData: function () {
      if (this.tableData.length === 0) {
        return [];
      }
      if (this.searchKey && this.searchKey.length > 1) {
        //search filte
        let _searchKey = this.searchKey;
        let _cpd = this.tableData.filter(function (item) {
          if (item.name.indexOf(_searchKey) >= 0) {
            return true;
          } else {
            return false;
          }
        });
        this.total = _cpd.length;
        return _cpd;
      } else {
        let totalCount = Math.floor(this.tableData.length / this.perPage);
        let from = (this.currentPage - 1) * this.perPage;
        let to = this.currentPage * this.perPage;
        if (to >= this.tableData.length) {
          to = this.tableData.length;
        }
        let _cpd = this.tableData.slice(from, to);
        this.total = this.tableData.length;
        return _cpd;
      }
    }
  },
  mounted() {
    this.refreshTable();
  },
  methods: {
    refreshTable() {
      let _this = this;
      this.$myaxios.get('/messages').then(function (response) {
        let _resData = response.data;
        _this.tableData = _resData.rows;
        _this.total = _resData.total;
      }).catch(function (err) {
        _this.$globalvar.toastError(_this, "获取表格数据异常", err);
      });
    },
    //搜索
    searchTable(value) {
      this.searchKey = value;
    },
    //每页显示数量
    pageCountChange(_pageCount) {
      this.perPage = _pageCount;
    },
    //添加
    addItem() {
      this.$modal.open({
        parent: this,
        component: ModalAdd,
        hasModalCard: true
      });
    },
    //编辑
    editItem(item) {

    },
    //删除
    deleteItem(item) {
      this.$modal.open({
        parent: this,
        props: item,
        component: ModalDelete,
        hasModalCard: true
      });
    },
  }
}
</script>