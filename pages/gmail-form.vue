<template>
  <div class="form-container">
    <img style="width:200px" src="@/assets/logo/logo-uni-ngang-2.png" alt="">
    {{this.res}}
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      res: {},
    }
  },
  created() {
    // this.callAPI();
  },

  async fetch() {
    this.res = await fetch(
      "http://localhost:8888/news/658309dc840fe90512e79ce1"
    ).then(
      res => res.json()
      );

  },

  // methods: {
  //   async callAPI() {
  //     try {
  //       const res = await axios
  //     }
  //   }
  // }
}
</script>

<style>

</style>