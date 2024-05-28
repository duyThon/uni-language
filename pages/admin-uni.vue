<template>
  <div style="margin: 20px 80px" class="container">
    <div style="text-align: center" class="admin-logo">
      <img
        style="width: 350px"
        src="@/assets/logo/logo-uni-ngang-2.png"
        alt=""
      />
    </div>

    <!-- popup success -->
    <el-dialog title="Thông báo" :visible.sync="dialog" width="30%">
      <div style="display: flex; align-items: center; flex-direction: column">
        <img
          style="width: 150px"
          src="@/assets/icons/success-icon.png"
          alt=""
        />
        <h3>Bài viết của bạn đã được tải lên thành công</h3>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="changeRouter">Xin cảm ơn</el-button>
      </span>
    </el-dialog>

    <el-tabs v-model="tabName" tab-position="left">
      <el-tab-pane label="Tin tức và sự kiện">
        <h1 style="text-align: center; font-size: 40px">Tin tức và sự kiện</h1>
        <h3 style="font-size: 26px" class="admin-title">Ảnh tiêu đề</h3>
        <client-only>
            <Editor
              id="titleImg"
              api-key="ut7fjjlpkmogxx60bmoats48gwzbqa1b8hzmvehbozmzpcc5"
              output-format="text"
              :init="myInit"
            />
          </client-only>
        <el-tabs type="border-card">
          <el-tab-pane label="Tiếng Việt">
            <h3 style="font-size: 26px" class="admin-title">
              Tiêu đề bằng tiếng việt
            </h3>
            <input
              v-model="viTitle"
              class="admin-input title-input"
              type="text"
            />
            <h3 style="font-size: 26px" class="admin-content">
              Nội dung bài viết bằng tiếng việt
            </h3>
            <client-only>
            <Editor
              id="newsViContent"
              api-key="ut7fjjlpkmogxx60bmoats48gwzbqa1b8hzmvehbozmzpcc5"
              output-format="text"
              :init="myInit"
            />
            </client-only>
            <h3 style="font-size: 26px" class="admin-title">
              Tóm tắt nội dung bằng tiếng việt
            </h3>
            <textarea
              v-model="viSummary"
              class="admin-input summary-input"
              type="text"
              maxlength="200"
            />
          </el-tab-pane>
          <el-tab-pane label="English">
            <h3 style="font-size: 26px" class="admin-title">
              Tiêu đề bằng tiếng anh
            </h3>
            <input
              v-model="enTitle"
              class="admin-input title-input"
              type="text"
            />
            <h3 style="font-size: 26px" class="admin-content">
              Nội dung bài viết bằng tiếng anh
            </h3>
            <Editor
              id="newsEnContent"
              api-key="ut7fjjlpkmogxx60bmoats48gwzbqa1b8hzmvehbozmzpcc5"
              output-format="text"
              :init="myInit"
              v-model="enContent"
            />
            <h3 style="font-size: 26px" class="admin-title">
              Tóm tắt nội dung bằng tiếng anh
            </h3>
            <textarea
              v-model="enSummary"
              class="admin-input summary-input"
              type="text"
              maxlength="200"
            />
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="Học viên xuất sắc">
        <h1 style="text-align: center; font-size: 40px">Học viên xuất sắc</h1>
        <h3 style="font-size: 26px" class="admin-title">Ảnh tiêu đề</h3>
        <client-only>
            <Editor
              id="titleImg"
              api-key="ut7fjjlpkmogxx60bmoats48gwzbqa1b8hzmvehbozmzpcc5"
              output-format="text"
              :init="myInit"
            />
          </client-only>
        <el-tabs type="border-card">
          <el-tab-pane label="Tiếng Việt">
            <h3 style="font-size: 26px" class="admin-title">
              Tiêu đề bằng tiếng việt
            </h3>
            <input
              v-model="viTitle"
              class="admin-input title-input"
              type="text"
            />
            <h3 style="font-size: 26px" class="admin-content">
              Nội dung bài viết bằng tiếng việt
            </h3>
            <Editor
              id="hofViContent"
              api-key="ut7fjjlpkmogxx60bmoats48gwzbqa1b8hzmvehbozmzpcc5"
              output-format="text"
              :init="myInit"
            />
            <h3 style="font-size: 26px" class="admin-title">
              Tóm tắt nội dung bằng tiếng việt
            </h3>
            <textarea
              v-model="viSummary"
              class="admin-input summary-input"
              type="text"
              maxlength="200"
            />
          </el-tab-pane>
          <el-tab-pane label="English">
            <h3 style="font-size: 26px" class="admin-title">
              Tiêu đề bằng tiếng anh
            </h3>
            <input
              v-model="enTitle"
              class="admin-input title-input"
              type="text"
            />
            <h3 style="font-size: 26px" class="admin-content">
              Nội dung bài viết bằng tiếng anh
            </h3>
            <Editor
              id="hofEnContent"
              api-key="ut7fjjlpkmogxx60bmoats48gwzbqa1b8hzmvehbozmzpcc5"
              output-format="text"
              :init="myInit"
              v-model="enContent"
            />
            <h3 style="font-size: 26px" class="admin-title">
              Tóm tắt nội dung bằng tiếng anh
            </h3>
            <textarea
              v-model="viSummary"
              class="admin-input summary-input"
              type="text"
              maxlength="200"
            />
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <div>
        <button style="display: flex" class="save-btn" @click="saveContent">
          Đăng bài
        </button>
      </div>
    </el-tabs>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "app",

  middleware({ $axios }) {
    console.log("Middleware is working!");
    $axios.onRequest((config) => {
      if (config.method === "OPTIONS") {
        config.method = "POST";
      }
      return config;
    });
  },

  components: {
    Editor,
  },

  data() {
    return {
      viContent: "",
      enContent: "",
      viTitle: "",
      enTitle: "",
      viSummary: "",
      enSummary: "",
      title: "Tin tức và sự kiện",
      tabName: "",
      // apiUrl: process.env.API_URL,
      dialog: false,
      myInit: {
        height: 500,
        selector: "textarea",
        plugins: "advlist link image lists",
        toolbar: "image",
        images_upload_url: "https://unilanguagesonla.com/api/media/upload",
        automatic_uploads: true,
        images_upload_handler: function (blobInfo, success, failure) {
          let xhr, formData;

          xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open("POST", "https://unilanguagesonla.com/api/media/upload");

          xhr.onload = function () {
            let json;

            if (xhr.status !== 200) {
              failure("HTTP Error: " + xhr.status);
              return;
            }

            json = JSON.parse(xhr.responseText);

            if (!json || typeof json.data.url !== "string") {
              failure("Invalid JSON: " + xhr.responseText);
              return;
            }

            let imageUrl = json.data.url;
            success(json.data.url);
            tinymce.activeEditor.insertContent(
              '<img src="' +
                imageUrl +
                '" style="width: 100%; height: auto;" />'
            );
          };

          formData = new FormData();
          formData.append("file", blobInfo.blob(), blobInfo.filename());
          xhr.send(formData);
        },
      },
    };
  },

  mounted() {
    if(!localStorage.getItem("login")) {
      this.$router.push({
        path: `/login`
      });
    }
  },

  unmounted() {
    localStorage.removeItem("login");
  },

  methods: {
    async saveContent() {
      if(this.tabName == 0) {
        this.viContent = tinyMCE.get('newsViContent').getContent();
        this.enContent = tinyMCE.get('newsEnContent').getContent();
      } else {
        this.viContent = tinyMCE.get('hofViContent').getContent();
        this.enContent = tinyMCE.get('hofEnContent').getContent();
      }
      let titleImage = tinyMCE.get('titleImg').getContent();
      const body = {
        titleImage: titleImage,
        titleVn: this.viTitle,
        descriptionVn: this.viContent,
        titleEn: this.enTitle,
        descriptionEn: this.enContent,
        summaryVn: this.viSummary,
        summaryEn: this.enSummary,
        tags: this.tabName == 0 ? ["news"] : ["hof"],
      };
      console.log(body);
      let res = await fetch(`${this.$API_URL}/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => res.json());
      if (res.success) {
        this.dialog = true;
        
      }
    },

    changeRouter() {
      this.dialog = false
      if(this.tabName == 0) {
        this.$router.push({
          path: `/news`
        });
      } else {
        this.$router.push({
          path: `/hall-of-fame`
        });
      }
    }

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
  min-height: 80px;
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