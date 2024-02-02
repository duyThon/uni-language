<template>
    <div class="section section5">
      <h2 class="main-course-section-heading" style="margin-top: 0; text-align: center">
        CÁC CHƯƠNG TRÌNH HỌC CHÍNH TẠI UNI LANGUAGE HOUSE
      </h2>
      <el-row class="other-course-section" :gutter="20">
        <el-col class="other-course" :xs="12" :sm="12" :lg="6">
            <div @click="router('kindergarten-course')" id="other-course-kindergarten" class="other-course-content ">
              <h2>TIẾNG ANH MẪU GIÁO</h2>
              <div class="overlay-other-course"></div>
            </div>
        </el-col>
        <el-col class="other-course" :xs="12" :sm="12" :lg="6">
            <div @click="router('primary-course')" id="other-course-primary" class="other-course-content ">
              <h2>TIẾNG ANH TIỂU HỌC</h2>
              <div class="overlay-other-course"></div>
            </div>
        </el-col>
        <el-col class="other-course" :xs="12" :sm="12" :lg="6">
            <div @click="router('secondary-course')" id="other-course-secondary" class="other-course-content ">
              <h2>TIẾNG ANH THCS</h2>
              <div class="overlay-other-course"></div>
            </div>
        </el-col>
        <el-col class="other-course" :xs="12" :sm="12" :lg="6">
            <div @click="router('ielts')" id="other-course-ielts" class="other-course-content ">
              <h2>TIẾNG ANH LUYỆN THI IELTS</h2>
              <div class="overlay-other-course"></div>
            </div>
        </el-col>
      </el-row>

      <h2 class="other-course-section-heading" style="margin-top: 30px; text-align: center">
        CÁC CHƯƠNG TRÌNH HỌC NGẮN HẠN TẠI UNI LANGUAGE HOUSE
      </h2>
      <el-row class="other-course-section" :gutter="20">
        <el-col class="other-course" :xs="12" :sm="12" :lg="4">
            <div @click="router('storytelling-course')" id="other-course-storytelling" class="other-course-content other-course-content-short-term ">
              <h2>KHÓA HỌC KỂ CHUYỆN</h2>
              <div class="overlay-other-course"></div>
            </div>
        </el-col>
        <el-col class="other-course" :xs="12" :sm="12" :lg="4">
            <div @click="router('steam-course')" id="other-course-steam" class="other-course-content other-course-content-short-term ">
              <h2>KHÓA HỌC STEAM</h2>
              <div class="overlay-other-course"></div>
            </div>
        </el-col>
        <el-col class="other-course" :xs="12" :sm="12" :lg="4">
            <div @click="router('presentation-course')" id="other-course-presentation" class="other-course-content other-course-content-short-term ">
              <h2>KHÓA HỌC THUYẾT TRÌNH</h2>
              <div class="overlay-other-course"></div>
            </div>
        </el-col>
        <el-col class="other-course" :xs="12" :sm="12" :lg="4">
            <div @click="router('toeic')" id="other-course-toeic" class="other-course-content other-course-content-short-term ">
              <h2>LUYỆN THI TOEIC</h2>
              <div class="overlay-other-course"></div>
            </div>
        </el-col>
        <el-col class="other-course" :xs="12" :sm="12" :lg="4">
            <div @click="router('grammar-course')" id="other-course-grammar" class="other-course-content other-course-content-short-term ">
              <h2>BỔ TRỢ NGỮ ÂM <br/> -<br/> NGỮ PHÁP</h2>
              <div class="overlay-other-course"></div>
            </div>
        </el-col>
        <el-col class="other-course" :xs="12" :sm="12" :lg="4">
            <div @click="router('transition-course')" id="other-course-transition" class="other-course-content other-course-content-short-term ">
              <h2>LUYỆN THI CHUYỂN CẤP</h2>
              <div class="overlay-other-course"></div>
            </div>
        </el-col>
      </el-row>
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
      gsap.to('.other-course-section-heading', {scrollTrigger:'.other-course-section-heading', y:0,opacity:1,duration: .5})
      gsap.to('.main-course-section-heading', {scrollTrigger:'.main-course-section-heading', y:0,opacity:1,duration: .5})
    },

    router(course) {
      this.$router.push({ 
        path: `/${course}`
      });
    }
  }

}
</script>

<style>
#other-course-kindergarten {
  background-image: url("~assets/pics/course/other-course-pics/kindergarten.jpg");
}

#other-course-primary {
  background-image: url("~assets/pics/course/other-course-pics/primary.jpg");
}

#other-course-secondary {
  background-image: url("~assets/pics/course/other-course-pics/secondary.jpg");
}

#other-course-ielts {
  background-image: url("~assets/pics/course/other-course-pics/ielts.jpg");
}

#other-course-storytelling {
  background-image: url("~assets/pics/course/other-course-pics/storytelling.jpg");
}

#other-course-steam {
  background-image: url("~assets/pics/course/other-course-pics/steam.jpg");
}

#other-course-presentation {
  background-image: url("~assets/pics/course/other-course-pics/presentation.jpg");
}

#other-course-toeic {
  background-image: url("~assets/pics/course/other-course-pics/toeic.jpg");
}

#other-course-grammar {
  background-image: url("~assets/pics/course/other-course-pics/grammar.jpg");
}

#other-course-transition {
  background-image: url("~assets/pics/course/other-course-pics/transition.jpg");
}

.other-course-section-heading {
  transform: translateY(100px);
  opacity: 0;
}

.main-course-section-heading {
  transform: translateY(100px);
  opacity: 0;
}



/* mobile */
/* < 740px */
@media (max-width: 46.1875em) {
    
}

/* tablet */
/* > 740px and < 1024px */
@media screen and (min-width: 740px) and (max-width: 1023px){
    .other-course-section {
      margin: 0 !important;
    }
}

/* tablet and moblie */
@media (max-width: 63.9375em) {
  .section5 {
    margin: 30px 0;
  }
}

</style>