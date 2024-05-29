<template>
  <nav>
    <div class="main-navbar">
      <div class="uni-logo">
        <router-link to="/">
          <img
            class="homepage-logo-img"
            src="@/assets/logo/logo-uni-ngang-2.png"
            alt="UNI Language House"
          />
        </router-link>
      </div>
      <div class="main-navbar-list">
        <el-menu
          style="margin: 0"
          mode="horizontal"
          @select="handleSelect"
          text-color="var(--text-color)"
        >
          <el-menu-item index="1">
            <div @click="routerTo('about')" > GIỚI THIỆU </div>
          </el-menu-item>
          <el-menu-item index="1">
            <a @click="scrollToFooter(false)">LIÊN HỆ</a>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">KHÓA HỌC</template>
            <div style="padding: 10px; font-weight: 600; font-size: 15px">
              Khóa học chính
            </div>
            <el-menu-item index="1-1">
              <div @click="routerTo('kindergarten-course')" >
                Tiếng anh mầm non
              </div>
            </el-menu-item>
            <el-menu-item index="1-2">
              <div @click="routerTo('primary-course')" >
                Tiếng anh tiểu học
              </div>
            </el-menu-item>
            <el-menu-item index="1-3">
              <div @click="routerTo('secondary-course')" > Tiếng anh THCS </div>
            </el-menu-item>
            <el-menu-item index="1-4">
              <div @click="routerTo('ielts')" > Tiếng anh luyện thi IELTS </div>
            </el-menu-item>
            <div style="padding: 10px; font-weight: 600; font-size: 15px">
              Khóa học chuyên biệt
            </div>
            <el-menu-item index="2-1">
              <div @click="routerTo('storytelling-course')" >
                Khóa học kể chuyện
              </div>
            </el-menu-item>
            <el-menu-item index="2-2">
              <div @click="routerTo('steam-course')" > Khóa học Steam </div>
            </el-menu-item>
            <el-menu-item index="2-3">
              <div @click="routerTo('presentation-course')" >
                Khóa học thuyết trình
              </div>
            </el-menu-item>
            <el-menu-item index="2-4">
              <div @click="routerTo('toeic')" > Khóa học luyện thi TOEIC </div>
            </el-menu-item>
            <el-menu-item index="2-5">
              <div @click="routerTo('grammar-course')">
                Khóa học bổ ngữ âm - ngữ pháp
              </div>
            </el-menu-item>
            <el-menu-item index="2-6">
              <div @click="routerTo('transition-course')">
                Khóa học luyện thi chuyển cấp
              </div>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="3">
            <div @click="routerTo('news')"> TIN TỨC & SỰ KIỆN </div>
          </el-menu-item>
          <el-menu-item index="4">
            <div @click="routerTo('hall-of-fame')"> HỌC VIÊN XUẤT SẮC </div>
          </el-menu-item>
          <el-menu-item index="5">
            <div @click="routerTo('online-testing')"> THI THỬ </div>
          </el-menu-item>
        </el-menu>
        <!-- <div class="switch-language">
          <ul class="nation-logo">
            <li
              v-for="locale in supportedLocales"
              :key="locale.code"
              :value="locale.code"
              class="nation-logo-item"
              @click="changeLang(locale.code)"
            >
              {{locale.code}}
            </li>
          </ul>
        </div> -->
        <!-- {{selectedLanguage}} -->
        <!-- <button @click="switchLanguage">Switch Language</button> -->

      </div>
      <label for="nav-mobile-input" class="main-navbar-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </label>
    </div>
    <input
      hidden
      type="checkbox"
      id="nav-mobile-input"
      v-model="checkboxState"
    />
    <label for="nav-mobile-input" class="nav-overlay"></label>
    <div style="overflow: scroll" class="main-navbar-list-moblie">
      <div class="main-navbar-list-moblie-close">
        <span>MENU</span>
        <label for="nav-mobile-input">
          <svg
            fill="#333"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </label>
      </div>
      <el-menu
        style="margin: 30px 0 0 0"
        mode="el-menu-vertical-demo"
        @select="handleSelect"
        text-color="var(--text-color)"
      >
        <el-menu-item index="1">
          <div @click="routerTo('about',true)" >
            GIỚI THIỆU
          </div>
        </el-menu-item>
        <el-menu-item index="1">
          <a @click="scrollToFooter(true)">LIÊN HỆ</a>
        </el-menu-item>
        <el-submenu index="2">
          <template  slot="title"><div style="padding: 0 10px">KHÓA HỌC</div></template>
          <div style="padding: 10px; font-weight: 600; font-size: 15px">
            Khóa học chính
          </div>
          <el-menu-item index="1-1">
            <div @click="routerTo('kindergarten-course',true)" >
              Tiếng anh mầm non
            </div>
          </el-menu-item>
          <el-menu-item index="1-2">
            <div @click="routerTo('primary-course',true)" >
              Tiếng anh tiểu học
            </div>
          </el-menu-item>
          <el-menu-item index="1-3">
            <div @click="routerTo('secondary-course',true)" >
              Tiếng anh THCS
            </div>
          </el-menu-item>
          <el-menu-item index="1-4">
            <div @click="routerTo('ielts',true)" >
              Tiếng anh luyện thi IELTS
            </div>
          </el-menu-item>
          <div style="padding: 10px; font-weight: 600; font-size: 15px">
            Khóa học chuyên biệt
          </div>
          <el-menu-item index="2-1">
            <div @click="routerTo('storytelling-course',true)" >
              Khóa học kể chuyện
            </div>
          </el-menu-item>
          <el-menu-item index="2-2">
            <div @click="routerTo('steam-course', true)" >
              Khóa học Steam
            </div>
          </el-menu-item>
          <el-menu-item index="2-3">
            <div @click="routerTo('presentation-course', true)" >
              Khóa học thuyết trình
            </div>
          </el-menu-item>
          <el-menu-item index="2-4">
            <div @click="routerTo('toeic',true)" >
              Khóa học luyện thi TOEIC
            </div>
          </el-menu-item>
          <el-menu-item index="2-5">
            <div @click="routerTo('grammar-course',true)">
              Khóa học bổ ngữ âm - ngữ pháp
            </div>
          </el-menu-item>
          <el-menu-item index="2-6">
            <div @click="routerTo('transition-course',true)">
              Khóa học luyện thi chuyển cấp
            </div>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <div @click="routerTo('news',true)">
            TIN TỨC & SỰ KIỆN
          </div>
        </el-menu-item>
        <el-menu-item index="4">
          <div @click="routerTo('hall-of-fame',true)">
            HỌC VIÊN XUẤT SẮC
          </div>
        </el-menu-item>
        <el-menu-item @click="unCheckToChangePage" index="5">
          <div @click="routerTo('online-testing',true)"> THI THỬ </div>
        </el-menu-item>
      </el-menu>
      

      <!-- <div class="switch-language-mobile">
        <div class="switch-language-mobile-title">NGÔN NGỮ</div>
        <ul class="nation-logo-mobile">
          <li class="nation-logo-item-mobile">
            <img
              @click="changeLang('vi', true)"
              src="@/assets/icons/nation-logo/vietnam-flag-rounded-icon.webp"
              alt="Vietnamese"
            />
          </li>
          <li class="nation-logo-item-mobile">
            <img
              @click="changeLang('en', true)"
              src="@/assets/icons/nation-logo/uk-flag-rounded-icon.webp"
              alt="English"
            />
          </li>
        </ul>
      </div> -->
    </div>
  </nav>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      checkboxState: false,
    };
  },

  computed: {
    supportedLocales() {
      // return this.$i18n.locales;
    },

    // selectedLanguage() {
    //   return this.$store.state.language
    // },

  },

  created() {
    // console.log(this.$store.state);
  },

  methods: {
    handleSelect(key, keyPath) {
    },

    // switchLanguage() {
    //   const newLanguage = this.$i18n.language === 'en' ? 'vi' : 'en';
    //   this.$store.commit('setLanguage', newLanguage);
    // },


    routerTo(router,isMobile) {
      this.$router.push({ 
        path: `/${router}`
      });
      if (isMobile) {
        this.unCheckToChangePage();
      }
    },

    unCheckToChangePage() {
      this.checkboxState = !this.checkboxState;
    },

    scrollToFooter(isMobile) {
      this.$gsap.to(window, { duration: 1, scrollTo: "#footer" });
      if (isMobile) {
        this.unCheckToChangePage();
      }
    },
  },
};
</script>

