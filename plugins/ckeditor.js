import Vue from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

Vue.use(CKEditor, {
  editor: ClassicEditor,
});