<template>
  <div>
    <div id="about-background" class="banner"></div>

    <div class="section">
      <el-row id="core-value" :gutter="20">
        <el-col
          id="core-value-middle-item"
          style="order: 2; text-align: center"
          :xs="24"
          :sm="24"
          :lg="8"
        >
          <img
            class="core-value-img"
            src="@/assets/pics/about/circle/circle.png"
            alt=""
          />
        </el-col>
        <el-col
          id="core-value-left-item"
          style="order: 1"
          :xs="24"
          :sm="12"
          :lg="8"
        >
          <ul class="core-value-list core-value-left">
            <li class="core-value-list-item right-list-item">
              <img
                src="@/assets/pics/about/circle/language-learning.png"
                alt=""
              />
              <div class="core-value-list-item-info">
                <h2 style="color: #282e65">Giáo dục ngôn ngữ</h2>
                <p>Là giáo dục văn hóa tư duy.</p>
              </div>
            </li>
            <li class="core-value-list-item right-list-item">
              <img src="@/assets/pics/about/circle/dedication.png" alt="" />
              <div class="core-value-list-item-info">
                <h2 style="color: #fe2635">Sự ham học hỏi, hiểu biết</h2>
                <p>
                  Khuyến khích và tạo điều kiện tốt nhất cho mọi học viên trong
                  việc tự học và tìm hiểu tri thức của nhân loại.
                </p>
              </div>
            </li>
          </ul>
        </el-col>
        <el-col
          id="core-value-right-item"
          style="order: 3"
          :xs="24"
          :sm="12"
          :lg="8"
        >
          <ul class="core-value-list core-value-right">
            <li class="core-value-list-item left-list-item">
              <img src="@/assets/pics/about/circle/happy.png" alt="" />
              <div class="core-value-list-item-info">
                <h2 style="color: #cc3332">Sự cởi mở, thân thiên</h2>
                <p>
                  Giúp cho mọi học viên đều được học tập và hoạt động trong môi
                  trường tích cực nhất.
                </p>
              </div>
            </li>
            <li class="core-value-list-item left-list-item">
              <img src="@/assets/pics/about/circle/enthusiastic.png" alt="" />
              <div class="core-value-list-item-info">
                <h2 style="color: #28778b">Sự đam mệ, nhiệt huyết</h2>
                <p>
                  Mỗi học viên đều được khuyến khích thể hiện tối đa đam mê,
                  nhiệt huyết theo đuổi ước mơ của bản thân.
                </p>
              </div>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>

    <div class="vision-mission section">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :lg="12">
          <img class="vision-img" src="@/assets/pics/about/vision.png" alt="" />
        </el-col>
        <el-col :xs="24" :sm="12" :lg="12">
          <div style="text-align: end" class="vision-mission-info vision-info">
            <h2>Tầm nhìn</h2>
            <p>
              Uni Language House sẽ trở thành trung tâm tiếng anh hàng đầu tại
              Sơn La, trở thành địa chỉ tin cậy trong việc định hình con đường
              học tập và sự nghiệp tương lai cho mỗi học viên và gia đình các
              em.
              <br />
              Uni Language House tin rằng bằng việc định hình rõ ràng tương lai
              sự nghiệp mà mỗi học viên muốn theo đuổi sẽ là động lực tốt nhất
              giúp học viên có thể tập trung và học tập tốt Tiếng Anh – ngôn ngữ
              thông dụng và phổ biến nhất hiện nay. Khi mà đa số tài liệu, tri
              thức tốt nhất của nhân loại đều sử dụng Tiếng Anh, việc nắm vững
              Tiếng Anh sẽ là bước cơ bản đầu tiên giúp cho mọi học viên đạt
              được giấc mơ sự nghiệp tương lai của bản thân.
            </p>
          </div>
        </el-col>
      </el-row>
      <el-row class="mobile-col-reverse" style="display:flex" :gutter="20">
        <el-col :xs="24" :sm="12" :lg="12">
          <div class="vision-mission-info mission-info">
            <h2>Sứ mệnh</h2>
            <p>
              Uni Language House mang sứ mệnh là cây cầu nối quan trọng luôn
              đồng hành và hỗ trợ các học viên, gia đình định hình rõ ràng con
              đường học tập và sự nghiệp tương lai, khởi đầu từ việc học Tiếng
              Anh.
              <br />
              Chúng tôi mang đến cho học viên một môi trường học tập năng động,
              hiện đại, thân thiện, hệ thống giáo trình Anh ngữ tiên tiến, cùng
              hệ thống giáo viên bản ngữ Châu Âu giúp học viên luôn duy trì sự
              hứng thú trong học tập, phát huy tối đa toàn bộ tâm trí lực, dễ
              dàng sử dụng thành thạo tiếng Anh để đạt được ước mơ của chính
              mình
            </p>
          </div>
        </el-col>
        <el-col style="text-align:end" :xs="24" :sm="12" :lg="12">
          <img class="mission-img" src="@/assets/pics/about/mission.png" alt="" />
        </el-col>
      </el-row>
    </div>
    <Maps />
    <PartnersCarousel />
  </div>
