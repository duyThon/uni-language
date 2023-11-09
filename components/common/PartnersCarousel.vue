<template>
  <div class="partners-carousel">
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img src="@/assets/pics/partners/dht.png" height="150" width="150" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/ltb.png" height="150" width="150" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/idp.png" height="150" width="150" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/slt.png" height="150" width="150" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/th.png" height="150" width="150" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/csl.png" height="150" width="150" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/rag.png" height="150" width="150" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/dht.png" height="150" width="150" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/ltb.png" height="150" width="150" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/idp.png" height="150" width="150" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/slt.png" height="150" width="150" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/th.png" height="150" width="150" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/csl.png" height="150" width="150" alt="" />
        </div>
        <div class="slide">
          <img src="@/assets/pics/partners/rag.png" height="150" width="150" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.partners-carousel {
  align-items: center;
  background: transparent;
  display: flex;
  height: 300px;
  justify-content: center;
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


</style>