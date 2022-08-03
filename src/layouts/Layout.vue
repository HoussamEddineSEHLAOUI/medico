<template>
  <div>
    <!-- <LoadeR /> -->
    <div class="wrapper">
      <!-- Sidebar  -->
      <SideBar @toggle="sidebarMini" ></SideBar>
      <!-- TOP Nav Bar -->
      <NavBar @toggle="sidebarMini" ></NavBar>
       <!-- Right Nav Bar -->
      <RightSideBar toggleClass="top-50 setting-toggle iq-card">
        <i class="ri-sound-module-fill font-size-18 text-primary" />
      </RightSideBar>

      <!-- page content -->
      <div id="content-page" class="content-page">
        <div class="container">
          <router-view/>
        </div>
      </div>
    </div>
    <FooterStyle1>
      <template v-slot:left>
        <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
        <li class="list-inline-item"><a href="#">Terms of Use</a></li>
      </template>
      <template v-slot:right>
        Copyright 2020 <a href="#">SocialV</a> All Rights Reserved.
      </template>
    </FooterStyle1>
  </div>
</template>

<script>
// import LoadeR from './loader/Loader'
import { socialvue } from '../config/pluginInit'
import NavBar from '../components/navbar/NavBar.vue'
import SideBar from '../components/sidebar/SideBar.vue'
import RightSideBar from '../components/rightsidebar/RightSideBar'
import FooterStyle1 from '../components/footer/FooterStyle1'
export default {
  name: 'LayouT',
  components: {
    NavBar,
    SideBar,
    RightSideBar,
    FooterStyle1
  },
  methods: {
    sidebarMini () {
      socialvue.triggerSet()
    },
    logout () {
      localStorage.removeItem('user')
      localStorage.removeItem('access_token')
      this.$router.push({ name: 'auth1.sign-in1' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
