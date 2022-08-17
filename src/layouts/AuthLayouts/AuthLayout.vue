<template>
  <div>
    <!-- <Loader /> -->
    <section class="sign-in-page">
      <div id="container-inside">
        <div id="circle-small"></div>
        <div id="circle-medium"></div>
        <div id="circle-large"></div>
        <div id="circle-xlarge"></div>
        <div id="circle-xxlarge"></div>
      </div>
      <b-container class="container p-0">
        <div class="row no-gutters">
          <!--  <div class="col-md-6 text-center pt-5">
            <div class="sign-in-detail text-white">
              <a class="sign-in-logo mb-5" href="#"><img src="@/assets/images/logo-full.png" class="img-fluid" alt="logo"></a>
              <VueSlickCarousel :arrows="true" :dots="true">
                <div class="item">
                  <img src="@/assets/images/login/1.png" class="img-fluid mb-4" alt="logo">
                  <h4 class="mb-1 text-white">Manage your orders</h4>
                  <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                </div>
                <div class="item">
                  <img src="@/assets/images/login/1.png" class="img-fluid mb-4" alt="logo">
                  <h4 class="mb-1 text-white">Manage your orders</h4>
                  <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                </div>
                <div class="item">
                  <img src="@/assets/images/login/1.png" class="img-fluid mb-4" alt="logo">
                  <h4 class="mb-1 text-white">Manage your orders</h4>
                  <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                </div>
              </VueSlickCarousel>
            </div>
          </div> -->
          <div class="bg-white pt-5 componentAut ">
            <div class="sign-in-from">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>
<script>
// import Loader from '@/components/loader/Loader'
import logo from '@/assets/images/logo-white.png'
// import { socialvue } from '@/config/pluginInit'
import bgImage from '@/assets/images/login/login-2.jpg'
export default {
  name: 'AuthLayout1',
  components: {
  },
  mounted () {
    // socialvue.index()
  },
  data () {
    return {
      slickOptions: {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear'
      },
      logo: logo,
      bgImageURL: bgImage
    }
  }
}
</script>
<style scoped>
.componentAut{
  height: 80vh;
  max-width: 550px;
  margin-top: 90px;
  margin-right: 40px;
  border-radius: 7px;
  position: absolute;
  right: 0;
}
</style>
