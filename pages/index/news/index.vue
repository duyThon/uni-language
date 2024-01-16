<template>
  <div id="news-container">
    <h1 class="news-container-heading">Tin tức & Sự kiện</h1>
    <div class="latest-news">
      <el-row>
        <el-col class="latest-news-first-child" :xs="24" :sm="24" :lg="12">
          <div class="latest-news-item">
            <div class="news-heading-image">
              <img
                src="https://llv.edu.vn/media/2023/07/how-to-give-a-presentation-in-english-3.png"
                alt=""
              />
              <div class="overlay-news-heading"></div>
            </div>
            <div class="news-heading">
              <h2>Tips thuyết trình bằng tiếng Anh và mẫu câu</h2>
              <p>28/10/2023</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="latest-news-item">
            <div class="news-heading-image">
              <img
                src="https://llv.edu.vn/media/2023/11/Banner-web-thumbnail-WP-contest-01-800x419.jpg"
                alt=""
              />
              <div class="overlay-news-heading"></div>
            </div>
            <div class="news-heading">
              <h2>Ở độ tuổi nào trẻ em nên bắt đầu chú trọng học ngữ pháp</h2>
              <p>28/10/2023</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="container">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="16">
          <div class="news-container-main">
            <div class="news-container-main-item">
              <el-row :gutter="20">
                <el-col :xs="8" :sm="8" :lg="8">
                  <div class="news-container-main-img">
                    <img
                      src="https://llv.edu.vn/media/2023/09/FullMoon2023-1200x628-01-1-500x262.jpg"
                      alt=""
                    />
                  </div>
                </el-col>
                <el-col :xs="16" :sm="16" :lg="16">
                  <div class="news-container-main-info">
                    <div class="news-title">
                      <h3>
                        Phương pháp giúp con Tiểu học ghi nhớ từ vựng tiếng Anh
                      </h3>
                      <p class="date">31/02/2023</p>
                    </div>
                    <div class="news-desc">
                      Vốn từ vựng đóng vai trò vô cùng quan trọng trong việc học
                      tiếng Anh của trẻ, bởi một ngân hàng từ đủ lớn sẽ hỗ trợ
                      quá trình giao tiếp của con thêm hiệu quả, tạo nền tảng
                      phát triển toàn diện 4 kỹ năng nghe, nói, đọc và viết học
                      thuật. Hôm nay...
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="news-container-main-item">
              <el-row :gutter="20">
                <el-col :xs="8" :sm="8" :lg="8">
                  <div class="news-container-main-img">
                    <img
                      src="https://llv.edu.vn/media/2023/08/Banner-Slider-01-600x314.jpg"
                      alt=""
                    />
                  </div>
                </el-col>
                <el-col :xs="16" :sm="16" :lg="16">
                  <div class="news-container-main-info">
                    <div class="news-title">
                      <h3>“Gõ cửa” Thế giới với Language Link Academic</h3>
                      <p class="date">31/02/2023</p>
                    </div>
                    <div class="news-desc">
                      Language Link Academic hân hạnh chào đón Quý phụ huynh &
                      các bạn nhỏ thân yêu tới tham dự sự kiện mang tên “Gõ cửa
                      thế giới với Language Link Academic”. Hoạt động đặc biệt
                      chào năm học mới với mục tiêu mang đến cho con không chỉ
                      một môi trường phát triển Anh ngữ...
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="news-container-main-item">
              <el-row :gutter="20">
                <el-col :xs="8" :sm="8" :lg="8">
                  <div class="news-container-main-img">
                    <img
                      src="https://llv.edu.vn/media/2023/09/Artboard-3-600x314.jpg"
                      alt=""
                    />
                  </div>
                </el-col>
                <el-col :xs="16" :sm="16" :lg="16">
                  <div class="news-container-main-info">
                    <div class="news-title">
                      <h3>
                        Lễ ký kết hợp tác giữa Language Link với trường Trung
                        cấp Quốc tế Sài Gòn
                      </h3>
                      <p class="date">31/02/2023</p>
                    </div>
                    <div class="news-desc">
                      Trung tâm Language Link Việt Nam gửi lời cảm ơn chân thành
                      đến ban Tổ chức SGI College vì đã tin tưởng và lựa chọn
                      đồng hành để thực hiện chương trình Ký kết Hợp tác. Trường
                      Trung cấp Quốc tế Sài Gòn tổ chức buổi lễ Khai giảng để
                      chào đón các em...
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="news-container-main-item">
              <el-row :gutter="20">
                <el-col :xs="8" :sm="8" :lg="8">
                  <div class="news-container-main-img">
                    <img
                      src="https://llv.edu.vn/media/2023/08/DSC09463-600x400.jpg"
                      alt=""
                    />
                  </div>
                </el-col>
                <el-col :xs="16" :sm="16" :lg="16">
                  <div class="news-container-main-info">
                    <div class="news-title">
                      <h3>
                        Học tiếng Anh tại Language Link Academic, con tự tin
                        bước ra Thế giới
                      </h3>
                      <p class="date">31/02/2023</p>
                    </div>
                    <div class="news-desc">
                      Tiếng Anh đã và đang là ngôn ngữ toàn cầu, chính vì thế
                      con hãy đặt bước chân đầu tiên dẫn tới con đường thành
                      công bằng việc trau dồi khả năng Anh ngữ. Mùa tựu trường
                      năm 2023, Language Link Academic tặng học bổng lên đến 30%
                      học phí khóa tiếng Anh chuyên Tiểu...
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="news-container-main-item">
              <el-row :gutter="20">
                <el-col :xs="8" :sm="8" :lg="8">
                  <div class="news-container-main-img">
                    <img
                      src="https://llv.edu.vn/media/2023/09/FullMoon2023-1200x628-01-1-500x262.jpg"
                      alt=""
                    />
                  </div>
                </el-col>
                <el-col :xs="16" :sm="16" :lg="16">
                  <div class="news-container-main-info">
                    <div class="news-title">
                      <h3>
                        Phương pháp giúp con Tiểu học ghi nhớ từ vựng tiếng Anh
                      </h3>
                      <p class="date">31/02/2023</p>
                    </div>
                    <div class="news-desc">
                      Vốn từ vựng đóng vai trò vô cùng quan trọng trong việc học
                      tiếng Anh của trẻ, bởi một ngân hàng từ đủ lớn sẽ hỗ trợ
                      quá trình giao tiếp của con thêm hiệu quả, tạo nền tảng
                      phát triển toàn diện 4 kỹ năng nghe, nói, đọc và viết học
                      thuật. Hôm nay...
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="most-read">
            <div class="most-read-heading">CÁC BÀI VIẾT XEM NHIỀU</div>
            <div class="most-read-item">
              <p>
                218 thí sinh bước tiếp vào Vòng Chung Khảo Cuộc thi Olympic
                Tiếng Anh THCS năm học 2017-2018
              </p>
              <p class="date">20/11/2023</p>
            </div>
            <div class="most-read-item">
              <p>
                218 thí sinh bước tiếp vào Vòng Chung Khảo Cuộc thi Olympic
                Tiếng Anh THCS năm học 2017-2018
              </p>
              <p class="date">20/11/2023</p>
            </div>
            <div class="most-read-item">
              <p>
                218 thí sinh bước tiếp vào Vòng Chung Khảo Cuộc thi Olympic
                Tiếng Anh THCS năm học 2017-2018
              </p>
              <p class="date">20/11/2023</p>
            </div>
          </div>
          <div class="most-read">
            <div class="most-read-heading">CÁC BÀI VIẾT NGẪU NHIÊN</div>
            <div class="most-read-item">
              <p>
                218 thí sinh bước tiếp vào Vòng Chung Khảo Cuộc thi Olympic
                Tiếng Anh THCS năm học 2017-2018
              </p>
              <p class="date">20/11/2023</p>
            </div>
            <div class="most-read-item">
              <p>
                218 thí sinh bước tiếp vào Vòng Chung Khảo Cuộc thi Olympic
                Tiếng Anh THCS năm học 2017-2018
              </p>
              <p class="date">20/11/2023</p>
            </div>
            <div class="most-read-item">
              <p>
                218 thí sinh bước tiếp vào Vòng Chung Khảo Cuộc thi Olympic
                Tiếng Anh THCS năm học 2017-2018
              </p>
              <p class="date">20/11/2023</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <PartnersCarousel/>
  </div>
