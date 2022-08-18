<template>
    <div class="col-sm-12">
                     <div class="iq-card">
                        <div class="iq-card-body">
                           <ul class="notification-list m-0 p-0">
                              <li class="d-flex align-items-center">
                                 <div class="user-img img-fluid"><i class="fa fa-folder iq-bg-primary icon-class"></i></div>
                                 <div class="media-support-info ml-3">
                                    <h6>Dossier : {{ref_dossier}}</h6>
                                    <p class="mb-0">{{iliness_start_date}}</p>
                                 </div>
                                 <div :class="['d-flex','align-items-center','clasStatus',getClassStatus(status)]">
                                    <a href="javascript:void();" class="w-100 iq-notify ">Status</a>
                                 </div>
                                 <div class="d-flex align-items-center ml-5">
                                    <router-link to="/Details" class="w-100 iq-notify "><i class="las la-eye iconclass"></i></router-link>
                                    <a href="javascript:void();" class="w-100 iq-notify "><i class="las la-pen iconclass"></i></a>
                                    <a href="javascript:void();" class="w-100 iq-notify "><i class="las la-trash-alt iconclass"></i></a>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                    </div>
</template>
<script>

export default {
  name: 'DossieR',
  components: {},
  props: ['id', 'ref_dossier', 'status', 'iliness_start_date'],
  methods: {
    getClassStatus (status) {
      switch (status) {
        case 'new':
          return 'classStatusNew'
        case 'pending':
          return 'classStatusPending'
        case 'completed':
          return 'classStatusPending'
        case 'rdv':
          return 'classStatusRDV'
        default:
          return 'classStatusNew'
      }
    }
  },
  data () {
    return {
    }
  }

}
</script>
<style scoped>
.avatar-dossier{
   width: 20px;
   height: 20px;
}
.classStatusNew{
   background-color: aqua;
}
.classStatusPending{
   background-color: rgba(252, 184, 82, 0.945);
}
.classStatusCompleted{
   background-color: rgb(0, 255, 42);
}
.classStatusRDV{
   background-color: rgb(219, 55, 206);
}
.clasStatus{
 padding: 6px;
 border-radius: 15px;
 width: 80px;
}
.icon-class{
   font-size: 40px;
}
.iconclass{
   font-size: 25px;
   margin-right: 10px;
}
</style>
