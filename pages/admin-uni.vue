<template>
  <div style="margin: 20px 80px" class="container">
    <div style="text-align: center" class="admin-logo">
      <img
        style="width: 350px"
        src="@/assets/logo/logo-uni-ngang-2.png"
        alt=""
      />
    </div>
    <el-tabs v-model="tabName" tab-position="left">
      <el-tab-pane label="Tin tức và sự kiện">
        <h1 style="text-align: center; font-size: 40px">Tin tức và sự kiện</h1>
        <el-tabs type="border-card">
          <el-tab-pane label="Tiếng Việt">
            <h3 style="font-size: 26px" class="admin-title">
              Tiêu đề bằng tiếng việt
            </h3>
            <input v-model="viTitle" class="admin-input title-input" type="text" />
            <h3 style="font-size: 26px" class="admin-content">
              Nội dung bài viết bằng tiếng việt
            </h3>
            <ckeditor
              v-model="viContent"
              placeholder="Nhập nội dung Tin tức và sự kiện"
            />
            <h3 style="font-size: 26px" class="admin-title">
              Tóm tắt nội dung bằng tiếng việt
            </h3>
            <textarea v-model="viSummary" class="admin-input summary-input" type="text" maxlength="200"/>

          </el-tab-pane>
          <el-tab-pane label="English">
            <h3 style="font-size: 26px" class="admin-title">
              Tiêu đề bằng tiếng anh
            </h3>
            <input v-model="enTitle" class="admin-input title-input" type="text" />
            <h3 style="font-size: 26px" class="admin-content">
              Nội dung bài viết bằng tiếng anh
            </h3>
            <ckeditor
              v-model="enContent"
              placeholder="Nhập nội dung Tin tức và sự kiện"
            />
            <h3 style="font-size: 26px" class="admin-title">
              Tóm tắt nội dung bằng tiếng anh
            </h3>
            <textarea v-model="enSummary" class="admin-input summary-input" type="text" maxlength="200"/>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="Học viên xuất sắc">
        <h1 style="text-align: center; font-size: 40px">Học viên xuất sắc</h1>
        <el-tabs type="border-card">
          <el-tab-pane label="Tiếng Việt">
            <h3 style="font-size: 26px" class="admin-title">
              Tiêu đề bằng tiếng việt
            </h3>
            <input v-model="viTitle" class="admin-input title-input" type="text" />
            <h3 style="font-size: 26px" class="admin-content">
              Nội dung bài viết bằng tiếng việt
            </h3>
            <ckeditor
              v-model="viContent"
              placeholder="Nhập nội dung Tin tức và sự kiện"
            />
            <h3 style="font-size: 26px" class="admin-title">
              Tóm tắt nội dung bằng tiếng việt
            </h3>
            <textarea v-model="viSummary" class="admin-input summary-input" type="text" maxlength="200"/>
          </el-tab-pane>
          <el-tab-pane label="English">
            <h3 style="font-size: 26px" class="admin-title">
              Tiêu đề bằng tiếng anh
            </h3>
            <input v-model="enTitle" class="admin-input title-input" type="text" />
            <h3 style="font-size: 26px" class="admin-content">
              Nội dung bài viết bằng tiếng anh
            </h3>
            <ckeditor
              v-model="enContent"
              placeholder="Nhập nội dung Tin tức và sự kiện"
            />
            <h3 style="font-size: 26px" class="admin-title">
              Tóm tắt nội dung bằng tiếng việt
            </h3>
            <textarea v-model="viSummary" class="admin-input summary-input" type="text" maxlength="200"/>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <button class="save-btn" @click="saveContent">Save</button>
    </el-tabs>
  </div>
</template>

<script>
import Ckeditor from "@/components/common/ckeditor.vue";
export default {
  name: "app",
  data() {
    return {
      viContent: "",
      enContent: "",
      viTitle: "",
      enTitle: "",
      viSummary: "",
      enSummary: "",
      title: "Tin tức và sự kiện",
      editorConfig: {},
      tabName: "",
      apiUrl: process.env.API_URL
    };
  },
  components: { Ckeditor },

  mounted() {
  },

  methods: {

    async saveContent() {
      const body = {
        titleVn: this.viTitle,
        descriptionVn: this.viContent,
        titleEn: this.enTitle,
        descriptionEn: this.enContent,
        tags: this.tabName == 0 ? ["news"] : ["student"],
      };
      let res = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(body),
      }).then(
          (res) => res.json()
      );
      if(res.success) {
        this.$router.push({ 
          path: `/news`
        });
      }
    },
  },
};
</script>

<style>
.el-tabs__item.is-left {
  font-size: 30px;
  padding: 50px;
}

.admin-input {
  height: 50px;
  font-size: 24px;
  margin-bottom: 30px;
  width: 100%;
}

.summary-input {
  min-height: 150px;
}

.save-btn {
  padding: 15px 30px;
  background: var(--primary-color);
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  display: inline-block;
  border-radius: 30px;
  margin: 30px auto;
  cursor: pointer;
}

.save-btn:hover {
  background: #59acc0;
}
</style>