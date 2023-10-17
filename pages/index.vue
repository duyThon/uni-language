<template>
  <div>
    <MainNavBar></MainNavBar>
    <div class="main">
        <nuxt-child />
    </div>
    <StickyInfoContact/>
    <Footer/>
  </div>
</template>

<script>
import MainNavBar from "@/components/common/MainNavBar.vue"
import StickyInfoContact from "@/components/common/StickyInfoContact.vue"
import Footer from "@/components/common/Footer.vue"

export default {
    
  components: {
    MainNavBar,
    StickyInfoContact,
    Footer,
  }
}
</script>

<style>

</style>