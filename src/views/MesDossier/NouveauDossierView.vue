<template>
<div class="row">
                  <div class="col-sm-12">
                     <div class="iq-card position-relative inner-page-bg bg-primary" style="height: 150px;">
                        <div class="inner-page-title">
                           <h3 class="text-white">Nouveau Dossier</h3>
                           <p class="text-white"></p>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-12 col-lg-12">
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title"></h4>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <div class="stepwizard mt-4">
                              <div class="stepwizard-row setup-panel">
                                 <div id="user" :class="[ 'wizard-step' , {  active : active_el == 0  }]">
                                    <a @click="activate(0)" class="active btn">
                                    <i class="ri-lock-unlock-line text-primary"></i><span>Informations Patient</span>
                                    </a>
                                 </div>
                                 <div id="document" :class="[ 'wizard-step' , {  active : active_el == 1  }]" >
                                    <a @click="activate(1)"  class="btn btn-default" >
                                    <i class="ri-user-fill text-danger"></i><span>Problème medical</span>
                                    </a>
                                 </div>
                                 <div id="bank" :class="[ 'wizard-step' , {  active : active_el == 2  }]">
                                    <a @click="activate(2)"  class="btn btn-default">
                                    <i class="ri-camera-fill text-success"></i><span>Documents</span>
                                    </a>
                                 </div>
                                 <div id="confirm" :class="[ 'wizard-step' , {  active : active_el == 3  }]">
                                    <a @click="activate(3)"  class="btn btn-default">
                                    <i class="ri-check-fill text-warning"></i><span>Confirm</span>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <form class="form">
                              <div v-if="active_el==0" class="row setup-content"  id="user-detail">
                                 <div class="col-sm-12">
                                    <div class="col-md-12 p-0">
                                       <h3 class="mb-4">Informations Patient:</h3>
                                       <div class="row">
                                          <div class="form-group col-md-6">
                                             <label class="control-label">Nom</label>
                                             <input  maxlength="100" type="text" required="required" class="form-control" placeholder="Enter Votre Nom"  />
                                          </div>
                                          <div class="form-group col-md-6">
                                             <label class="control-label">Prénom</label>
                                             <input maxlength="100" type="text" required="required" class="form-control" placeholder="Enter Votre Prénom" />
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <label for="uname" class="control-label">Date de naissance: </label>
                                             <input type="text" class="form-control" id="uname" name="uname" placeholder="Enter User Name">
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <label for="emailid" class="control-label">Email Id: *</label>
                                             <input type="email" id="emailid" class="form-control" required="required" name="emailid" placeholder="Email ID">
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <label for="pwd" class="control-label">Pays</label>
                                             <input type="password" class="form-control" required="required" id="pwd" name="pwd" placeholder="Password">
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <label for="cpwd" class="control-label">Ville</label>
                                             <input type="password" class="form-control" id="cpwd" required="required" name="cpwd" placeholder="Confirm Password">
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <label for="cno" class="control-label">Tél: *</label>
                                             <input type="text" class="form-control" required="required" id="cno" name="cno" placeholder="Contact Number">
                                          </div>
                                          <div class="col-md-12 mb-3 form-group">
                                             <label for="address" class="control-label">Address: *</label>
                                             <textarea name="address" class="form-control" id="address" rows="5" required="required"></textarea>
                                          </div>
                                       </div>
                                       <button class="btn btn-primary nextBtn btn-lg pull-right" type="button" @click="activate(1)" >Next</button>
                                    </div>
                                 </div>
                              </div>
                              <div v-if="active_el==1" class="row setup-content" id="document-detail">
                                 <div class="col-sm-12">
                                    <div class="col-md-12 p-0">
                                       <h3 class="mb-4">Problème Médical:</h3>
                                       <div class="row">
                                          <div class="col-md-12 mb-3 form-group">
                                             <label for="address" class="control-label">Détailler votre problème: *</label>
                                             <textarea name="address" class="form-control" id="address" rows="5" required="required"></textarea>
                                          </div>
                                          <div class="col-md-12 mb-3 form-group">
                                             <label for="address" class="control-label">Principaux symptomes: *</label>
                                             <textarea name="address" class="form-control" id="address" rows="5" required="required"></textarea>
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <div class="form-group">
                                                <label for="url" class="control-label">Date de début du droblème: *</label>
                                                <input type="date" class="form-control" required="required" id="url" name="url" placeholder="Company Url.">
                                             </div>
                                          </div>
                                          <div class="form-group col-md-6">
                                             <label for="type" class="control-label">Spécialité: *</label>
                                             <select class="form-control" id="type" name="type">
                                                <option>California</option>
                                                <option>Florida</option>
                                                <option selected="">Autre</option>
                                             </select>
                                          </div>
                                       </div>
                                       <button class="btn btn-primary nextBtn btn-lg pull-right" type="button" @click="activate(2)" >Next</button>
                                       <button class="btn btn-secondary  btn-lg pull-left" type="button" @click="activate(0)" >Previous</button>
                                    </div>
                                 </div>
                              </div>
                              <div v-if="active_el==2" class="row setup-content" id="bank-detail">
                                 <div class="col-sm-12">
                                    <div class="col-md-12 p-0">
                                       <h3 class="mb-4">Documents:</h3>
                                       <div class="form-card text-left">
                                       <div class="form-group">
                                          <label>Résultas Analyses:</label>
                                          <input type="file" class="form-control" name="pic" accept="image/*" id="file-input">
                                       </div>
                                       <div class="form-group">
                                          <label>Radiologie (IRM ,Scanner):</label>
                                          <input type="file" class="form-control" name="pic-2" accept="image/*" id="file-input">
                                       </div>
                                       <div class="form-group">
                                          <label>Compte rendu médecins:</label>
                                          <input type="file" class="form-control" name="pic-2" accept="image/*" id="file-input">
                                       </div>
                                    </div>
                                       <button class="btn btn-primary nextBtn btn-lg pull-right" type="button" @click="activate(3)" >Next</button>
                                       <button class="btn btn-secondary btn-lg pull-left" type="button" @click="activate(1)" >Previous</button>
                                    </div>
                                 </div>
                              </div>
                              <div v-if="active_el==3" class="row setup-content" id="cpnfirm-data">
                                 <div class="col-sm-12">
                                    <div class="col-md-12 p-0">
                                       <h3 class="mb-4 text-left">Finish:</h3>
                                       <div class="row justify-content-center">
                                          <div class="col-6"><lottie :option="require('@/assets/images/success.json')" id="lottie-succes" /></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
</template>
<script>
import Lottie from '@/components/lottie/Lottie'
export default {
  name: 'NouveauDossierView',
  components: { Lottie },
  methods: {
    miniSidebar () {
      this.$emit('toggle')
    },
    activate: function (el) {
      this.active_el = el
    }
  },
  data () {
    return {
      active_el: 3
    }
  }

}
</script>
<style scoped>
#file-input::-webkit-file-upload-button {
   background-color: #e9ecef;
   margin-top:1px;
   border: 1px solid #ced4da;
}
#file-input{
   padding-left: 0;
   padding-top: 0;
   color: #495057;
}
</style>
