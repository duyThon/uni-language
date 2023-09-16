<template>
  <div class="footer">
    <el-row :gutter="20">
      <el-col class="footer-info" :xs="24" :sm="8" :lg="8">
        <img class="homepage-logo-img" src="@/assets/logo/logo-uni-kem-slogan-doc-white.png" alt="UNI Language House">
        <div class="social-media">
          <div class="social-media-icon">
            <a href="http://www.facebook.com/Anh.Ngu.Quoc.Te.Son.La" target="_blank"><img src="@/assets/icons/social-media-icons/fb-icon.png" alt="">facebook.com/Anh.Ngu.Quoc.Te.Son.La</a>
            <a href="http://www.facebook.com/Anh.Ngu.Quoc.Te.Son.La" target="_blank"><img src="@/assets/icons/social-media-icons/gmail-icon.png" alt="">unilanguagesonla1@gmail.com</a>
            <a href="http://www.facebook.com/Anh.Ngu.Quoc.Te.Son.La" target="_blank"><img src="@/assets/icons/social-media-icons/zalo-icon.png" alt="">Uni Customer Care</a>
          </div>
          <div class="tel">
            <svg fill="#fff" class="telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            <span> +84 398 185 925</span>
          </div>
        </div>
      </el-col>
      <el-col class="footer-info" :xs="24" :sm="8" :lg="8">
        <div class="" style="background-color:rgba(255,255,255,0.3);width:100%;height:500px">giới thiệu</div>
        <!-- <img class="homepage-logo-img" src="@/assets/logo/logo-uni-kem-slogan-doc-white.png" alt="UNI Language House"> -->
      </el-col>
      <el-col class="footer-info" :xs="24" :sm="8" :lg="8">
        <div class="" style="background-color:rgba(255,255,255,0.3); width:100%;height:500px">khóa học</div>
        <!-- <img class="homepage-logo-img" src="@/assets/logo/logo-uni-kem-slogan-doc-white.png" alt="UNI Language House"> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer {
  padding: 1.25em;
  background-color: var(--primary-color);
}

.footer-info img {
  width:200px
}

/* social media */
.social-media-icon {
  display: flex;
  flex-direction: column;
  
}

.social-media-icon a {
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 12px;
}

.social-media img{
  width: 1.875em;
  margin: 6px
}

.social-media-icon a:hover {
  opacity: .5;
}

.tel {
  border: 3px solid #fff;
  width: 192px;
  border-radius: 18px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
}

.tel span {
  display: flex;
  align-items: center;
  color: #fff;
}

.tel:hover {
  
  animation: fadeInTel linear .2s;
  background-color: rgba(255, 255, 255, 0.15);
  cursor: pointer;
}

.telephone {
  width: 24px;
}

@keyframes fadeInTel {
    from {
        opacity: 0.5;
    }
    to {
        opacity: 1;
    }
}
</style>