<template>
  <div>
    <MainNavBar></MainNavBar>
    <main>
      <div style="margin: 120px">
        <div class="news-item-container">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :lg="4">
              <h3>Học viên xuất sắc</h3>
              <h3>Chia sẻ bài viết</h3>
              <div class="share-list">
                <a
                  href="http://www.facebook.com/Anh.Ngu.Quoc.Te.Son.La"
                  target="_blank"
                  ><img
                    class="share-list-item"
                    src="@/assets/icons/social-media-icons/fb-icon-black.png"
                    alt=""
                /></a>
                <a href="mailto:unilanguagesonla1@gmail.com"
                  ><img
                    class="share-list-item"
                    src="@/assets/icons/social-media-icons/gmail-icon-black.png"
                    alt=""
                /></a>
                <a href="mailto:unilanguagesonla1@gmail.com"
                  ><svg
                    class="share-list-item"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 640 512"
                  >
                    <path
                      d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                    /></svg
                ></a>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="15">
              <h1 class="news-post-heading">
                Bí quyết thành công từ Nguyễn Phương Duy đạt IELTS 8.0 khi mới
                16 tuổi
              </h1>
              <p class="date">20/10/2023</p>
              <img
                class="post-img"
                src="https://ila.edu.vn/wp-content/uploads/2023/10/hoc-sinh-vung-cao-2.png"
                alt=""
              />
              <h2 class="post-title"></h2>
              <div style="font-size:21px;line-height: 1.6;">
                  <p style="margin-bottom: 15px">
                    Với Nguyễn Phương Duy, một trong số ít bạn trẻ đạt được cột mốc
                    IELT 8.0 khi chỉ mới là học sinh lớp 10, thì tiếng Anh chỉ là
                    “chuyện nhỏ” . Duy được bạn bè nể, không chỉ vì cậu học giỏi Anh
                    văn “có số”, mà còn bởi Duy luôn tự tin, không ngại trong bất kì
                    trường hợp ứng dụng Anh văn nào: Giao tiếp người nước ngoài, làm
                    thuyết trình… Duy chia sẻ, có được điều này không chỉ do Duy gắn
                    bó với Anh văn từ lớp 1 đến nay tại Trung tâm Anh ngữ ILA, mà
                    còn bởi bạn may mắn chọn được cho mình phương pháp học đúng đắn:
                    Kết hợp học kiến thức ở trường với học kĩ năng, tương tác ở ILA.
                  </p>
                  <p style="margin-bottom: 15px">
                    Duy kể, tự so sánh chương trình mình đang theo học với chương
                    trình học của các bạn ở các Trung tâm Anh ngữ khác, Duy thấy
                    phương pháp học Anh văn tại ILA phong phú, đa dạng, chú trọng về
                    khả năng giao tiếp chứ không chỉ là kỹ năng, kiến thức hàn lâm.
                    Bên cạnh đó, chương trình học không quá gò bó như chương trình
                    học tiếng Anh phổ thông.Không chỉ học tiếng Anh, học viên còn
                    học được học thêm nhiều kiến thức xã hội cũng như học cách sử
                    dụng, biểu đạt bằng tiếng Anh.
                  </p>
                  <img class="post-img" src="https://ila.edu.vn/wp-content/uploads/2023/10/thap-sang-tuong-lai-5-768x510.png" alt="">
                  <p style="margin-bottom: 15px">
                    Một điểm khác biệt nữa, theo Duy, đó là tại ILA, học cấp độ nào
                    cũng được tương tác với giáo viên nước ngoài nên rất hiệu quả.
                    Học viên được tương tác nhiều, nghe nói nhiều, tối đa hóa thời
                    gian học & tương tác với giáo viên, có thể nhớ bài ngay tại lớp
                    mà không mất thời gian ôn bài nhiều khi về nhà.Chính vì thế, học
                    viên có thể hoàn thiện trình độ tiếng Anh trong thời gian
                    ngắn.Đặc biệt, điểm khác biệt lớn nhất của ILA so với các trung
                    tâm khác còn là mối quan hệ giữa giáo viên và học viên.Giáo viên
                    nhiệt tình, quan tâm đến học sinh, có thể nhớ tên và đặc điểm,
                    học lực của từng học viên. Như Duy, khi học xong, một thời gian
                    sau quay lại, giáo viên vẫn có thể nhớ và gọi tên mình. Duy nói,
                    đây cũng giống “mái nhà thứ hai” của Duy, vì môi trường học rất
                    vui vẻ, dễ chịu, kết hợp cả giao tiếp, vui chơi ngoại khóa. Cạnh
                    đó, các thiết bị phục vụ việc học rất tốt như bảng điên tử thông
                    minh, máy chiếu, thư viện, bàn học riêng… khiến học viên cảm
                    giác cực kì thoải mái như ở nhà. Vì vậy, với Duy, 2 giờ học tại
                    ILA mỗi ngày không hề khiến bạn có cảm giác “phải đi học”.
                  </p>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="5">
                <div class="most-viewed">
            <div class="most-viewed-heading">CÁC BÀI VIẾT XEM NHIỀU</div>
            <div class="most-viewed-item">
              <p>
                218 thí sinh bước tiếp vào Vòng Chung Khảo Cuộc thi Olympic
                Tiếng Anh THCS năm học 2017-2018
              </p>
              <p class="date">20/11/2023</p>
            </div>
            <div class="most-viewed-item">
              <p>
                218 thí sinh bước tiếp vào Vòng Chung Khảo Cuộc thi Olympic
                Tiếng Anh THCS năm học 2017-2018
              </p>
              <p class="date">20/11/2023</p>
            </div>
            <div class="most-viewed-item">
              <p>
                218 thí sinh bước tiếp vào Vòng Chung Khảo Cuộc thi Olympic
                Tiếng Anh THCS năm học 2017-2018
              </p>
              <p class="date">20/11/2023</p>
            </div>
          </div>
          <div class="most-viewed">
            <div class="most-viewed-heading">CÁC BÀI VIẾT NGẪU NHIÊN</div>
            <div class="most-viewed-item">
              <p>
                218 thí sinh bước tiếp vào Vòng Chung Khảo Cuộc thi Olympic
                Tiếng Anh THCS năm học 2017-2018
              </p>
              <p class="date">20/11/2023</p>
            </div>
            <div class="most-viewed-item">
              <p>
                218 thí sinh bước tiếp vào Vòng Chung Khảo Cuộc thi Olympic
                Tiếng Anh THCS năm học 2017-2018
              </p>
              <p class="date">20/11/2023</p>
            </div>
            <div class="most-viewed-item">
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
      </div>
        <PartnersCarousel />
    </main>
    <StickyInfoContact />
    <Footer />
  </div>
