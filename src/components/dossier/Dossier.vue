<template>
    <div class="col-sm-12">
                     <div class="iq-card">
                        <div class="iq-card-body">
                           <ul class="notification-list m-0 p-0">
                              <li class="d-flex align-items-center">
                                 <div class="user-img img-fluid"><img src="@/assets/images/folder.png" alt="story-img" class="avatar-40"></div>
                                 <div class="media-support-info ml-3">
                                    <h6>Dossier {{number}}</h6>
                                    <p class="mb-0">30  ago</p>
                                 </div>
                                 <div class="d-flex align-items-center">
                                    <!-- <a href="javascript:void();" class="mr-3 iq-notify iq-bg-primary rounded"><i class="ri-award-line"></i></a> -->
                                    <a href="javascript:void();" class="mr-3 w-100 iq-notify iq-bg-primary rounded">Status</a>
                                    <div class="iq-card-header-toolbar d-flex align-items-center">
                                       <div class="dropdown">
                                          <span class="dropdown-toggle " data-toggle="dropdown">
                                          <i class="ri-more-fill "></i>
                                          </span>
                                          <div class="dropdown-menu dropdown-menu-right" >
                                             <a class="dropdown-item" href="#"><i class="ri-eye-fill mr-2"></i>View</a>
                                             <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                             <a class="dropdown-item" href="#"><i class="ri-pencil-fill mr-2"></i>Edit</a>
                                             <a class="dropdown-item" href="#"><i class="ri-printer-fill mr-2"></i>Print</a>
                                             <a class="dropdown-item" href="#"><i class="ri-file-download-fill mr-2"></i>Download</a>
                                          </div>
                                       </div>
                                    </div>
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
  props: ['number'],
  methods: {
  },
  data () {
    return {
    }
  }

}
</script>
<style scoped>

</style>
