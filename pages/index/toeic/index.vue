<template>
  <div>
    <div id="storytelling-course-banner" class="banner-course">
        <div class="banner-text">
            <div class="banner-text-content">
                <p>DÀNH CHO ĐỘ TUỔI: 6-8 TUỔI</p>
                <h1>KHÓA HỌC LUYỆN THI TOEIC</h1>
                <h2>TOEIC COURSE</h2>
                <h4 style="margin:5px 0">THỜI GIAN ĐÀO TẠO: 3 THÁNG</h4>
            </div>
            <div class="banner-border-bottom"></div>
        </div>
    </div>
    <div class="section section1">
        <el-row :gutter="20">
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="12">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/toeic/items/item1.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Xây dựng lộ trình học cá nhân hóa tinh gọn, phù hợp với từng cá nhân</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="12">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/toeic/items/item2.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Khung chương trình giản lược, tập trung các kiến thức trọng điểm</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
    <div class="section section2-toeic">
        <div class="section2-intro">
            <h2 style="margin-top: 0; text-align: center">
                Giới thiệu về khóa học
            </h2>
            <p>Tại Uni, đội ngũ giảng viên hội tụ cả ba yếu tố tâm huyết - trí tuệ và phong cách để có cách dạy vừa cuốn hút, vừa dễ hiểu, giúp học viên chinh phục mục tiêu của mình trong thời gian ngắn nhất</p>
            <div class="section2-toeic-content">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/toeic/items/sub-item1.png" alt="">
                    </div>
                    <div class="section2-toeic-intro-text">
                        <p>Khóa nền tảng cơ bản</p>
                    </div>
                </div>
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/toeic/items/sub-item2.png" alt="">
                    </div>
                    <div class="section2-toeic-intro-text">
                        <p>Khóa trung cấp TOEIC</p>
                    </div>
                </div>
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/toeic/items/sub-item1.png" alt="">
                    </div>
                    <div class="section2-toeic-intro-text">
                        <p>Khóa chuyên sâu Toeic</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <OtherCourseSection/>
  </div>
</template>

<script>
import OtherCourseSection from '~/components/common/OtherCourseSection.vue';
export default {
    components: {
        OtherCourseSection
    }
}
</script>

<style>
#storytelling-course-banner {
    background-image: url("~assets/pics/course/kindergarten/background/background.png");
    align-items: flex-end;
    margin-right: 50p;
}

.section2-toeic {
    margin: 30px 400px;
}

.section2-toeic p {
    text-align: center;
}

.section2-toeic-content {
    display: flex;
    justify-content: center;
}

.section2-toeic-content img {
    height: 130px;
    margin: 20px 50px 0 50px;
}

.section2-toeic-intro-text {
    font-weight: 600;
    text-align: center;
    margin: 0px 0 0 20px;
    max-width: 250px;
}
</style>