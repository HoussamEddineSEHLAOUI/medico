<template>
<div class="row" >
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
                                    <a  class="active btn">
                                    <i class="ri-lock-unlock-line text-primary"></i><span>Informations Patient</span>
                                    </a>
                                 </div>
                                 <div id="document" :class="[ 'wizard-step' , {  active : active_el == 1  }]" >
                                    <a  class="btn btn-default" >
                                    <i class="ri-user-fill text-danger"></i><span>Problème medical</span>
                                    </a>
                                 </div>
                                 <div id="bank" :class="[ 'wizard-step' , {  active : active_el == 2  }]">
                                    <a  class="btn btn-default">
                                    <i class="ri-camera-fill text-success"></i><span>Documents</span>
                                    </a>
                                 </div>
                                 <div id="confirm" :class="[ 'wizard-step' , {  active : active_el == 3  }]">
                                    <a  class="btn btn-default">
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
                                             <input  maxlength="100" type="text" required="required" class="form-control" :placeholder="lastName"  v-model="lastName" />
                                          </div>
                                          <div class="form-group col-md-6">
                                             <label class="control-label">Prénom</label>
                                             <input maxlength="100" type="text" required="required" class="form-control" :placeholder="firstName" v-model="firstName" />
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <label for="cDB" class="control-label">Date de naissance: </label>
                                             <input type="date" class="form-control" id="cDB" name="uname" :placeholder="dateNaissance" v-model="dateNaissance">
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <label for="emailid" class="control-label">Email Id: *</label>
                                             <input type="email" id="emailid" class="form-control" required="required" name="emailid" :placeholder="email" v-model="email">
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <label for="cpays" class="control-label">Pays</label>
                                             <input type="text" class="form-control" required="required" id="cpays" name="pwd" :placeholder="pays" v-model="pays">
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <label for="cville" class="control-label">Ville</label>
                                             <input type="text" class="form-control" id="cville" required="required" name="cpwd" :placeholder="ville" v-model="ville">
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <label for="ctele" class="control-label">Tél: *</label>
                                             <input type="text" class="form-control" required="required" id="ctele" name="cno" :placeholder="phone" v-model="phone">
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
                                             <label for="moredetail" class="control-label">Détailler votre problème: *</label>
                                             <textarea name="moredetail" class="form-control" id="moredetail" rows="5" required="required" v-model="moredetail"></textarea>
                                          </div>
                                          <div class="col-md-12 mb-3 form-group">
                                             <label for="symptomes" class="control-label">Principaux symptomes: *</label>
                                             <textarea name="symptomes" class="form-control" id="symptomes" rows="5" required="required" v-model="symptomes"></textarea>
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <div class="form-group">
                                                <label for="ilinessstartdate" class="control-label">Date de début du droblème: *</label>
                                                <input type="date" class="form-control" required="required" id="ilinessstartdate" name="url" placeholder="Company Url." v-model="ilinessstartdate">
                                             </div>
                                          </div>
                                          <div class="form-group col-md-6">
                                             <label for="type" class="control-label">Spécialité: *</label>
                                             <select class="form-control" id="type" name="type" @change="changeSpecialite($event)">
                                                <option v-for="(specialite , index) in specialites" :key="index" :value="specialite.type">{{specialite.type}}</option>
                                                <option selected="">Autre</option>
                                             </select>
                                          </div>
                                       </div>
                                       <button class="btn btn-primary nextBtn btn-lg pull-right" type="button" @click="storeDossier()" >Next</button>
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
                                          <img src="@/assets/images/check.png" alt="" class="avatar-succes-uplode" v-if="FileResultasAnalyses">
                                          <input type="file" class="form-control" name="pic" accept="image/*" id="file-input" @change="previewFileResultasAnalyses">
                                       </div>
                                       <div class="form-group">
                                          <label>Radiologie (IRM ,Scanner):</label>
                                          <img src="@/assets/images/check.png" alt="" class="avatar-succes-uplode" v-if="FileRadiologie">
                                          <input type="file" class="form-control" name="pic-2" accept="image/*" id="file-input" @change="previewFileRadiologie">
                                       </div>
                                       <div class="form-group">
                                          <label>Compte rendu médecins:</label>
                                          <img src="@/assets/images/check.png" alt="" class="avatar-succes-uplode" v-if="FileCompteRenduMedcins">
                                          <input type="file" class="form-control" name="pic-2" accept="image/*" id="file-input" @change="previewFileCompteRenduMedcins">
                                       </div>
                                    </div>
                                       <button class="btn btn-primary nextBtn btn-lg pull-right" type="button" @click="storDocument()" >Next</button>
                                       <button class="btn btn-secondary btn-lg pull-left" type="button" @click="activate(1)" >Previous</button>
                                    </div>
                                 </div>
                              </div>
                              <div v-if="active_el==3" class="row setup-content" id="cpnfirm-data">
                                 <div class="col-sm-12">
                                    <div class="col-md-12 p-0">
                                       <h3 class="mb-4 text-left">Votre demande a bien été enregistrée:</h3>
                                       <h3 class="mb-4 text-left">Ref Dossier : {{dossierRef}}</h3>
                                       <div class="row justify-content-center" >
                                          <div class="col-6"><lottie :option="require('@/assets/images/success.json')" id="lottie-succes" /></div>
                                       </div>
                                    </div>
                                    <button class="btn btn-primary nextBtn btn-lg pull-right" type="button" @click="ShowDossier()">Mes Dossier</button>
                                 </div>
                            </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
