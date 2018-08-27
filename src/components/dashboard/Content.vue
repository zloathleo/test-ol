<template>
  <nav class="level">
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Tweets</p>
        <p class="title">{{commondata.d1}}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Following</p>
        <p class="title">{{commondata.d2}}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Followers</p>
        <p class="title">{{commondata.d3}}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Likes</p>
        <p class="title">{{commondata.d4}}</p>
      </div>
    </div>
  </nav>
</template>

<style>
</style>

<script> 
export default {
  components: {
  },
  data() {
    return {
      commondata: {
        d1: "-",
        d2: "-",
        d3: "-",
        d4: "-",
      },
      data: {},
    }
  },
  mounted() {
    let _this = this;

    let promise1 = new Promise(function (resolve, reject) {
      _this.$myaxios.get('/dashboard-commondata').then(function (response) {
        _this.commondata = response.data;
        resolve(response);
      }).catch(function (err) {
        console.error(err);
        reject(err);
      });
    });

    let promise2 = new Promise(function (resolve, reject) {
      _this.$myaxios.get('/dashboard-commondata').then(function (response) {
        _this.data = response.data;
        resolve(response);
      }).catch(function (err) {
        console.error(err);
        reject(err);
      });
    });

    this.$globalEventHub.$emit('appLoading', true);
    Promise.all([promise1, promise2]).finally(function (dd) {
      _this.$globalEventHub.$emit('appLoading', false);
    });

  },
  methods: {

  }
}
</script>
