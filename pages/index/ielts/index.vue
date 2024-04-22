<template>
  <div>
    <div id="ielts-course-banner" class="banner">
      <div class="intro english-intro">TIẾNG ANH</div>
      <div style="width: 70%;" class="intro-border"></div>
      <div class="intro intro-course">LUYỆN THI IELTS</div>
    </div>
    <div class="section section1">
      <el-row :gutter="20">
        <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
          <div class="section-content-row-fl section1-intro-content">
            <div class="section1-intro-img">
              <img src="@/assets/pics/course/ielts/items/ielts-01.png" alt="" />
            </div>
            <div class="section1-intro-text">
              <p>
                Tối đa hoá điểm số các kỹ năng thông qua việc luyện tập thường
                xuyên cả ở trên lớp lẫn tại nhà với kho đề thi phong phú, cập
                nhật liên tục
              </p>
            </div>
          </div>
        </el-col>
        <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
          <div class="section-content-row-fl section1-intro-content">
            <div class="section1-intro-img">
              <img src="@/assets/pics/course/ielts/items/ielts-02.png" alt="" />
            </div>
            <div class="section1-intro-text">
              <p>
                Lớp học quy mô nhỏ, giúp học viên được theo dõi và hỗ trợ tốt
                hơn, học tập vững vàng, nhanh chóng tiến bộ
              </p>
            </div>
          </div>
        </el-col>
        <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
          <div class="section-content-row-fl section1-intro-content">
            <div class="section1-intro-img">
              <img src="@/assets/pics/course/ielts/items/ielts-03.png" alt="" />
            </div>
            <div class="section1-intro-text">
              <p>
                Thi thử liên tục với đề thi đạt chuẩn nhằm đánh giá chính xác
                trình độ của học viên, giúp học viên điều chỉnh tốc độ học nhằm
                đạt kết quả cao nhất
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="section section2">
      <div class="section2-intro">
        <h2 style="margin-top: 0; text-align: center">
          Giới thiệu về khóa học
        </h2>
        <p>
          Chương trình được thiết kế độc quyền bởi đội ngũ chuyên gia đến từ các
          trường đại học có tiếng trong và ngoài nước, sử dụng phương pháp tiếp
          cận tiên tiến, giúp học viên ở mọi cấp độ vẫn có thể nhanh chóng làm
          quen, bắt nhịp để tăng tốc trên con đường luyện thi IELTS. Nhờ thường
          xuyên luyện tập với các dạng câu hỏi, đề bài có chủ đề đa dạng, học
          viên được kỳ vọng nắm bắt chắc chắn các phần từ vựng, ngữ pháp và các
          lỗi sai thường gặp và nâng cao, giúp học viên ghi điểm dễ dàng và
          tránh mất điểm khi làm bài thi thật. Bên cạnh đó, với hệ thống tài
          liệu bổ trợ, tham khảo trực tuyến được chọn lọc, tổng hợp, biên soạn
          kĩ càng, học viên có thể truy cập từ bất cứ đâu để tự bồi dưỡng thêm,
          giúp bản thân nhanh tiến bộ.
        </p>
        <p>
          Chương trình được giảng dạy bởi đội ngũ giáo viên đến từ các quốc gia
          nói tiếng Anh (như Anh, Mĩ, Úc, Canada, v.v.) và trong nước. Tất cả
          các thầy cô đều sở hữu bằng cử nhân, thạc sĩ giáo dục và chứng chỉ sư
          phạm quốc tế, huấn luyện IELTS, cùng kinh nghiệm giảng dạy phong phú,
          luôn sẵn sàng giải đáp tất cả những câu hỏi, thắc mắc của học viên,
          giúp học viên nắm bắt được gốc rễ của vấn đề và tiến bộ vững chắc.Đồng
          thời, GVVN có kinh nghiệm và thường xuyên tham gia các chương trình
          đào tạo, tập huấn về phương pháp giảng dạy IELTS sẽ hỗ trợ học sinh
          tốt nhất trong quá trình ôn luyện và chuẩn bị thi.
        </p>
        <p>
          Bên cạnh đó, UNI Language House Sơn La còn là đối tác cấp tỉnh của IDP
          Education, một trong hai đơn vị duy nhất được tổ chức thi IELTS tại
          Việt Nam, đây là tiền đề vững chắc để học sinh theo học tại UNI sẽ
          được đảm bảo những sự chuẩn bị tốt nhất cho việc ôn tập và thi chứng
          chỉ.
        </p>
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
  
  async mounted() {
    await this.$gsap.to(window, { duration: .5, scrollTo: 0 })
    this.runAnimation()
  },
  methods: {
    runAnimation() {
      const gsap = this.$gsap;
      gsap.to('.english-intro', {scrollTrigger:'.english-intro', opacity:1, y:0, duration: 1});
      gsap.to('.intro-course', {scrollTrigger:'.intro-course', opacity:1, y:0, duration: 1});
    }
  }
};
</script>

<style>
#ielts-course-banner {
  background-image: url("~assets/pics/course/kindergarten/background/background1.jpg");
}

</style>