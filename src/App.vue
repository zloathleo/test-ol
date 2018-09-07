<template>
  <div style="height:100%">
    <Loading/>
    <router-view />
  </div>
</template> 
 
<script>   
import Loading from './components/framework/Loading.vue';
export default {
  components: { Loading },

  beforeMount() {

  },
}
</script>