<template>
    <nav>
        <div class="main-navbar" style="padding: 1.25em;">
            <div class="uni-logo">
                <img class="homepage-logo-img" src="@/assets/logo/logo-uni-ngang-2.png" alt="UNI Language House">
            </div>
            <div class="main-navbar-list">
                <el-menu style="margin: 0"
                    mode="horizontal"
                    @select="handleSelect"
                    text-color="var(--text-color)">
                    <el-menu-item index="1">GIỚI THIỆU</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">KHÓA HỌC</template>
                        <el-menu-item index="2-1">Khóa giao tiếp tiêu chuẩn Cambridge</el-menu-item>
                        <el-submenu index="2-4">
                        <template slot="title">Khóa học chuyên sâu ngắn hạn</template>
                        <el-menu-item index="2-4-1">Khóa học steam tiếng anh</el-menu-item>
                        <el-menu-item index="2-4-2">Khóa học thuyết trình</el-menu-item>
                        <el-menu-item index="2-4-3">Khóa học tranh biện</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3-4">
                        <template slot="title">Khóa luyện thi</template>
                        <el-menu-item index="3-4-1">Khóa luyện thi IELT</el-menu-item>
                        <el-menu-item index="3-4-2">Khóa luyện thi ngữ pháp</el-menu-item>
                        <el-menu-item index="3-4-3">Khóa luyện thi chuyển cấp</el-menu-item>
                        <el-menu-item index="3-4-4">Khóa luyện thi TOEIC</el-menu-item>
                        <el-menu-item index="3-4-5">Khóa luyện thi Cambridge</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="3">SỰ KIỆN</el-menu-item>
                    <el-menu-item index="3">TIN TỨC</el-menu-item>
                    <el-menu-item index="3">HỌC VIÊN XUẤT SẮC</el-menu-item>
                    <el-menu-item index="3">THI THỬ</el-menu-item>
                </el-menu>
                <div class="switch-language">
                    <ul class="nation-logo">
                        <li class="nation-logo-item">
                            <img src="@/assets/icons/nation-logo/vietnam-flag-rounded-icon.webp" alt="Vietnamese">
                        </li>
                        <li class="nation-logo-item">
                            <img src="@/assets/icons/nation-logo/uk-flag-rounded-icon.webp" alt="English">
                        </li>
                    </ul>
                </div>
            </div>
            <label for="nav-mobile-input" class="main-navbar-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </label>
        </div>
        <input hidden type="checkbox" id="nav-mobile-input">
        <label for="nav-mobile-input" class="nav-overlay"></label>
        <div class="main-navbar-list-moblie">
            <div class="main-navbar-list-moblie-close">
                <span>MENU</span>
                <label for="nav-mobile-input" >
                    <svg fill="#333" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </label>
            </div>
            <el-menu style="margin: 30px 0 0 0"
                mode="el-menu-vertical-demo"
                @select="handleSelect"
                text-color="var(--text-color)">
                <el-menu-item index="1">GIỚI THIỆU</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">KHÓA HỌC</template>
                    <el-menu-item index="2-1">Khóa giao tiếp tiêu chuẩn Cambridge</el-menu-item>
                    <el-submenu index="2-4">
                    <template slot="title">Khóa học chuyên sâu ngắn hạn</template>
                    <el-menu-item index="2-4-1">Khóa học steam tiếng anh</el-menu-item>
                    <el-menu-item index="2-4-2">Khóa học thuyết trình</el-menu-item>
                    <el-menu-item index="2-4-3">Khóa học tranh biện</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3-4">
                    <template slot="title">Khóa luyện thi</template>
                    <el-menu-item index="3-4-1">Khóa luyện thi IELT</el-menu-item>
                    <el-menu-item index="3-4-2">Khóa luyện thi ngữ pháp</el-menu-item>
                    <el-menu-item index="3-4-3">Khóa luyện thi chuyển cấp</el-menu-item>
                    <el-menu-item index="3-4-4">Khóa luyện thi TOEIC</el-menu-item>
                    <el-menu-item index="3-4-5">Khóa luyện thi Cambridge</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3">SỰ KIỆN</el-menu-item>
                <el-menu-item index="3">TIN TỨC</el-menu-item>
                <el-menu-item index="3">HỌC VIÊN XUẤT SẮC</el-menu-item>
                <el-menu-item index="3">THI THỬ</el-menu-item>
            </el-menu>
            <div class="switch-language-mobile">
                <div class="switch-language-mobile-title">NGÔN NGỮ</div>
                <ul class="nation-logo-mobile">
                    <li class="nation-logo-item-mobile">
                        <img src="@/assets/icons/nation-logo/vietnam-flag-rounded-icon.webp" alt="Vietnamese">
                    </li>
                    <li class="nation-logo-item-mobile">
                        <img src="@/assets/icons/nation-logo/uk-flag-rounded-icon.webp" alt="English">
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
        }
    },

    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
.main-navbar {
    z-index: 99;
    position: fixed;
    top: 0;
    width: 100%;
    font-weight: 600;
    padding: 0.25rem 1.25rem;
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

.el-menu-item:hover  {
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

.nation-logo-item img{
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
    background-color: rgba(0, 0, 0, .3);
    display: none;
    z-index: 101;
    animation: fadeIn linear .2s;
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

.el-dropdown-menu__item{
    font-weight: 500;
}

.el-dropdown-menu__item:hover {
    background-color: #282e6599 !important;
    color: #fff!important;
}

/* mobile nav */
.main-navbar-btn {
    display: none;
}

.main-navbar-list-moblie {
    position: fixed;
    top:0;
    right:0;
    bottom: 0;
    width: 320px;
    max-width: 100%;
    z-index: 100;
    background-color: #fff;
    font-weight: 500;
    z-index: 102;
    transform: translateX(100%);
    opacity: 0;
    transition: all .2s linear;
}

.main-navbar-mobile {
    display: block;
}

.switch-language-mobile {
    border-top: 2px solid var(--primary-color);
}

.switch-language-mobile-title {
    margin-top: 20px;
    padding: 0 20px
}

.nation-logo-mobile {
    padding: 0 20px;
    list-style-type: none;
    display: flex;
}

.nation-logo-item-mobile img{
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
    border-bottom:3px solid var(--primary-color) ;
    padding: 20px;
    font-weight: 600;
}

.main-navbar-list-moblie-close svg{
    position: absolute;
    top: 14px;
    right: 10px;
    width: 20px;
}

#nav-mobile-input:checked ~ .nav-overlay {
    display: block;
}

#nav-mobile-input:checked ~ .main-navbar-list-moblie{
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
    }

    .main-navbar-btn {
        display: flex;
        padding: 40px 40px 40px 0
    }

    .main-navbar-btn svg{
        width: 1.75em;
    }

    .main-navbar-list ul {
        display: none;
    }
}

/* tablet */
@media (min-width: 46.25em) and (max-width: 63.9375em){
}

</style>