</template>

<script>
import PartnersCarousel from "@/components/common/PartnersCarousel.vue";
import Maps from "~/components/common/Maps.vue";
export default {
  components: {
    Maps,
    PartnersCarousel,
  },

  mounted() {
    this.$gsap.to(window, { duration: .5, scrollTo: 0 })
    this.boxRotation()
  },

  methods: {
    boxRotation() {
      const gsap = this.$gsap;
      gsap.to('.core-value-img', {scrollTrigger:".core-value-list-item-info", rotation: 0, opacity: 1, duration: .5 });
      gsap.to('.core-value-left', {scrollTrigger:".core-value-list-item-info", x: 0, opacity: 1, duration: .5 });
      gsap.to('.core-value-right', {scrollTrigger:".core-value-list-item-info", x: 0, opacity: 1, duration: .5 });
      gsap.to('.vision-img', {scrollTrigger:".vision-img", x: 0, opacity: 1, duration: .5 });
      gsap.to('.vision-info', {scrollTrigger:".vision-info", x: 0, opacity: 1, duration: .5 });
      gsap.to('.mission-img', {scrollTrigger:".mission-img", x: 0, opacity: 1, duration: .5 });
      gsap.to('.mission-info', {scrollTrigger:".mission-info", x: 0, opacity: 1, duration: .5 });
    }
  },
};
</script>

<style>
#about-background {
  background-image: url("~assets/pics/about/background1.jpg");
}

#core-value {
  display: flex;
}

.core-value-list {
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
}

.core-value-img {
  width: 450px;
  rotate: -180deg;
  opacity: 0
}

.core-value-left {
  transform: translateX(-100px);
  opacity: 0;
}

.core-value-right {
  transform: translateX(100px);
  opacity: 0;
}

.vision-img {
  transform: translateX(-200px);
  opacity: 0;
}

.mission-img {
  transform: translateX(-200px);
  opacity: 0;
}

.vision-info {
  transform: translateX(200px);
  opacity: 0;
}

.mission-info {
  transform: translateX(200px);
  opacity: 0;
}

.core-value-list-item-info p {
  width: 300px;
}

.core-value-right p {
  margin-left: auto;
}

.core-value-list-item {
  /* margin: 70px 50px; */
  display: flex;
  align-items: center;
  height: 200px;
}

.core-value-list-item-info {
  padding: 0 20px;
}

.left-list-item {
  flex-direction: row-reverse;
}

.core-value-list-item img {
  width: 100px;
  height: 100px;
}

.vision {
  display: flex;
}

.mission {
  display: flex;
}

.vision-mission img {
  height: 610px;
  /* margin: 0 80px; */
}

.vision-mission-info {
  padding: 60px 90px;
}

.vision-mission-info h2 {
  font-size: 40px;
}

.vision-mission-info p {
  font-size: 20px;
  line-height: 34px;
}
/* mobile */
@media screen and (max-width: 739px) {
  .core-value-img {
    width: 250px;
  }

  .core-value-list-item-info p {
    width: 240px;
  }
  .core-value-list-item {
    height: 150px;
  }

  .left-list-item {
    flex-direction: row;
  }

  .vision-mission img {
    height: 290px;
  }

  .vision-mission-info {
    text-align: justify !important;
  }
}

/* tablet */
@media screen and (min-width: 740px) and (max-width: 1023px) {
  .core-value-list-item-info p {
    width: 200px;
  }
}

/* tablet and mobile */
@media (max-width: 63.9375em) {
  #core-value {
    display: block;
  }

  .core-value-list-item-info h2 {
    font-size: 20px;
  }

  .core-value-list-item img {
    width: 50px;
    height: 50px;
  }

  .vision-mission-info {
    padding: 60px 20px;
  }
}
</style>