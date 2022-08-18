<template>
  <div>
    <h1 class="mb-0">Sign Up</h1>
    <p>Enter your email address and password to access admin panel.</p>
    <form class="mt-4" @submit.prevent="">
      <div class="form-group">
        <label for="first_name">First Name</label>
        <input type="text" class="form-control mb-0" id="first_name" placeholder="Your first name" v-model="firstname">
      </div>
      <div class="form-group">
        <label for="first_name">Last Name</label>
        <input type="text" class="form-control mb-0" id="first_name" placeholder="Your last name" v-model="lastname">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail2">Email address</label>
        <input type="email" class="form-control mb-0" id="exampleInputEmail2" placeholder="Enter email" v-model="email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control mb-0" id="exampleInputPassword1" placeholder="Password" v-model="password">
      </div>
      <div class="d-inline-block w-100">
        <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
          <input type="checkbox" class="custom-control-input" id="customCheck1">
          <label class="custom-control-label" for="customCheck1">I accept <a href="#">Terms and Conditions</a></label>
        </div>
        <!-- <button type="submit" class="btn btn-primary float-right" @click="$router.push({name: 'social.list'})">Sign Up</button> -->
        <button type="submit" class="btn btn-primary float-right" @click="Register">Sign Up</button>
      </div>
      <div class="sign-info">
        <span class="dark-color d-inline-block line-height-2">Already Have Account ? <router-link to="/auth/signIn">Log In</router-link></span>
        <ul class="iq-social-media">
          <li><a href="#"><i class="ri-facebook-box-line"></i></a></li>
          <li><a href="#"><i class="ri-twitter-line"></i></a></li>
          <li><a href="#"><i class="ri-instagram-line"></i></a></li>
        </ul>
      </div>
    </form>
  </div>
</template>
<script>
import { registerService } from '@/services/LoginService'
export default {
  name: 'SignUp',
  data: () => ({
    firstname: '',
    lastname: '',
    datenaissance: new Date(),
    email: '',
    password: '',
    phone: '0675121587',
    pays: 'MAROC',
    ville: 'CASA'
  }),
  methods: {
    Register: function () {
      registerService(this.firstname, this.lastname, this.datenaissance, this.email, this.password, this.phone, this.pays, this.ville).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
