<template>
  <router-view/>
</template>
<script>
import { socialvue } from './config/pluginInit'
export default {
  name: 'App',
  components: {
  },
  mounted () {
    socialvue.mainIndex()
  }
}
</script>
<style lang="scss">
  @import "@/assets/css/bootstrap.min.css";
  @import "@/assets/css/typography.css";
  @import "@/assets/css/style.css";
  @import "@/assets/css/responsive.css";
</style>
