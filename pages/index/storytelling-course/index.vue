<template>
  <div>
    <div id="storytelling-course-banner" class="banner">
        <div class="banner-text">
            <div class="banner-text-content">
                <p>DÀNH CHO ĐỘ TUỔI: 6-8 TUỔI</p>
                <h1>KHÓA HỌC KỂ CHUYỆN</h1>
                <h2>STORYTELLING COURSE</h2>
                <h4 style="margin:5px 0">THỜI GIAN ĐÀO TẠO: 3 THÁNG</h4>
            </div>
            <div class="banner-border-bottom"></div>
        </div>
    </div>
    <div class="section section1">
        <el-row :gutter="20">
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="6">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/storytelling/items/item1.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Trở thành sứ giả kể chuyện chuyên nghiệp</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="6">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/storytelling/items/item2.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Đào tạo bài bản kỹ năng trình diễn trước công chúng</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="6">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/storytelling/items/item3.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Phương pháp học đầy cảm hứng, giàu sáng tạo, đậm chất nghệ thuật</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="6">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/storytelling/items/item4.png" alt="">
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
    background-image: url("~assets/pics/course/storytelling/background/item.png");
    align-items: flex-end;
    margin-right: 50p;
}
</style>