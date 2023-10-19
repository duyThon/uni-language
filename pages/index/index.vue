<template>
  <div>
    <div class="main">
      <h1>home page</h1>
      <img src="https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg" style="width: 80%" alt="">
      <!-- <img src="https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg" alt=""> -->
    </div>
    <StickyInfoContact/>
    <nuxt-child />    
    <Footer/>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 2000px;
}
</style>
