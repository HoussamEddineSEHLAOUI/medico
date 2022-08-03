<template>
  <div class="home">
    <Layout msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Layout from '@/layouts/Layout.vue'

export default {
  name: 'HomeView',
  components: {
    Layout
  }
}
</script>
