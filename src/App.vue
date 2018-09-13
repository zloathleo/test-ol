<template>
  <div style="height:100%;background-color:#fafafa;">
    <Loading/>
    <router-view />
  </div>
</template> 
 
<script>   
import Loading from './components/framework/Loading.vue';
export default {
  components: { Loading },
}
</script>