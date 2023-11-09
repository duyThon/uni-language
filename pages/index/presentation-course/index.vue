<template>
  <div>
    <div id="storytelling-course-banner" class="banner">
        <div class="banner-text">
            <div class="banner-text-content">
                <p>DÀNH CHO ĐỘ TUỔI: 10-15 TUỔI</p>
                <h1 style="margin: 15px 0 15px -12px">KHÓA HỌC THUYẾT TRÌNH</h1>
                <h2>PRESENTATION COURSE</h2>
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
                        <img src="@/assets/pics/course/presentation/items/item1.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Biết cách kích hoạt tâm thế người thuyết trình xuất sắc</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="8">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/presentation/items/item2.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Ứng dụng công nghệ hiện đại tạo sự sinh động trong bài thuyết trình</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="8">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/presentation/items/item3.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Sở hữu kỹ thuật làm chủ sân khấu đỉnh cao</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="12" :sm="12" :lg="12">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/presentation/items/item4.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Xây dựng phong thái cá nhân ấn tượng, chuyên nghiệp, tỏa sáng trước công chúng</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="24" :sm="24" :lg="12">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="@/assets/pics/course/presentation/items/item5.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Truyền được cảm hứng và thông điệp ý nghĩa đến người nghe</p>
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
    background-image: url("~assets/pics/course/presentation/background/item.png");
    align-items: flex-end;
    margin-right: 50p;
}
</style>