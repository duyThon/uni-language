<template>
  <div>
    <div id="storytelling-course-banner" class="banner-course">
        <div class="banner-text">
            <div class="banner-text-content">
                <p>DÀNH CHO ĐỘ TUỔI: 6-8 TUỔI</p>
                <h1 style="margin:15px 0 15px 70px;">KHÓA HỌC BỔ TRỢ NGỮ ÂM NGỮ PHÁP</h1>
                <h2>GRAMMAR COURSE</h2>
                <h4 style="margin:5px 0">THỜI GIAN ĐÀO TẠO: 3 THÁNG</h4>
            </div>
            <div class="banner-border-bottom"></div>
        </div>
    </div>
    <div class="section section2" style="margin: 60px 400px">
        <div class="section2-intro">
            <h2 style="margin-top: 0; text-align: center">
                Giới thiệu về khóa học
            </h2>
            <p>Trang bị kiến thức Tiếng Anh phù hợp với độ tuổi, nhằm giúp học sinh đáp ứng được các yêu cầu cho môn Tiếng Anh ở trường. Bám sát theo chương trình Tiếng Anh của bộ thông qua bộ sách Global Success là bộ sách giáo khoa Tiếng Anh được biên soạn dựa trên Chương trình giáo dục phổ thông môn tiếng Anh và Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam của Bộ Giáo dục và Đào tạo.</p>
            <p>Không chỉ luyện các dạng bài, câu thì thời của các động từ, học sinh còn được phát triển vốn từ vựng theo từng chủ đề và thực hành chúng một cách thành thục.</p>
            <p>Luyện kỹ năng làm bài thi vượt cấp cho học sinh ở cuối bậc Tiểu học.</p>
            <p>Trang bị kiến thức nền tảng làm cơ sở để bổ trợ song song cho chương trình học cùng Giáo viên nước ngoài ở các lớp mà học sinh đang theo học tại trung tâm. </p>
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
</style>