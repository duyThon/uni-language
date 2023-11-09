<template>
  <div id="banner-form">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="rule-form" label-width="0px" class="rule-form">
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :lg="8">
                <el-form-item prop="name">
                    <el-input placeholder="Họ và tên học viên" v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item prop="birthyear">
                    <el-input placeholder="Năm sinh" v-model="ruleForm.birthyear"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="8">
                <el-form-item prop="phoneNo">
                    <el-input placeholder="Số điện thoại" v-model="ruleForm.phoneNo"></el-input>
                </el-form-item>
                <el-form-item prop="mail">
                    <el-input placeholder="Email (Nếu có)" v-model="ruleForm.mail"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="8">
                <div class="btn-sign-up">
                    <a href="#">ĐĂNG KÝ TƯ VẤN</a>
                </div>
            </el-col>
        </el-row>        
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                name: '',
                birthyear: '',
                phoneNo: '',
                mail: ''
            },
            rules: {
                name: [
                    { required: true, message: 'Hãy nhập tên của mình bạn nhé', trigger: 'blur' }
                ],
                birthyear: [
                    { required: true, message: 'Hãy nhập năm sinh của mình bạn nhé', trigger: 'blur' }
                ],
                phoneNo: [
                    { required: true, message: 'Hãy nhập số điện thoại của mình hoặc của phụ huynh bạn nhé', trigger: 'blur' }
                ]
            }
        }
    }
}
</script>

<style>

#banner-form {
    background: #eee;
    padding: 30px 30px 0;
    border-radius: 30px;
    position: absolute;
    width: 960px;
    bottom: -150px;
}

::-ms-input-placeholder { /* Edge 12-18 */
  color: #000 !important;
}

::placeholder {
  color: #000 !important;
}

.el-input input {
    border: none;
    border-bottom: 1px solid #000000;
    background: transparent;
    /* margin-bottom: 20px; */
    color: #000;
    font-size: 18px;
}

.el-form-item {
    margin-bottom: 40px;
}

@media (max-width: 63.9375em) {
    #banner-form {
        width: 90%;
        bottom: -450px;
    }
 }

</style>