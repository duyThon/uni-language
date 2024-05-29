<template>
  <div>
    <div id="storytelling-course-banner" class="banner">
        <div class="banner-text">
            <div class="banner-text-content">
                <p>DÀNH CHO ĐỘ TUỔI: 6-8 TUỔI</p>
                <h1>KHÓA HỌC LUYỆN THI CHUYỂN CẤP</h1>
                <h2>TRANSITION COURSE</h2>
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
                        <img src="@/assets/pics/course/transition/items/item1.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Hệ thống hóa Ngữ âm và Từ vựng- ngữ pháp</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="8">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/transition/items/item2.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Luyện kỹ năng Nghe - Nói- Đọc- Viết</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="8">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/transition/items/item3.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Phát triển kỹ năng làm các dạng đề thi ngữ âm, từ vựng, nghe, nói hiệu quả</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="12">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/transition/items/item4.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Hệ thống hóa kiến thức Từ vựng - Ngữ pháp</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="24" :sm="24" :lg="12">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/transition/items/item5.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Làm quen, luyện tập kỹ lưỡng với các dạng đề, bài thi của trường chuyên</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
    <div class="section section2-toeic">
        <div class="section2-intro">
            <h2 style="margin-top: 0; text-align: center">
                Chương trình học
            </h2>
            <p>Bám sát kiến thức thi vào lớp 10 THPT.</p>
            <p>Khóa học đảm bảo đúng cấu trúc đề thi vào các trường THPT trên địa bàn thành phố Sơn La.</p>
            <p>Đi từ cơ bản đến nâng cao (nhận biết, thông hiểu, vận dụng, vận dụng cao).</p>
            <p>Luyện giải đề thành thạo.</p>
            <p>Biết cách làm để nắm chắc điểm, đạt điểm tối đa.</p>
            <h2 style="margin-top: 60px; text-align: center">
                Ưu điểm khóa luyện
            </h2>
            <p>Số lượng học sinh ít, từ 8 – 12 học sinh/Lớp.</p>
            <p>Lộ trình học tập khoa học phù hợp với sức học của mỗi em.</p>
            <p>Kiểm soát định kỳ để luôn đảm bảo tiến độ và kết quả học tập.</p>
            <p>Đội ngũ Giáo viên giàu kinh nghiệm luyện thi tuyển sinh vào lớp 6, lớp 10.</p>
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
    },

    mounted() {
        this.$gsap.to(window, { duration: .5, scrollTo: 0 })
    }
}
</script>

<style>
#storytelling-course-banner {
    background-image: url("~assets/pics/course/kindergarten/background/background.png");
    align-items: flex-end;
    margin-right: 50p;
}

/* .section2-toeic {
    margin: 30px 400px;
} */

.section2-toeic p {
    text-align: center;
}

.section2-toeic-intro-text {
    font-weight: 600;
    text-align: center;
    margin: 0px 0 0 20px;
    max-width: 250px;
}
</style>