</template>
<script>
import specialites from '@/assets/Api/SpecialiteApi'
import Lottie from '@/components/lottie/Lottie'
import { getUser } from '@/services/LoginService'
import { storeDossierService } from '@/services/DossierService'
import { storeDocumentService } from '@/services/DocumentsService'
export default {
  name: 'NouveauDossierView',
  components: { Lottie },
  methods: {
    miniSidebar () {
      this.$emit('toggle')
    },
    activate: function (el) {
      this.active_el = el
    },
    storeDossier: function () {
      storeDossierService(this.symptomes, this.ilinessstartdate, this.moredetail, this.spcialite).then((response) => {
        this.idDossier = response?.dossier?.id
        this.dossierRef = response?.dossier?.ref_Dossier
        this.active_el = 2
      })
    },
    storDocument: function () {
      storeDocumentService(this.FileRadiologie, 'lettre du médecin', this.idDossier).then((response) => {
        this.active_el = 3
      })
    },
    ShowDossier: function () {
      this.$router.push('/listfiles')
    },
    previewFileResultasAnalyses (event) {
      this.FileResultasAnalyses = event.target.files[0]
    },
    previewFileRadiologie (event) {
      this.FileRadiologie = event.target.files[0]
      console.log(event.target.files[0])
    },
    previewFileCompteRenduMedcins (event) {
      this.FileCompteRenduMedcins = event.target.files[0]
    },
    changeSpecialite (event) {
      this.spcialite = event.target.value
    }
  },
  data () {
    return {
      active_el: 0,
      specialites: specialites,
      idDossier: 1,
      lastName: '',
      firstName: '',
      dateNaissance: '',
      email: '',
      pays: '',
      ville: '',
      phone: '',
      symptomes: '',
      ilinessstartdate: '',
      moredetail: '',
      spcialite: 'Autre',
      FileResultasAnalyses: null,
      FileRadiologie: null,
      FileCompteRenduMedcins: null,
      isConfirme: false,
      dossierRef: null
    }
  },
  mounted () {
    const response = getUser()
    this.lastName = response.lastName
    this.firstName = response.firstName
    this.dateNaissance = response.dateNaissance
    this.email = response.email
    this.pays = response.pays
    this.ville = response.ville
    this.phone = response.phone
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
.avatar-succes-uplode{
   width: 15px;
   height: 15px;
   position: absolute;
   right: 0;
}
.confirmbtn{
   width: 200px;
   margin-left: 40%;
   margin-right: 40%;
}
</style>