<style scoped>
.main-navbar {
  z-index: 99;
  position: fixed;
  top: 0;
  width: -moz-available;
  width: -webkit-fill-available;
  font-weight: 600;
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(255, 255, 255);
  height: 40px;
  /* backdrop-filter: blur(5px); */
}

.homepage-logo-img {
  position: fixed;
  /* height: 141px;
    top: 26px;
    position: fixed; */
  /* height: 141px; */
  top: 0px;
  height: 70px;
  /* height: 4em; */
}

.main-navbar-list {
  display: flex;
}
/* list css */
.main-navbar-list ul {
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.el-menu-item {
  padding: 0 30px;
}

.el-menu-item:hover {
  border-bottom: 0.175em solid var(--primary-color) !important;
}

.el-submenu.is-opened {
  border-bottom: 0.175em solid var(--primary-color) !important;
}

/* nation css */
.switch-language {
  display: flex;
  margin-right: 34px;
}

.nation-logo {
  padding: 0;
}

.nation-logo-item img {
  width: 1.75em;
  height: 1.75em;
  cursor: pointer;
  margin: 0.25em;
  border: 2px solid #fff;
}

.nation-logo-item img:hover {
  border: 2px solid var(--primary-color);
  border-radius: 50%;
}

/* overlay */
.nav-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
  z-index: 101;
  animation: fadeIn linear 0.2s;
}

