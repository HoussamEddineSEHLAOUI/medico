<template>
    <div class="col-sm-12">
                     <div class="iq-card position-relative inner-page-bg bg-primary" style="height: 150px;">
                        <div class="inner-page-title">
                           <h3 class="text-white">Mes Dossiers</h3>
                           <p class="text-white"></p>
                        </div>
                     </div>
    </div>
    <DossieR v-for="(dossier , key) in ListDosier"
    :key="key"
    :id="dossier?.id"
    :ref_dossier="dossier?.ref_Dossier"
    :status="dossier?.status"
    :iliness_start_date="dossier?.iliness_start_date"
    ></DossieR>
</template>
<script>
import DossieR from '@/components/dossier/Dossier.vue'
import { getDossierService } from '@/services/DossierService'
export default {
  name: 'ListDossierView',
  components: {
    DossieR
  },
  methods: { },
  data () {
    return {
      ListDosier: []
    }
  },
  mounted () {
    getDossierService().then((response) => {
      this.ListDosier = [...response?.data]
      this.ListDosier.forEach((dos) => {
        console.log(dos.ref_Dossier)
      })
    })
  }

}
</script>
<style scoped>

</style>
