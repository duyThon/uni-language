<template>
  <div id="news-container">
    <h1 class="news-container-heading">Tin tức & Sự kiện</h1>
    <div class="latest-news">
      <el-row>
        <el-col
          v-for="data in lastestData"
          :key="data.id"
          class="latest-news-first-child"
          :xs="24"
          :sm="24"
          :lg="12"
        >
          <div @click="openNews(data._id)" class="latest-news-item">
            <div class="news-heading-image">
              <div style="overflow: hidden;" v-if="data.titleImage" class="heading-img" v-html="data.titleImage"></div>
              <img v-else src="@/assets/pics/loading-img.jpg" alt="" />
              <div class="overlay-news-heading"></div>
            </div>
            <div class="news-heading">
              <h2>{{ data.titleVn }}</h2>
              <p>{{ renderDate(data.createdAt) }}</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="container">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="16">
          <div class="news-container-main">
            <div
              v-for="data in dataTable"
              :key="data.id"
              class="news-container-main-item"
            >
              <div @click="openNews(data._id)">
                <el-row :gutter="20">
                  <el-col :xs="8" :sm="8" :lg="8">
                    <div class="news-container-main-img">
                      <div v-if="data.titleImage" class="content-img" v-html="data.titleImage"></div>
                      <img v-else src="@/assets/pics/loading-img.jpg" alt="" />
                    </div>
                  </el-col>
                  <el-col :xs="16" :sm="16" :lg="16">
                    <div class="news-container-main-info">
                      <div class="news-title">
                        <h3>
                          {{ data.titleVn }}
                        </h3>
                        <p class="date">{{ renderDate(data.createdAt) }}</p>
                      </div>
                      <div class="news-desc">
                        {{ data.summaryVn }}
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <el-pagination
              :hide-on-single-page="hidePage"
              layout="prev, pager, next"
              :total="totalItem"
              :page-size="perPage"
              align="right"
              background
              @current-change="setPage"
            >
            </el-pagination>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div v-if="this.mostViewedList.length > 2" class="most-viewed">
            <div class="most-viewed-heading">CÁC BÀI VIẾT XEM NHIỀU</div>
            <div class="most-viewed-item">
              <div v-for="data in mostViewedList" :key="data.id">
                <p @click="openNews(data._id)">
                  {{ data.summaryVn }}
                </p>
                <p class="date">{{ renderDate(data.createdAt) }}</p>
              </div>
            </div>
          </div>
          <div v-if="this.randomList.length > 2" class="most-viewed">
            <div class="most-viewed-heading">CÁC BÀI VIẾT NGẪU NHIÊN</div>
            <div class="most-viewed-item">
              <div v-for="data in randomList" :key="data.id">
                <p @click="openNews(data._id)">
                  {{ data.summaryVn }}
                </p>
                <p class="date">{{ renderDate(data.createdAt) }}</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <PartnersCarousel />
  </div>
</template>

<script>
import PartnersCarousel from "@/components/common/PartnersCarousel.vue";

export default {
  data() {
    return {
      lastestData: [],
      dataTable: [],
      randomList: [],
      mostViewedList: [],
      totalItem: 0,
      perPage: 0,
      hidePage: true,
      currentPage: 1,
      // apiUrl: process.env.API_URL,
    };
  },

  components: {
    PartnersCarousel,
  },

  async mounted() {
    this.$gsap.to(window, { duration: .5, scrollTo: 0 })
    await this.getListData();
    await this.getRandomList();
    await this.getMostViewedList();
  },
  
  watch: {
    '$route.params.id': 'fetchAllData'
  },
  
  methods: {
    async fetchAllData() {
      await this.$gsap.to(window, { duration: 0.5, scrollTo: 0 });
      await this.getData();
      await this.getRandomList();
      await this.getMostViewedList();
    },

    async getListData() {
      let data = {
        queryString: "{tags}=='''news'''",
        pagingAndSorting: {
          page: this.currentPage
        }
      };
      let res = await fetch(`${this.$API_URL}/news/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
      if (res.success) {
        if(this.currentPage == 1) {
          this.lastestData = res.data.slice(0, 2);
          this.dataTable = res.data.slice(2);
        } else {
          this.dataTable = res.data
        }
        this.totalItem = res.total;
        this.perPage = res.perPage;
      }
    },

    async getRandomList() {
      let data = {
        numRecord: 3,
      };
      let res = await fetch(`${this.$API_URL}/news/search_random`, {
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
            viewCount: -1
          }
        }
      };

      let res = await fetch(`${this.$API_URL}/news/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
      if (res.success) {
        this.mostViewedList = res.data.slice(0,3)
      }
    },

    renderDate(date) {
      const formatedDate = new Date(date);
      return formatedDate.toLocaleDateString("en-GB");
    },

    openNews(id) {
      this.$router.push({
        path: `news/${id}`,
      });
    },
    async setPage(page) {
      this.currentPage = page;
      await this.getListData();
      this.$gsap.to(window, { duration: .5, scrollTo: 0 })
    },
  },
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
  height: 530px;
  transition: .5s ease;
}

.latest-news-item:hover {
  cursor: pointer;
  opacity: .8;
}

.heading-img p {
  margin: 0;
}

.heading-img img {
  object-fit: cover;
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

.news-container-main-item:hover {
  cursor: pointer;
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

.most-viewed {
  margin-bottom: 60px;
}

.most-viewed-heading {
  font-size: 22px;
  line-height: 26px;
  padding: 10px 0px 20px 0px;
  margin-bottom: 20px;
  font-weight: 700;
  background: url(~assets/icons/hr-heading-news.png) left bottom no-repeat;
}

/* mobile */
@media screen and (max-width: 739px) {
  .latest-news-item {
    min-height: 300px;
  }
}

/* tablet */
@media screen and (min-width: 740px) and (max-width: 1023px) {
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