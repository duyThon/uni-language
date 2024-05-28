<template>
  <div style="margin: 130px 0" class="section section3 have-commitment-section">
    <h1 class="have-commitment-section-heading">Cam kết đào tạo</h1>
    <div>
      <ul class="commitment-training-list">
        <li v-for="text,index in this.commitmentTrainingContent.texts" :key="index" class="commitment-training-item">
          <svg
            fill="#1fd655"
            class="check-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
            />
          </svg>
          <p>
            {{text}}
          </p>
        </li>
      </ul>
      <div  class="section1-intro-img illustration-img ">
        <img v-for="img,index in this.imgs" :key="index" :src="img" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 data() {
  return {
    imgs: []
  }
 },
 props: {
  commitmentTrainingContent: Object,
 },

 created() {
  this.imgs = this.commitmentTrainingContent.imgs;
 },

};
</script>

<style>
@media (max-width: 46.1875em) {
  .section1-intro-img img{
      height: 110px;
    }
}

</style>