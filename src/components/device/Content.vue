<template>
  <div>
    <div class="block">

      <div class="block-header-end buttons">
        <button class="button is-small is-info">
          <span class="icon">
            <i class="mdi mdi-plus"></i>
          </span>
          <span>添加</span>
        </button>
        <button class="button is-small is-success">
          <span class="icon">
            <i class="mdi mdi-refresh"></i>
          </span>
          <span>刷新</span>
        </button>
      </div>
      <div class="block-title">管理</div>
    </div>

    <div class="column">
      <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">广告机名称</th>
            <th class="text-center">品牌</th>
            <th class="text-center">型号</th>
            <th class="text-center">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData">
            <td class="text-center">{{index + 1}}</td>
            <td class="text-center">{{item.name}}</td>
            <td class="text-center">{{item.brand}}</td>
            <td class="text-center">{{item.model}}</td>
            <td class="text-center">
              <button class="btn btn-xs btn-primary" type="button" v-on:click="editItem(item)">修改</button>
              <button class="btn btn-xs btn-danger" type="button" v-on:click="deleteItem(item)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- <b-table :data="data" :striped="isStriped" :hoverable="isHoverable" :loading="isLoading" :mobile-cards="hasMobileCards">

      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" numeric>
          {{ props.row.id }}
        </b-table-column>

        <b-table-column field="first_name" label="First Name">
          {{ props.row.first_name }}
        </b-table-column>

        <b-table-column field="last_name" label="Last Name">
          {{ props.row.last_name }}
        </b-table-column>

        <b-table-column field="date" label="Date" centered>
          <span class="tag is-success">
            {{ new Date(props.row.date).toLocaleDateString() }}
          </span>
        </b-table-column>

        <b-table-column label="Gender">
          <b-icon pack="fas" :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
          </b-icon>
          {{ props.row.gender }}
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large">
              </b-icon>
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table> -->

    <b-pagination :total="total" :current.sync="current" size="is-small" per-page="10">
    </b-pagination>

  </div>
</template>

<style scoped lang="less">
</style>

<script> 
export default {
  components: {
  },
  data() {
    return {
      tableData: [],
      total: 0,
      current: 1,
    }
  },
  mounted() {
    let _this = this;

    this.$myaxios.get('/devices').then(function (response) {
      let _resData = response.data;
      _this.tableData = _resData.rows;
      _this.total = _resData.total;
    }).catch(function (err) {
      _this.$globalvar.toastError(_this, "获取表格数据异常", err);
    });


  },
  methods: {
    editItem(item) {

    },
    deleteItem(item) {

    }
  }
}
</script>