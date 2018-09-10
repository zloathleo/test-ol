<template>

  <div style="height:100%">
    <nav class="w3-sidenav w3-light-grey w3-animate-left sidenav" v-bind:class="[ sidenavOpen ? 'w3-show': 'w3-hide' ]" style="z-index:4">
      <div class="w3-container">
        <h5>Dashboard</h5>
      </div>
      <a href="#" class="w3-padding color-primary">
        <i class="fa fa-users"></i>  Overview</a>
      <a href="#" class="w3-padding">
        <i class="fa fa-eye"></i>  Views</a>
      <a href="#" class="w3-padding">
        <i class="fa fa-users"></i>  Traffic</a>
      <a href="#" class="w3-padding">
        <i class="fa fa-bullseye"></i>  Geo</a>
      <a href="#" class="w3-padding">
        <i class="fa fa-diamond"></i>  Orders</a>
      <a href="#" class="w3-padding">
        <i class="fa fa-bell"></i>  News</a>
      <a href="#" class="w3-padding">
        <i class="fa fa-bank"></i>  General</a>
      <a href="#" class="w3-padding">
        <i class="fa fa-history"></i>  History</a>
      <a href="#" class="w3-padding">
        <i class="fa fa-cog"></i>  Settings</a><br><br>
    </nav>

    <header class="w3-container w3-top color-primary" style="z-index:4">
      <ul class="w3-navbar">
        <li>
          <a class="w3-padding-16 w3-hover-blue" href="#" @click="openSidenav">
            <i class="topnav-icons fa fa-bars"></i>
          </a>
        </li>
        <li>
          <a class="w3-padding-16 w3-hover-blue" href="#">Link 1</a>
        </li>
        <li>
          <a class="w3-padding-16 w3-hover-blue" href="#">Link 2</a>
        </li>
        <li>
          <a class="w3-padding-16 w3-hover-blue" href="#">Link 3</a>
        </li>
        <li class="w3-right">
          <a class="w3-padding-16 w3-hover-blue" href="#">Link 3</a>
        </li>
      </ul>
    </header>

    <!-- Page content -->
    <div class="w3-container page-content">
      <router-view></router-view>
    </div>

    <footer class="w3-container w3-bottom w3-light-grey">
      <p class="w3-small w3-hide-small">Footer information goes here</p>
    </footer>

    <div class="w3-overlay" v-bind:class="{ 'w3-show': sidenavOpen }" @click="closeSidenav" style="cursor:pointer"></div>

  </div>
</template>


 
<style scoped lang="less">
.page-content {
  padding-top: 64px;
  padding-bottom: 64px; //desk 有foot
  overflow: auto;
  height: 100%;
}
.sidenav {
  padding: 64px 8px 0px 8px;
}

@media screen and (max-width: 600px) {
  .page-contetn {
    padding-bottom: 1rem;
  }
  .w3-navbar li:not(.w3-opennav) {
    float: left;
    width: auto !important;
  }
  .w3-navbar li.w3-right {
    float: right;
    float: auto !important;
  }
}
</style>


<script> 
import Toolbar from './Toolbar.vue';
import Drawer from './Drawer.vue';
// import Footer from './Footer.vue';
export default {
  components: { Toolbar, Drawer },

  data() {
    return {
      sidenavOpen: false,//sidenav
    }
  },
  methods: {
    closeSidenav: function () {
      this.sidenavOpen = false;
    },
    openSidenav: function () {
      this.sidenavOpen = true;
    },
  }
}
</script>