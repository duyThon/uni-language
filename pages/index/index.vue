<template>
  <div>
    <div id="homepage-background" class="banner">
      <BannerForm />
    </div>
    <div id="home-page-container">
      <h1 class="text-center-responsive">CÁC KHÓA HỌC TẠI UNI LANGUAGE HOUSE</h1>
      <OtherCourseSection />
      <h1 class="text-center-responsive">UNI LANGUAGE HOUSE - TRUNG TÂM TIẾNG ANH HÀNG ĐẦU TẠI SƠN LA</h1>
      <p class="text-center-responsive">
        Với tầm nhìn như vậy hãy cùng khám phá tại UNI LANGUAGE HOUSE có những
        gì nhé!
      </p>
      <el-row :gutter="20">
          <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
              <div class="section-content-row-fl section1-intro-content">
                  <div class="section1-intro-img">
                      <img class="rotate-img" src="@/assets/pics/main-background/icons/earth-globe-1.png" alt="">
                  </div>
                  <div class="section1-intro-text">
                      <p>Áp dụng chương trình giảng dạy theo tiêu chuẩn quốc tế, phù hợp với từng độ tuổi </p>
                  </div>
              </div>
          </el-col>
          <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
              <div class="section-content-row-fl section1-intro-content">
                  <div class="section1-intro-img">
                      <img class="rotate-img" src="@/assets/pics/main-background/icons/education-hat-1.png" alt="">
                  </div>
                  <div class="section1-intro-text">
                      <p>Đội ngũ giáo viên bản ngữ có kinh nghiệm & đầy đủ bằng cấp giảng dạy</p>
                  </div>
              </div>
          </el-col>
          <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
              <div class="section-content-row-fl section1-intro-content">
                  <div class="section1-intro-img">
                      <img class="rotate-img" src="@/assets/pics/main-background/icons/school-building-1.png" alt="">
                  </div>
                  <div class="section1-intro-text">
                      <p>Cơ sở vật chất với tiêu chuẩn cao phù hợp với từng độ tuổi của học sinh</p>
                  </div>
              </div>
          </el-col>
      </el-row>
      <div class="btn-sign-up">
        <a href="#">ĐĂNG KÝ TƯ VẤN</a>
      </div>
      <!-- <LightGallery/> -->
    </div>
    <ParentsComment/>
    <Maps/>
    <PartnersCarousel />
    <nuxt-child />
  </div>
</template>

<script>
import BannerForm from "@/components/common/BannerForm.vue";
import OtherCourseSection from "~/components/common/OtherCourseSection.vue";
import LightGallery from "~/components/common/LightGallery.vue";
import ParentsComment from '~/components/common/ParentsComment.vue';
import PartnersCarousel from "@/components/common/PartnersCarousel.vue";
import Maps from '~/components/common/Maps.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    BannerForm,
    OtherCourseSection,
    ParentsComment,
    PartnersCarousel,
    LightGallery,
    Maps,
  },

  watch: {
    '$store.state.locale': {
        handler(newLocale) {
            this.$i18n.locale = newLocale
        },
        immediate: true
    }
  },

  mounted() {
    this.runAnimation()
  },

  methods: {
    runAnimation() {
      const gsap = this.$gsap;
      gsap.to('.text-center-responsive', {scrollTrigger:'.text-center-responsive', y:0,opacity:1,duration: .5});
      gsap.to('.rotate-img', {scrollTrigger:'.rotate-img', rotation:0,opacity:1,duration: 1});
      gsap.to('.btn-sign-up', {scrollTrigger:'.btn-sign-up', y:0,opacity:1,duration: .5});
    }
  }
};
</script>

<style scoped>
#homepage-background {
  background-image: url("~assets/pics/main-background/gallery/item1.jpg");
}

#home-page-container {
  margin: 200px 80px 0;
}

.text-center-responsive {
  transform: translateY(100px);
  opacity: 0;
}

.rotate-img {
  rotate: -180deg;
  opacity: 0
}




/* mobile */
@media screen and (max-width: 739px) {
}

/* tablet */
@media screen and (min-width: 740px) and (max-width: 1023px){
    
}

/* tablet & mobile */
@media (max-width: 1024px) {
  #home-page-container {
    margin: 500px 0 0;
  }
}

</style>