</template>

<script>
import MainNavBar from "@/components/common/MainNavBar.vue";
import StickyInfoContact from "@/components/common/StickyInfoContact.vue";
import PartnersCarousel from "@/components/common/PartnersCarousel.vue";
import Footer from "@/components/common/Footer.vue";
export default {
  components: {
    MainNavBar,
    StickyInfoContact,
    Footer,
    PartnersCarousel
  },

  data() {
    return {
      data: {
        createdAt: "",
        descriptionEn: "",
        descriptionVn: "",
        titleEn: "",
        titleVn: "",
      },
      apiUrl: process.env.API_URL,
      randomList: [],
      mostViewedList: [],
      dialog: false,
    }
  },

  async mounted() {
    await this.$gsap.to(window, { duration: 0.5, scrollTo: 0 });
    await this.getData();
    await this.getRandomList();
    await this.getMostViewedList();
  },

  methods: {
    async getData() {
      console.log(this.$route);
      let res = await fetch(`${this.apiUrl}/api/news/${this.$route.params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      if (res.success) {
        console.log(res);
        this.data = {
          createdAt: res.data.createdAt,
          descriptionEn: res.data.descriptionEn,
          descriptionVn: res.data.descriptionVn,
          titleEn: res.data.titleEn,
          titleVn: res.data.titleVn,
        };
      }
    },

    async getRandomList() {
      let data = {
        numRecord: 3,
      };
      let res = await fetch(`${this.apiUrl}/api/news/search_random`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
      if (res.success) {
        this.randomList = res.data;
      }
    },

    async getMostViewedList() {
      let data = {
        queryString: "",
        pagingAndSorting: {
          sort: {
            viewCount: -1,
          },
        },
      };

      let res = await fetch(`${this.apiUrl}/api/news/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
      if (res.success) {
        this.mostViewedList = res.data.slice(0, 3);
      }
    },

    renderDate(date) {
      const formatedDate = new Date(date);
      return formatedDate.toLocaleDateString("en-GB");
    },

    shareOnFB() {
      // Lấy URL hiện tại của trang web
      var url = window.location.href;
      console.log(url);
      // Kiểm tra URL hợp lệ
      try {
        new URL(url);
      } catch (e) {
        console.error("Invalid URL:", url);
        return;
      }

      // Mã hóa URL và tạo URL chia sẻ của Facebook
      var facebookShareUrl =
        "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(url);

      // Mở cửa sổ mới để chia sẻ lên Facebook
      window.open(
        facebookShareUrl,
        "facebook-share-dialog",
        "width=800,height=600"
      );
    },
    async copyLink() {
      try {
        await navigator.clipboard.writeText(
          `http://localhost:3000${this.$route.fullPath}`
        );
        this.dialog = true;
      } catch ($e) {
        alert("Vui lòng thử lại");
      }
    },
    // postOnZalo() {
    //   var zaloPostUrl =
    //     "https://developers.zalo.me/tools/share?url=" +
    //     encodeURIComponent(this.currentUrl);
    //   window.open(zaloPostUrl, "zalo-post-dialog", "width=800,height=600");
    // },
  },
};
</script>

<style>
.news-item-container {
  border-top: 2px solid #efefef;
}

.share-list-item {
  width: 28px;
  height: 28px;
  margin-right: 5px;
}

.post-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 30px;
}

.date {
    color: #999999;
}



.most-viewed {
    margin: 100px 0 60px 0;
}

.most-viewed-heading {
  font-size: 22px;
  line-height: 26px;
  padding: 10px 0px 20px 0px;
  margin-bottom: 20px;
  font-weight: 700;
  background: url(~assets/icons/hr-heading-news.png) left bottom no-repeat;
}
</style>