.main-navbar-mobile {
  display: none;
}

.arrow-down {
  width: 0.65em;
}

.el-dropdown {
  color: #333;
  font-size: 1em;
}

.el-dropdown-menu__item {
  font-weight: 500;
}

.el-dropdown-menu__item:hover {
  background-color: #282e6599 !important;
  color: #fff !important;
}

/* mobile nav */
.main-navbar-btn {
  display: none;
}

.main-navbar-list-moblie {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 260px;
  max-width: 100%;
  z-index: 100;
  background-color: #fff;
  font-weight: 500;
  z-index: 102;
  transform: translateX(100%);
  opacity: 0;
  transition: all 0.2s linear;
}

.main-navbar-mobile {
  display: block;
}

.switch-language-mobile {
  border-top: 2px solid var(--primary-color);
}

.switch-language-mobile-title {
  margin-top: 20px;
  padding: 0 20px;
}

.nation-logo-mobile {
  padding: 0 20px;
  list-style-type: none;
  display: flex;
}

.nation-logo-item-mobile img {
  width: 1.75em;
  height: 1.75em;
  cursor: pointer;
  margin: 0.25em;
  border: 2px solid #fff;
}

.nation-logo-item-mobile img:hover {
  border: 2px solid var(--primary-color);
  border-radius: 50%;
}

.main-navbar-list-moblie-close {
  padding-bottom: 10px;
  border-bottom: 3px solid var(--primary-color);
  padding: 20px;
  font-weight: 600;
}

.main-navbar-list-moblie-close svg {
  position: absolute;
  top: 14px;
  right: 10px;
  width: 20px;
}

#nav-mobile-input:checked ~ .nav-overlay {
  display: block;
}

#nav-mobile-input:checked ~ .main-navbar-list-moblie {
  transform: translateX(0%);
  opacity: 1;
}

/* tablet & mobile */
@media (max-width: 63.9375em) {
  nav {
    display: flex;
  }

  .main-navbar {
    width: 100%;
    padding: 20px 15px;
  }

  .main-navbar-btn {
    display: flex;
    padding: 40px 40px 40px 0;
  }

  .main-navbar-btn svg {
    width: 1.75em;
  }

  .main-navbar-list ul {
    display: none;
  }

  .el-submenu__title {
    padding: 0 30px;
  }
}

/* tablet */
@media screen and (min-width: 740px) and (max-width: 1023px) {
}
</style>