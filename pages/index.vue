<template>
  <div>
    <MainNavBar></MainNavBar>
    <main>
        <nuxt-child />
    </main>
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
main {
  margin-top: 80px;
}

</style>