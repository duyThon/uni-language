<template>
  <div>
    <div id="kindergarten-course-banner" class="banner">
      <div class="intro english-intro">TIẾNG ANH</div>
      <div style="width: 50%" class="intro-border"></div>
      <div class="intro intro-course">MẦM NON</div>
    </div>
    <div class="section section1">
      <el-row :gutter="20">
        <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
          <div class="section-content-row-fl section1-intro-content">
            <div class="section1-intro-img">
              <img
                src="@/assets/pics/course/kindergarten/items/kindergarten-01.png"
                alt=""
              />
            </div>
            <div class="section1-intro-text">
              <p>
                Học tiếng Anh một cách tự nhiên và hào hứng qua phương pháp học
                thông qua các hoạt động thể chất (TPR)
              </p>
            </div>
          </div>
        </el-col>
        <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
          <div class="section-content-row-fl section1-intro-content">
            <div class="section1-intro-img">
              <img
                src="@/assets/pics/course/kindergarten/items/kindergarten-02.png"
                alt=""
              />
            </div>
            <div class="section1-intro-text">
              <p>
                Học phát âm tiếng Anh chuẩn bản ngữ theo giáo trình ngữ âm và
                phương pháp ghép vần (Phonics) tạo nền tảng vững chắc cho học
                đọc - viết trong tương lai
              </p>
            </div>
          </div>
        </el-col>
        <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
          <div class="section-content-row-fl section1-intro-content">
            <div class="section1-intro-img">
              <img
                src="@/assets/pics/course/kindergarten/items/kindergarten-03.png"
                alt=""
              />
            </div>
            <div class="section1-intro-text">
              <p>
                Học tiếng Anh một cách thú vị qua phương pháp kể chuyện
                (Storytelling) kích thích trí tưởng tượng và rèn luyện năng lực
                cảm thụ văn học
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
          Những nghiên cứu khoa học cho biết: từ 3 đến 6 tuổi chính là “độ tuổi
          vàng” để học các loại ngôn ngữ. Và cũng chính trong giai đoạn này, nếu
          áp dụng những phương pháp học tập thiếu khoa học thì sẽ tác động tiêu
          cực tới hiệu quả tiếp thu và sử dụng ngôn ngữ của trẻ trong tương
          lai.Được nghiên cứu và thiết kế bởi các chuyên gia Anh ngữ hàng đầu
          tại châu u và Mĩ, Tiếng Anh Mẫu giáo tại Uni là một trong những chương
          trình học Anh ngữ được đánh giá cao nhất dành cho trẻ từ 3,5 đến 6
          tuổi.
        </p>
        <p>
          Đội ngũ giảng dạy là các giáo viên đến từ các quốc gia nói tiếng Anh
          (như Anh, Mĩ, Úc, Canada, Nam Phi v.v.) sở hữu bằng cử nhân, thạc sĩ
          giáo dục cùng chứng chỉ sư phạm quốc tế với kinh nghiệm giảng dạy
          phong phú và tình yêu với trẻ nhỏ.
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
    <CommitmentTraining :commitmentTrainingContent="this.commitmentTrainingContent"/>
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
              2 buổi / tuần<br />+<br />1 buổi bổ trợ chuyên sâu ngữ âm
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
    <OtherCourseSection />
  </div>
</template>

<script>
import OtherCourseSection from "~/components/common/OtherCourseSection.vue";
import CommitmentTraining from "~/components/common/ComitmentTraining.vue"
export default {
  data() {
    return {
      commitmentTrainingContent: {
          texts: [
            "Con có phản xạ ngôn ngữ và diễn đạt tự nhiên với phát âm chuẩn trong các hội thoại đơn giản.",
            "Con nhận biết âm và đọc được từ đơn, nói cả câu. Con có thể chủ động tự viết chữ cái.",
            "Con hình thành tư duy sáng tạo, phản biện. Con tự tin thể hiện kỹ năng giao tiếp, hợp tác trong hoạt động thường ngày.",
            "Con được rèn kỹ năng cần thiết để sẵn sàng vào lớp 1.",
            "Khơi sáng tình yêu học tập với nội dung học thú vị và lôi cuốn."
          ]
        ,
          imgs: [
            `${process.env.APP_DOMAIN}/assets/pics/course/kindergarten/items/kindergarten-02.png`,
            `${process.env.APP_DOMAIN}/assets/pics/course/presentation/items/item5.png`,
            `${process.env.APP_DOMAIN}/assets/pics/course/primary/items/primary-01.png`
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
#kindergarten-course-banner {
  background-image: url("~assets/pics/course/kindergarten/background/background.png");
}
</style>