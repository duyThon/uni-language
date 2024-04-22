<template>
  <div>
    <div id="secondary-course-banner" class="banner">
      <div class="intro english-intro">TIẾNG ANH</div>
      <div style="width: 80%;" class="intro-border"></div>
      <div class="intro intro-course">TRUNG HỌC CƠ SỞ</div>
    </div>
    <div class="section section1">
      <el-row :gutter="20">
        <el-col class="section1-intro" :xs="24" :sm="24" :lg="6">
          <div class="section-content-row-fl section1-intro-content">
            <div class="section1-intro-img">
              <img src="@/assets/pics/course/secondary/items/secondary-01.png" alt="" />
            </div>
            <div class="section1-intro-text">
              <p>
                Học tiếng Anh toàn diện cả 4 kỹ năng Nghe, Nói, Đọc, Viết thông
                qua chương trình học thiên về tiếng Anh học thuật, giúp các em
                cải thiện điểm số hiệu quả
              </p>
            </div>
          </div>
        </el-col>
        <el-col class="section1-intro" :xs="24" :sm="24" :lg="6">
          <div class="section-content-row-fl section1-intro-content">
            <div class="section1-intro-img">
              <img src="@/assets/pics/course/secondary/items/secondary-02.png" alt="" />
            </div>
            <div class="section1-intro-text">
              <p>
                Thực hành và rèn luyện đồng bộ 4 kỹ năng sử dụng tiếng Anh thông
                qua các hoạt động giao tiếp, kể chuyện, thuyết trình, học ngoài
                trời, học qua các buổi chuyên đề
              </p>
            </div>
          </div>
        </el-col>
        <el-col class="section1-intro" :xs="24" :sm="24" :lg="6">
          <div class="section-content-row-fl section1-intro-content">
            <div class="section1-intro-img">
              <img src="@/assets/pics/course/secondary/items/secondary-03.png" alt="" />
            </div>
            <div class="section1-intro-text">
              <p>
                Kết hợp học tiếng Anh với rèn luyện các kỹ năng học tập cao cấp,
                giúp các em học hiệu quả hơn, cảm thấy tự tin hơn khi sử dụng
                tiếng Anh
              </p>
            </div>
          </div>
        </el-col>
        <el-col class="section1-intro" :xs="24" :sm="24" :lg="6">
          <div class="section-content-row-fl section1-intro-content">
            <div class="section1-intro-img">
              <img src="@/assets/pics/course/secondary/items/secondary-04.png" alt="" />
            </div>
            <div class="section1-intro-text">
              <p>
                Luyện thi bài bản dưới sự hướng dẫn của các chuyên gia giáo dục
                có kinh nghiệm làm việc trong các dự án, đề án giáo dục quan
                trọng
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
          THCS là giai đoạn mang tính bước ngoặt trong ba cấp học phổ thông.
          Chuyển từ các nội dung học mang tính nền tảng, căn bản sang nội dung
          học có độ trải và sâu hơn, các em học sinh được đòi hỏi phải phát
          triển các kĩ năng học tập cao cấp hơn, như kĩ năng tìm hiểu, phân
          tích, đánh giá, liên hệ, giải thích, thuyết trình, v.v.. Tại Uni,
          chương trình tiếng Anh tích hợp dành riêng cho học sinh THCS được “đo
          ni đóng giày” cho các em học sinh có nhu cầu cải thiện điểm số, rèn
          giũa kĩ năng giao tiếp, học tập, thi cử, nhằm đem đến sự chuẩn bị toàn
          diện để các em sẵn sàng cho những kì thi quan trọng như thi vào THPT
          hay những kì thi chứng chỉ quốc tế, tạo bước đệm hoàn hảo để các em
          luyện thi IELTS hiệu quả trong tương lai.
        </p>
        <p>
          Đội ngũ giảng dạy là các giáo viên đến từ các quốc gia nói tiếng Anh
          (như Anh, Mĩ, Úc, Canada, v.v.) và trong nước, sở hữu bằng cử nhân,
          thạc sĩ giáo dục cùng chứng chỉ sư phạm quốc tế với kinh nghiệm giảng
          dạy phong phú và tình yêu nghề giáo. Ngoài ra, đội ngũ GVVN 100%
          chuyên ngành sư phạm, ngôn ngữ anh cùng giảng dạy và quản lý lớp để
          đảm bảo chương trình học được đa mục tiêu (chuẩn giao tiếp, giỏi ngữ
          pháp, bám sát Cambridge)
        </p>
        <p>
          Nội dung chương trình được Uni tinh chỉnh để phù hợp hơn với văn hoá,
          sở thích, năng lực tiếp thu của trẻ em Việt Nam và vẫn đảm bảo hiệu
          quả học tiếng Anh theo các chuẩn bản ngữ của bộ giáo dục tại Anh quốc
          và Mỹ. Chúng tôi tự tin có thể giúp các học viên bé có nền tảng vững
          chắc cho các bậc học cao hơn và phát triển niềm vui thích và cảm xúc
          hứng khởi với tiếng Anh.
        </p>
      </div>
    </div>
    <CommonComitmentTraining :commitmentTrainingContent="this.commitmentTrainingContent"/>
    <div class="section section4">
      <h2 style="margin-top: 0; text-align: center">Lộ trình học tập</h2>
      <table class="schedule-table" border="1">
        <tbody>
          <tr>
            <td colspan="4">Thời lượng học</td>
            <td>Lịch học</td>
          </tr>
          <tr>
            <td>3 tháng</td>
            <td>6 tháng</td>
            <td>9 tháng</td>
            <td>1 năm</td>
            <td rowspan="2">
              2 buổi / tuần<br />+<br />1 buổi bổ trợ ngữ pháp
            </td>
          </tr>
          <tr>
            <td>24 buổi</td>
            <td>48 buổi</td>
            <td>72 buổi</td>
            <td>96 buổi</td>
          </tr>
        </tbody>
      </table>
      <div class="btn-sign-up">
        <a href="#">ĐĂNG KÝ TƯ VẤN</a>
      </div>
    </div>
    <OtherCourseSection/>
  </div>
</template>

<script>
import OtherCourseSection from '~/components/common/OtherCourseSection.vue';
import CommitmentTraining from "~/components/common/ComitmentTraining.vue"
export default {
  data() {
    return {
      commitmentTrainingContent: {
          texts: [
            "Con hiểu được các khái niệm ngữ pháp phức tạp, trình bày chặt chẽ trong kỹ năng viết và nói.",
            "Sở hữu tư duy cầu tiến. Con thành thục ứng dụng bộ kỹ năng của thế kỷ 21, các kỹ năng mềm và tư duy cảm xúc xã hội.",
            "Làm chủ các kỹ năng học thuật, con sẵn sàng chinh phục các kỳ thi quốc tế với khả năng đạt điểm cao."
          ]
        ,
          imgs: [
            `${process.env.APP_DOMAIN}/assets/pics/course/presentation/items/item2.png`,
            `${process.env.APP_DOMAIN}/assets/pics/course/secondary/items/secondary-01.png`,
            `${process.env.APP_DOMAIN}/assets//pics/course/primary/items/primary-03.png`,
          ]
      }
    }
  },
  components: {
    OtherCourseSection,
    CommitmentTraining
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
#secondary-course-banner {
  background-image: url("~assets/pics/course/kindergarten/background/background1.jpg");
}

</style>