</template>

<script>
import PartnersCarousel from "@/components/common/PartnersCarousel.vue";
export default {
    components: {
        PartnersCarousel
    }
};
</script>

<style>
#news-container {
  margin: 120px;
}

.news-container-heading {
  margin-top: 150px;
  border-top: 2px solid #efefef;
  padding: 20px 0;
  background: url(~assets/icons/hr-heading-news.png) left bottom no-repeat;
}

.date {
  color: #999999;
}

.latest-news {
  margin-bottom: 80px;
}

.latest-news-item {
  background: var(--primary-color);
}

.news-heading-image {
  position: relative;
}

.news-heading-image img {
  width: 100%;
  max-height: 400px;
}

.news-heading {
  padding: 20px;
  color: #fff;
}

.news-heading h2 {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.overlay-news-heading {
  position: absolute;
  top: 0;
  position: absolute;
  bottom: 0px;
  background: rgb(40, 120, 140);
  background: linear-gradient(
    0deg,
    rgba(40, 120, 140, 1) 0%,
    rgba(32, 139, 164, 1) 15%,
    rgba(255, 255, 255, 0) 40%
  );
  width: 100%;
}

.news-container-main-item {
  margin-bottom: 60px;
}

.news-container-main-img img {
  width: 100%;
}

.news-desc {
  height: 100%;
  overflow: hidden;
  --line-clamp: 3;
  -webkit-line-clamp: 3;
  word-break: break-word;
}

.most-read {
    margin-bottom: 60px;
}

.most-read-heading {
  font-size: 22px;
  line-height: 26px;
  padding: 10px 0px 20px 0px;
  margin-bottom: 20px;
  font-weight: 700;
  background: url(~assets/icons/hr-heading-news.png) left bottom no-repeat;
}

/* mobile */
@media screen and (max-width: 739px) {
    
}

/* tablet */
@media screen and (min-width: 740px) and (max-width: 1023px){
    
}

/* tablet & mobile */
@media (max-width: 1024px) {
  #news-container {
    margin: 15px;
  }
  .news-container-heading {
    margin-top: 90px;
  }
  .latest-news-first-child {
    margin-bottom: 20px;
  }

  .news-title h3 {
    margin-top: 0;
  }
}
</style>