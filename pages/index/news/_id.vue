<template>
  <div>
    <MainNavBar></MainNavBar>
    <main>
      <el-dialog title="Thông báo" :visible.sync="dialog" width="30%">
      <div style="display: flex; align-items: center; flex-direction: column">
        <img
          style="width: 150px"
          src="@/assets/icons/success-icon.png"
          alt=""
        />
        <h3>Bài viết này đã được copy vào bộ nhớ tạm thời</h3>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialog = false">Xin cảm ơn</el-button>
      </span>
    </el-dialog>
      <div style="margin: 120px">
        <div class="news-item-container">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :lg="4">
              <h3>Tin tức & Sự kiện</h3>
              <h3>Chia sẻ bài viết</h3>
              <div class="share-list">
                <a @click="shareOnFB" target="_blank"
                  ><img
                    class="share-list-item"
                    src="@/assets/icons/social-media-icons/fb-icon-black.png"
                    alt=""
                /></a>
                <!-- <img
                  @click="postOnZalo"
                    class="share-list-item"
                    src="@/assets/icons/social-media-icons/gmail-icon-black.png"
                    alt=""
                /> -->
                <a @click="copyLink"
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
                {{ data.titleVn }}
              </h1>
              <p class="date">{{ renderDate(this.data.createdAt) }}</p>
              <div v-html="this.data.descriptionVn"></div>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="5">
              <div class="most-viewed">
                <div class="most-viewed-heading">CÁC BÀI VIẾT XEM NHIỀU</div>
                <div class="most-viewed-item">
                  <div v-for="data in mostViewedList" :key="data.id">
                    <p>
                      {{ data.summaryEn }}
                    </p>
                    <p class="date">{{ renderDate(data.createdAt) }}</p>
                  </div>
                </div>
              </div>
              <div class="most-viewed">
                <div class="most-viewed-heading">CÁC BÀI VIẾT NGẪU NHIÊN</div>
                <div class="most-viewed-item">
                  <div v-for="data in randomList" :key="data.id">
                    <p>
                      {{ data.summaryEn }}
                    </p>
                    <p class="date">{{ renderDate(data.createdAt) }}</p>
                  </div>
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
    PartnersCarousel,
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
    };
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
      let res = await fetch(`${this.apiUrl}/news/${this.$route.params.id}`, {
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
      let res = await fetch(`${this.apiUrl}/news/search_random`, {
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

      let res = await fetch(`${this.apiUrl}/news/search`, {
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