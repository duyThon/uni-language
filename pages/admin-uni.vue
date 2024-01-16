<template>
    <div class="container">
      <el-row :gutter="20">
        <el-col :lg="4">
          <!-- <el-tabs tab-position="left">
            <el-tab-pane>
              <h3>Tin tức và sự kiện</h3>
            </el-tab-pane>
            <el-tab-pane>
              <h3>Học viên xuất sắc</h3>
            </el-tab-pane>
          </el-tabs> -->
          {{this.title}}
        </el-col>
        <!-- <el-col :lg="" -->
          
                            <p>{{ $t('hello') }}</p>
      </el-row>
      <ckeditor
        v-model="content"
      />

      <p>{{this.content}}</p>
      <button @click="saveContent">Save</button>
  </div>
</template>

<script>
import Ckeditor from "@/components/common/ckeditor.vue";
    export default {
        name: 'app',
        data() {
            return {
                content: '',
                title: 'Tin tức và sự kiện',
                editorConfig: {
                },
            };
        },
        components: {Ckeditor},
        methods: {
          saveContent () {
          
          }
        }
    }
</script>