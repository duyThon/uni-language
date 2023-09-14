<template>
  <div>
    <h1>Home Page</h1>
    <MainNavBar></MainNavBar>
    <PartnersCarousel></PartnersCarousel>
  </div>
</template>

<script>
import MainNavBar from "../components/common/MainNavBar.vue"
import PartnersCarousel from "../components/common/PartnersCarousel.vue"
export default {
  data() {
    return {

    }
  },
  components: {
    MainNavBar,
    PartnersCarousel
  }
}
</script>
