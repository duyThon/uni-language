<template>
  <div>
    <div id="storytelling-course-banner" class="banner-course">
        <div class="banner-text">
            <div class="banner-text-content">
                <p>DÀNH CHO ĐỘ TUỔI: 6-8 TUỔI</p>
                <h1>KHÓA HỌC KỂ CHUYỆN</h1>
                <h2>STORYTELLING COURSE</h2>
                <h2>THỜI GIAN ĐÀO TẠO: 3 THÁNG</h2>
            </div>
            <div class="bg-banner-pro" style="height: 30px;position: absolute;bottom: 0;left: 0;width: 100%;background: #ffdf68"></div>
        </div>
    </div>
    <div class="section section1">
        <el-row :gutter="20">
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="6">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/kindergarten/items/kindergarten-01.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Trở thành sứ giả kể chuyện chuyên nghiệp</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="6">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/kindergarten/items/kindergarten-02.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Đào tạo bài bản kỹ năng trình diễn trước công chúng</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="6">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/kindergarten/items/kindergarten-01.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Phương pháp học đầy cảm hứng, giàu sáng tạo, đậm chất nghệ thuật</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="6">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/kindergarten/items/kindergarten-03.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Trải nghiệm các nền văn hóa đa dạng trên thế giới</p>
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
    }
}
</script>

<style>
#storytelling-course-banner {
    background-image: url("~assets/pics/kindergarten/background/background.png");
    align-items: flex-end;
    margin-right: 50p;
}

.banner-text {
    width: 440px;
    max-width: 100%;
    background: #28788c;
    padding: 0 0 30px 60px;
    min-height: 300px;
    position: relative;
    top: 10px;
    border-radius: 30px;
    overflow: hidden;
    margin-right: 40px;
    display: flex;
    align-items: center;
}

.banner-text-content {
    text-align: end;
    margin-right: 40px;
}

.banner-text p {
    color: #F99417;
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 700;
    background: #fff;
    display: inline-block;
    padding: 8px 15px 6px;
    border-radius: 30px;
}

.banner-text h1 {
    font-size: 56px;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    margin: 15px 0 15px 70px;
}

.banner-text h2 {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin: 0;
}

</style>