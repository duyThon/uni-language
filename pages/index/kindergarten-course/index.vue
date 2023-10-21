<template>
  <div>
    <div class="banner-course kindergarten-banner">
      <div class="intro">TIẾNG ANH</div>
      <br />
      <div class="intro fancy">MẦM NON</div>
    </div>
    <div class="section section1">
        <el-row :gutter="20">
            <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="https://llv.edu.vn/media/2023/08/vyl-1.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Học tiếng Anh một cách tự nhiên và hào hứng qua phương pháp học thông qua các hoạt động thể chất (TPR)</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="https://llv.edu.vn/media/2023/08/vyl-2.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Học phát âm tiếng Anh chuẩn bản ngữ theo giáo trình ngữ âm và phương pháp ghép vần (Phonics) tạo nền tảng vững chắc cho học đọc - viết trong tương lai</p>
                    </div>
                </div>
            </el-col>
            <el-col class="section1-intro" :xs="24" :sm="24" :lg="8">
                <div class="section-content-row-fl section1-intro-content">
                    <div class="section1-intro-img">
                        <img src="https://llv.edu.vn/media/2023/08/vyl-3.png" alt="">
                    </div>
                    <div class="section1-intro-text">
                        <p>Học tiếng Anh một cách thú vị qua phương pháp kể chuyện (Storytelling) kích thích trí tưởng tượng và rèn luyện năng lực cảm thụ văn học</p>
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
    <div class="section section3">
      <h2 style="margin-top: 0; text-align: center">Giáo trình cho khóa học</h2>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="section3-content section-content-row-fl">
            <div class="section3-content-img">
              <figure><img src="@/assets/pics/kindergarten/books/my-little-island1.jpg" alt=""></figure>
            </div>
            <div class="section3-content-title">
              <h4>My Little Island 1</h4>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="section3-content section-content-row-fl">
            <div class="section3-content-img">
              <figure><img src="@/assets/pics/kindergarten/books/my-little-island2.jpg" alt=""></figure>
            </div>
            <div class="section3-content-title">
              <h4>My Little Island 2</h4>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="section3-content section-content-row-fl">
            <div class="section3-content-img">
              <figure><img src="@/assets/pics/kindergarten/books/my-little-island3.jpg" alt=""></figure>
            </div>
            <div class="section3-content-title">
              <h4>My Little Island 3</h4>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="section section4">
      <h2 style="margin-top: 0; text-align: center">
        Lộ trình học tập
      </h2>
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
            <td rowspan="2">2 buổi / tuần<br/>+<br/>1 buổi bổ trợ chuyên sâu ngữ âm</td>
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
        <a href="#">ĐĂNG KÝ TƯ VẤN NGAY</a>
      </div>
    </div>
    <div class="section section5">
      <h2 style="margin-top: 0; text-align: center">
        CÁC CHƯƠNG TRÌNH HỌC KHÁC TẠI UNI LANGUAGE HOUSE
      </h2>
      <el-row :gutter="20">
        <el-col :xs="12" :sm="12" :lg="6">
          <div class="other-course-content">
            <h3>TIẾNG ANH MẪU GIÁO</h3>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6">
          <div class="other-course-content">
            <h3>TIẾNG ANH TIỂU HỌC</h3>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6">
          <div class="other-course-content">
            <h3>TIẾNG ANH THCS</h3>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6">
          <div class="other-course-content">
            <h3>TIẾNG ANH LUYỆN THI IELTS</h3>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.banner-course {
  background-image: url("~assets/pics/kindergarten/background/background1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 540px;
}

.kindergarten-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
}

.intro {
  font-size: 8vw;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  letter-spacing: 5px;
  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
}

.fancy {
  @supports (background-clip: text) or (-webkit-background-clip: text) {
    background-image: url("~assets/pics/kindergarten/texture/texture.jpg");
    /* background-size: 110% auto; */
    background-position: center;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    text-shadow: none;
  }
}

.section {
  margin: 30px 80px;
}

.section-content-row-fl {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.section1-intro-img {
    min-height: 242px;
}

.section1-intro-text {
    font-weight: 600;
    text-align: center;
    margin: 20px 50px;
}

.section2-intro {
  padding: 30px 40px;
  background: #eee;
  border-radius: 30px;
  text-align: justify;
}
/* 
.section3-content {
  margin: 30px 20px;
  background: #28788c;
  border-radius: 30px;
  text-align: justify;
  color: #fff;
  height: 350px;
} */

.section3-content-img img{
  max-height: 200px;
}

.section3-content-img figure img {
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.section3-content-img figure:hover img {
	-webkit-transform: scale(1.3);
	transform: scale(1.3);
}

.section4 {
  text-align: center;
}

.schedule-table {
  border-collapse: collapse;
  width: 60%;
  text-align: center;
  margin: auto;
}

.schedule-table tr:first-child {
  font-weight: 700;
  background-color: #729faa;
}

.schedule-table tr {
  /* border: 1px solid #fff; */
  padding: 6px;
  /* background: #f3f0caa1; */
}

.schedule-table tr:nth-child(2n) {
  background: #F3F0CA;
}

.schedule-table td {
  padding: 10px 24px;
}

.btn-sign-up {
  margin-top: 45px;
}

.btn-sign-up a {
  padding: 15px 30px;
  background: var(--primary-color);
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  display: inline-block;
  border-radius: 30px;
  text-decoration: none;
}

.btn-sign-up a:visited {
  
  transition: all .2s ease;
}

.other-course-content {
  width: 20%;
  margin-right: 30px;
  background: #4cb848;
  border-radius: 30px;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
}
</style>