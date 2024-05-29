<template>
  <div>
    <div id="primary-course-banner" class="banner">
      <div class="intro english-intro">TIẾNG ANH</div>
      <div style="width: 50%" class="intro-border"></div>
      <div class="intro intro-course">TIỂU HỌC</div>
    </div>
    <div class="section section1">
      <el-row :gutter="20">
        <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
          <div class="section-content-row-fl section1-intro-content">
            <div class="section1-intro-img">
              <img
                src="@/assets/pics/course/primary/items/primary-01.png"
                alt=""
              />
            </div>
            <div class="section1-intro-text">
              <p>
                Tích lũy từ vựng, kiến thức ngữ pháp và xây dựng tình yêu với
                tiếng Anh thông qua cảm thụ văn học
              </p>
            </div>
          </div>
        </el-col>
        <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
          <div class="section-content-row-fl section1-intro-content">
            <div class="section1-intro-img">
              <img
                src="@/assets/pics/course/primary/items/primary-02.png"
                alt=""
              />
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
        <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
          <div class="section-content-row-fl section1-intro-content">
            <div class="section1-intro-img">
              <img
                src="@/assets/pics/course/primary/items/primary-03.png"
                alt=""
              />
            </div>
            <div class="section1-intro-text">
              <p>
                Tăng cường các nội dung luyện thi cho giai đoạn cuối cấp nhằm
                sẵn sàng cho các bài thi chứng chỉ quốc tế hay kì thi chuyển cấp
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
          Tiểu học là bậc học được Bộ Giáo dục và Đào tạo khuyến khích học tập
          Anh ngữ. Nhằm giúp các bé học tiếng Anh một cách dễ dàng và hiệu quả,
          các chuyên gia học thuật đến từ Uni đã nghiên cứu và thiết kế ra
          chương trình Tiếng Anh Chuyên Tiểu học giúp xây dựng nền tảng kiến
          thức vững chắc, tuyệt vời cho các bé và qua đó, giúp các con tự tin
          khi học và sử dụng tiếng Anh. Nội dung chương trình tích hợp các học
          phần giao tiếp chuẩn quốc tế, ngữ pháp tiêu chuẩn với rèn luyện kỹ
          năng thi cử ở các hình thức khác nhau, bao gồm cả lớp học thực tế và
          chương trình bổ trợ trực tuyến theo tiêu chuẩn Mỹ.
        </p>
        <p>
          Đội ngũ giảng dạy là các giáo viên đến từ các quốc gia nói tiếng Anh
          (như Anh, Mĩ, Úc, Canada, v.v.) và trong nước, sở hữu bằng cử nhân,
          thạc sĩ giáo dục cùng chứng chỉ sư phạm quốc tế với kinh nghiệm giảng
          dạy phong phú và tình yêu với trẻ nhỏ. Ngoài ra, đội ngũ GVVN 100%
          chuyên ngành sư phạm, ngôn ngữ anh cùng giảng dạy và quản lý lớp để
          đảm bảo chương trình học được đa mục tiêu (chuẩn giao tiếp, giỏi ngữ
          pháp, bám sát Cambridge).
        </p>
        <p>
          Nội dung chương trình được Uni tinh chỉnh để phù hợp hơn với văn hoá,
          sở thích, năng lực tiếp thu của trẻ em Việt Nam và vẫn đảm bảo hiệu
          quả học tiếng Anh theo các tiêu chuẩn quốc tế và Bộ GD ĐT Việt Nam quy
          định. Chúng tôi tự tin có thể giúp các học viên bé có nền tảng vững
          chắc cho các bậc học cao hơn và phát triển niềm vui thích và cảm xúc
          hứng khởi với tiếng Anh.
        </p>
      </div>
    </div>
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
      <div style="opacity: 1" class="btn-sign-up">
        <a href="#">ĐĂNG KÝ TƯ VẤN</a>
      </div>
    </div>
    <CommitmentTraining :commitmentTrainingContent="this.commitmentTrainingContent"/>
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
            "Con đạt trình độ tiếng Anh tương ứng với chuẩn quốc tế phù hợp với cấp bậc theo học: Cambridge Starters - Flyers/ KET hoặc tương đương trình độ từ Pre-A1 tới A2 theo chuẩn CEFR.",
            "Con làm chủ các kỹ năng viết, nói tiếng Anh, sẵn sàng chinh phục các kì thi lấy chứng chỉ tiếng Anh quốc tế dành cho độ tuổi của mình.",
            "Con hình thành tư duy sáng tạo, phản biện. Con tự tin thể hiện kỹ năng giao tiếp, hợp tác trong hoạt động thường ngày.",
            "Con tự tin giao tiếp trôi chảy bằng tiếng Anh, chủ động nhận biết và hoàn thiện các lỗi ngôn ngữ đọc, viết, biết cách trình bày thuyết phục, tạo ảnh hưởng với người khác.",
            "Con hình thành thói quen học tập chủ động khi biết thu xếp việc học của bản thân.",
            "Con biết ứng dụng công nghệ hiện đại vào học tập, thích ứng tốt với các phương pháp học tập đa dạng khác nhau."
          ]
        ,
          imgs: [
            `${process.env.APP_DOMAIN}/assets//pics/course/primary/items/primary-03.png`,
            `${process.env.APP_DOMAIN}/assets/pics/course/secondary/items/secondary-01.png`,
            `${process.env.APP_DOMAIN}/assets/pics/course/presentation/items/item2.png`
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
#primary-course-banner {
  background-image: url("~assets/pics/course/kindergarten/background/background1.jpg");
}
</style>