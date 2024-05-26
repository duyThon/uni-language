<template>
  <div class="online-testing-container">
    <h2 class="online-testing-heading">Đăng Kí Thi Thử Miễn Phí</h2>
    <div class="ot-main">
        <el-row :gutter="20">
            <el-col :xs="24" :sm="16" :lg="16">
                <ul class="benefit">
                    <li class="benefit-item">
                        <svg fill="#1fd655" class="check-icon" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                        <div class="benefit-desc">
                            <p>Áp dụng chương trình giảng dạy theo tiêu chuẩn quốc tế, phù hợp với từng độ tuổi</p>
                        </div>
                    </li>
                    <li class="benefit-item">
                        <svg fill="#1fd655" class="check-icon" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                        <div class="benefit-desc">
                            <p>Đội ngũ giáo viên bản ngữ có kinh nghiệm & đầy đủ bằng cấp giảng dạy</p>
                        </div>
                    </li>
                    <li class="benefit-item">
                        <svg fill="#1fd655" class="check-icon" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                        <div class="benefit-desc">
                            <p>Cơ sở vật chất với tiêu chuẩn cao phù hợp với từng độ tuổi của học sinh</p>
                        </div>
                    </li>
                </ul>
            </el-col>
            <el-col class="online-testing-form" :xs="24" :sm="8" :lg="8">
                <el-form :model="otRuleForm" status-icon :rules="rules" ref="rule-form" label-width="0px" class="ot-rule-form">
                    <el-row :gutter="20">
                        <el-col :xs="24" :sm="24" :lg="24">
                            <el-form-item prop="name">
                                <el-input placeholder="Họ và tên học viên" v-model="otRuleForm.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :lg="24">
                            <el-form-item prop="birthyear">
                                <el-input placeholder="Năm sinh" v-model="otRuleForm.birthyear"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :lg="24">
                            <el-form-item prop="phoneNo">
                                <el-input placeholder="Số điện thoại" v-model="otRuleForm.phoneNo"></el-input>
                            </el-form-item>
                        </el-col>                        
                        <el-col :xs="24" :sm="24" :lg="24">
                            <el-form-item prop="mail">
                                <el-input placeholder="Email (Nếu có)" v-model="otRuleForm.mail"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :lg="24">
                            <div class="btn-confirm">
                                <a href="#">{{ $t('onlineTestingSignUp') }}</a>
                            </div>
                        </el-col>
                    </el-row>        
                </el-form>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            otRuleForm: {
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
    },

    async created() {
    },

    mounted() {
        this.$gsap.to(window, { duration: .5, scrollTo: 0 });
    },

}
</script>

<style scoped>

.online-testing-container {
    padding: 10px 0 90px 0;
    background: #f3f6ff;
}

.ot-main {
    margin: 0 80px;
    padding: 48px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 10px 10px 40px rgba(9,32,76,.2);
}

.online-testing-heading {
    text-align: center;
    font-size: 50px;
    font-weight: bold;
}

.online-testing-form {
    border-left: 1px solid rgba(9,32,76,.1);
}

.benefit {
    list-style: none;
    margin: 0;
    padding: 0;
}

.benefit-item {
    display: flex;
    align-items: center;
    margin: 20px 0;
}


.el-form-item {
    margin-bottom: 20px;
}

.btn-confirm {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .btn-confirm a {
    padding: 15px 30px;
    background: var(--primary-color);
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    display: inline-block;
    border-radius: 30px;
    text-decoration: none;
    text-align: center;
  }
  
  .btn-confirm a:visited {
    transition: all 0.2s ease;
  }

  .benefit-desc p {
    font-size: 20px;
  }

  

/* mobile */
/* < 740px */
@media (max-width: 46.1875em) {
.benefit-desc {
    max-width: 80%;
}
}

/* tablet */
/* > 740px and < 1024px */
@media screen and (min-width: 740px) and (max-width: 1023px){
    
}

/* tablet and moblie */
@media (max-width: 63.9375em) {

    .online-testing-heading {
        font-size: 26px;
    }

    .ot-main {
        margin: 0 20px;
        padding: 20px;
    }

    .benefit-item {
        margin: 10px 0;
    }

    .btn-confirm a {
        font-size: 12px;
    }

}


  

</style>