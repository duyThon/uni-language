<template>
  <div>
    <div id="storytelling-course-banner" class="banner">
        <div class="banner-text">
            <div class="banner-text-content">
                <p>DÀNH CHO ĐỘ TUỔI: 6-8 TUỔI</p>
                <h1>KHÓA HỌC STEAM</h1>
                <h2>STEAM COURSE</h2>
                <h4 style="margin:5px 0">THỜI GIAN ĐÀO TẠO: 3 THÁNG</h4>
            </div>
            <div class="banner-border-bottom"></div>
        </div>
    </div>
    <div class="section section1">
        <el-row :gutter="20">
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="8">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/steam/items/steam1.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Hỏi như một nhà khoa học</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="8">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/steam/items/steam2.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Thiết kế như dân công nghệ</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="8">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/steam/items/steam3.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Xây dựng như một kỹ sư</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="12">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/steam/items/steam4.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Sáng tạo như một nghệ sĩ</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="24" :sm="24" :lg="12">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/steam/items/steam5.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Suy luận như một nhà toán học</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
    <OtherCourseSection/>
  </div>
</template>

<script>
import OtherCourseSection from '~/components/common/OtherCourseSection.vue';
export default {
    components: {
        OtherCourseSection
    },

    mounted() {
        this.$gsap.to(window, { duration: .5, scrollTo: 0 })
    }
}
</script>

<style>
#storytelling-course-banner {
    background-image: url("~assets/pics/course/steam/background/item.jpg");
    align-items: flex-end;
    margin-right: 50p;
}
</style>