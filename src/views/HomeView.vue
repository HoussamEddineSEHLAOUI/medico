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
      <div class="p-0 m-0 pageHome">
        <div class="row nav-bar">
          <p class="signInlbl btn btn-primary d-block mt-3" @click="SignIn">Se connecter</p>
          <p class="signUplbll btn d-block mt-3" @click="SignUp">S'inscrire</p>
        </div>
        <div class="containerTxt">
          <h1 class="medioc">Medico</h1>
          <h1 class="medic-citation">Prendre soin de sa santé ne change pas l'issue, mais le trajet</h1>
          <p class="detail-medico">Lorem ipsum dolor sit amet, consectetur
            <br/>adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi.
            <br/>Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
            <br/>adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi.
            <br/>Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
            <br/>adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi.
            <br/>Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
          </p>
          <button class="btnSignIn" @click="SignIn">S'inscrire</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  components: {
  },
  mounted () {
    // socialvue.index()
  },
  data () {
    return {
    }
  },
  methods: {
    SignIn: function () {
      this.$router.push('/auth/signIn')
    },
    SignUp: function () {
      this.$router.push('/auth/signUp')
    }
  }
}
</script>
<style scoped>
.pageHome{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.nav-bar{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px;
}
.signUplbll{
  color: rgb(255, 255, 255);
}
.containerTxt{
  position: absolute;
  right: 0;
  margin-top: 150px;
  margin-right: 100px;
}
.medioc{
  color: rgb(225, 245, 255);
  font-size: 85px;
}
.medic-citation{
  font-size: 35px;
  width: 480px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
}
.detail-medico{
  color: rgba(255, 255, 255, 0.562);
  font-size: 18px;
  width: 800px;
}
.btnSignIn{
  width: 350px;
  height: 45px;
  border: none;
  border-color: #9ad5ff;
  border-radius: 20px;
  background-color: #31a9ff;
  color: #ffff;
  font-size: 18px;
  margin-top: 10px;
}

</style>
