<template>
  <div class="partners-carousel">
    <h2 class="partners-carousel-heading">ĐỐI TÁC CỦA UNI LANGUAGE HOUSE SƠN LA</h2>
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img src="@/assets/pics/partners/dht.png" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/ltb.png" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/idp.png" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/slt.png" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/th.png" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/csl.png" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/rag.png" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/dht.png" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/ltb.png" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/idp.png" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/slt.png" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/th.png" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/csl.png" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/rag.png" alt="" />
        </div>
      </div>
    </div>
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
      gsap.to('.partners-carousel-heading', {scrollTrigger: '.partners-carousel-heading', opacity: 1, duration:.5, y: 0})
    },
  }

}
</script>

<style>
.partners-carousel {
  text-align: center;
  align-items: center;
  background: transparent;
  display: flex;
  height: 300px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 30px 0;
}

.partners-carousel-heading {
  font-size: 34px;
  font-style: italic;
  color: #28788c;
  opacity: 0;
  transform: translateY(100px);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
.slider {
  background: white;
  height: 150px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100vw;
}
.slider::before, .slider::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 150px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  animation: scroll 20s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider .slide {
  height: 150px;
  width: 150px;
  padding: 0 50px;
}

.slide img {
  width: 150px;  
  height: 150px;
}


/* mobile */
@media screen and (max-width: 739px) {
    .partners-carousel h2 {
      margin: auto 20px;
      font-size: 22px;
    }
}

/* tablet */
@media screen and (min-width: 740px) and (max-width: 1023px){
    .partners-carousel h2 {
      font-size: 30px;
    }
}

/* tablet & mobile */
@media (max-width: 1024px) {
    .slider::before, .slider::after {
      height: 150px;
      position: absolute;
      width: 100px;
      z-index: 2;
    }
}

</style>