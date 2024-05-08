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
        <el-button type="primary" @click="dialog = false">Xin cảm ơn</el-button>
      </span>
    </el-dialog>

    <el-tabs v-model="tabName" tab-position="left">
      <el-tab-pane label="Tin tức và sự kiện">
        <h1 style="text-align: center; font-size: 40px">Tin tức và sự kiện</h1>
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
            <!-- <ckeditor
              v-model="viContent"
              placeholder="Nhập nội dung Tin tức và sự kiện"
              :config="editorConfig"
            /> -->
            <Editor
              api-key="ut7fjjlpkmogxx60bmoats48gwzbqa1b8hzmvehbozmzpcc5"
              :init="myInit"
            />
            <!-- <textarea ref="editor"></textarea> -->
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
            <!-- <ckeditor
              v-model="enContent"
              placeholder="Nhập nội dung Tin tức và sự kiện"
            /> -->
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
            <!-- <ckeditor
              v-model="viContent"
              placeholder="Nhập nội dung Tin tức và sự kiện"
            /> -->
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
            <!-- <ckeditor
              v-model="enContent"
              placeholder="Nhập nội dung Tin tức và sự kiện"
            /> -->
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
import Editor from '@tinymce/tinymce-vue'

export default {
  name: "app",

  middleware({ $axios }) {
    console.log('Middleware is working!');
    $axios.onRequest(config => {
      if (config.method === 'OPTIONS') {
        config.method = 'POST';
      }
      return config;
    });
  },

  components: {
    Editor
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
      apiUrl: process.env.API_URL,
      dialog: false,
      myInit: {
        selector: 'textarea',
        plugins: 'advlist link image lists',
        images_upload_url: 'http://unilanguagesonla.com/api/media/upload',
        automatic_uploads: true,
        images_upload_handler: this.imgHandler

      }
    };
  },

  mounted() {
    this.initTinyMCE();
  },

  methods: {
    async saveContent() {
      const body = {
        titleVn: this.viTitle,
        descriptionVn: this.viContent,
        titleEn: this.enTitle,
        descriptionEn: this.enContent,
        summaryVn: this.viSummary,
        summaryEn: this.enSummary,
        tags: this.tabName == 0 ? ["news"] : ["hof"],
      };
      console.log(body);
      let res = await fetch(`${this.apiUrl}/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => res.json());
      if (res.success) {
        this.dialog = true;
        // this.$router.push({
        //   path: `/news`
        // });
      }
    },

    initTinyMCE() {
      const exampleImageUploadHandler = (blobInfo, progress, success, failure) => {
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open('POST', 'http://unilanguagesonla.com/api/media/upload');

        xhr.upload.onprogress = (e) => {
          progress(e.loaded / e.total * 100);
        };

        xhr.onload = () => {
          if (xhr.status === 403) {
            failure('HTTP Error: ' + xhr.status, { remove: true });
            return;
          }

          if (xhr.status < 200 || xhr.status >= 300) {
            failure('HTTP Error: ' + xhr.status);
            return;
          }

          const json = JSON.parse(xhr.responseText);

          if (!json || typeof json.location != 'string') {
            failure('Invalid JSON: ' + xhr.responseText);
            return;
          }

          success(json.location);
        };

        xhr.onerror = () => {
          failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
        };

        const formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());

        xhr.send(formData);
      };

      // this.tinymce.init({
      //   selector: 'textarea',
      //   plugins: 'image',
      //   toolbar: 'image',
      //   images_upload_handler: exampleImageUploadHandler,
      //   setup: (editor) => {
      //     this.$refs.editor.editor = editor;
      //     editor.on('change', () => {
      //       // emit event if you need to pass the content somewhere
      //       this.$emit('input', editor.getContent());
      //     });
      //   }
      // });
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