<template>
  <div>
    <div id="homepage-background" class="banner">
      <BannerForm />
    </div>
    <div id="home-page-container">
      <h1>CÁC KHÓA HỌC TẠI UNI LANGUAGE HOUSE</h1>
      <OtherCourseSection />
      <h1>UNI LANGUAGE HOUSE - TRUNG TÂM TIẾNG ANH HÀNG ĐẦU TẠI SƠN LA</h1>
      <p>
        Với tầm nhìn như vậy hãy cùng khám phá tại UNI LANGUAGE HOUSE có những
        gì nhé!
      </p>
      <el-row :gutter="20">
          <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
              <div class="section-content-row-fl section1-intro-content">
                  <div class="section1-intro-img">
                      <img src="@/assets/pics/main-background/icons/earth-globe-1.png" alt="">
                  </div>
                  <div class="section1-intro-text">
                      <p>Áp dụng chương trình giảng dạy theo tiêu chuẩn quốc tế, phù hợp với từng độ tuổi </p>
                  </div>
              </div>
          </el-col>
          <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
              <div class="section-content-row-fl section1-intro-content">
                  <div class="section1-intro-img">
                      <img src="@/assets/pics/main-background/icons/education-hat-1.png" alt="">
                  </div>
                  <div class="section1-intro-text">
                      <p>Đội ngũ giáo viên bản ngữ có kinh nghiệm & đầy đủ bằng cấp giảng dạy</p>
                  </div>
              </div>
          </el-col>
          <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
              <div class="section-content-row-fl section1-intro-content">
                  <div class="section1-intro-img">
                      <img src="@/assets/pics/main-background/icons/school-building-1.png" alt="">
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
      <div style="text-align: center" class="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.9494387986199!2d103.90909169878066!3d21.339952313602588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31328b3423500775%3A0x89e9f230d6d31bdc!2zNDU3IENodSBWxINuIFRo4buLbmgsIFAuIENoaeG7gW5nIEzhu4EsIFPGoW4gTGEsIDM2MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1699424510932!5m2!1svi!2s"
          width="960"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p style="">
          <svg
            style="width: 20px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
            />
          </svg>
          Địa chỉ: Số 457 A, đường Chu Văn Thịnh, thành phố Sơn La, tỉnh Sơn La
        </p>
      </div>
    </div>
    <ParentsComment/>
    <PartnersCarousel />
    <nuxt-child />
    <Footer />
  </div>
</template>

<script>
import BannerForm from "@/components/common/BannerForm.vue";
import OtherCourseSection from "~/components/common/OtherCourseSection.vue";
import ParentsComment from '~/components/common/ParentsComment.vue';
import PartnersCarousel from "@/components/common/PartnersCarousel.vue";
export default {
  data() {
    return {};
  },
  components: {
    BannerForm,
    OtherCourseSection,
    ParentsComment,
    PartnersCarousel,
  },
};
</script>

<style scoped>
#homepage-background {
  background-image: url("~assets/pics/main-background/pic1.png");
}

#home-page-container {
  margin: 200px 80px 0;
}

.carousel-parent-comment {
  margin: 80px;
}
</style>
