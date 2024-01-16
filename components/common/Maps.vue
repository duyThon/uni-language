<template>
  <div class="maps">
    <h2>ĐỊA CHỈ CỦA LANGUAGE HOUSE SƠN LA</h2>
    <iframe
      id="uni-maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.9494387986199!2d103.90909169878066!3d21.339952313602588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31328b3423500775%3A0x89e9f230d6d31bdc!2zNDU3IENodSBWxINuIFRo4buLbmgsIFAuIENoaeG7gW5nIEzhu4EsIFPGoW4gTGEsIDM2MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1699424510932!5m2!1svi!2s"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
export default {
  mounted() {
    this.runAnimation();
  },

  methods: {
    runAnimation() {
      const gsap = this.$gsap;
      gsap.to('#uni-maps', {scrollTrigger:'#uni-maps', scale: 1, opacity: 1, duration: .5})
    }
  }

};
</script>

<style>
#uni-maps {
  width: 960px;
  height: 450px;
  opacity: 0;
  transform: scale(.5); 
}

.maps h2 {
  font-size: 34px;
  font-style: italic;
  color: #fff;
  padding-top: 30px;
  text-shadow: 0 0 3px #a20000, 0 0 5px #000000;
}

.maps {
    text-align: center;
    padding: 50px;
    margin-bottom: 80px;
    box-shadow: 0px 8px 8px rgb(0 0 0 / 0.45);
    -webkit-box-shadow: 0px 8px 8px rgb(0 0 0 / 0.45);
    -moz-box-shadow: 0px 8px 8px rgb(0 0 0 / 0.45);
    background-image: url("~assets/pics/maps/item1.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

@media (max-width: 1024px) {
  #uni-maps {
    width: 90vw;
    height: 300px;
    padding: 0 10px;
  }

  .maps {
    padding: 0 5px 50px 5px;
  }

  .maps h2 {
    padding-top: 20px;
  }
}
</style>