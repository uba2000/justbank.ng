<template>
  <footer class="kolloBox-footer pb-4 mb-5">
    <b-container>
      <footer-nav />
      <footer-download />
      <footer-contact />
      <footer-conditions />
    </b-container>
  </footer>
</template>

<script>
import FooterNav from "~/components/Footer/FooterNav.vue"
import FooterContact from '~/components/Footer/FooterContact.vue'
import FooterDownload from '~/components/Footer/FooterDownload.vue'
import FooterConditions from '../Footer/FooterConditions.vue'

  export default {
	components: { FooterNav, FooterDownload, FooterContact,FooterConditions },
    
  }
</script>

<style lang="scss" scoped>

</style>