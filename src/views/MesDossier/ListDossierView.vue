<template>
    <div class="col-sm-12">
                     <div class="iq-card position-relative inner-page-bg bg-primary" style="height: 150px;">
                        <div class="inner-page-title">
                           <h3 class="text-white">Mes Dossiers</h3>
                           <p class="text-white"></p>
                        </div>
                     </div>
    </div>
    <DossieR key="1" :number="0"></DossieR>
    <DossieR key="2" :number="1"></DossieR>
    <DossieR key="1" :number="2"></DossieR>
    <DossieR key="2" :number="3"></DossieR>
</template>
<script>
import DossieR from '@/components/dossier/Dossier.vue'
export default {
  name: 'ListDossierView',
  components: {
    DossieR
  },
  methods: { },
  data () {
    return {}
  }

}
</script>
<style scoped>

</style>
