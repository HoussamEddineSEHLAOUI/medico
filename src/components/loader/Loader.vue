<template>
  <!-- loader Start -->
  <div id="loading" :style="style">
    <div id="loading-center">
    </div>
  </div>
  <!-- loader END -->
</template>
<script>
import lightLogo from '@/assets/images/loader.png'
import darkLogo from '@/assets/images/logo-white.png'
export default {
  name: 'LoadeR',
  props: {
    dark: { type: Boolean, default: false }
  },
  mounted () {
    this.style = `background: #fff url(${this.logo}) no-repeat scroll center center;`
  },
  data () {
    return {
      logo: lightLogo,
      darkLogo: darkLogo,
      style: `background: #fff url(${darkLogo}) no-repeat scroll center center;background-size:10%;`
    }
  }
}
</script>
