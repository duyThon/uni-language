<template>
  <div class="sticky-contact">
    <span id="container">
      <ul class="list-of-info">
        <li style="flex-grow: 1; text-align: center;" class="list-of-info-item facebook">
          <a href="http://www.facebook.com/Anh.Ngu.Quoc.Te.Son.La" target="_blank"><img src="@/assets/icons/social-media-icons/fb-icon-black.png" alt=""></a>
        </li>
        <li style="flex-grow: 1; text-align: center;" class="list-of-info-item zalo">
          <a href="https://zalo.me/0899806226" target="_blank"><img src="@/assets/icons/social-media-icons/zalo-icon-black.png" alt=""></a>
        </li>
        <li style="flex-grow: 8;" class="list-of-info-item hotline">
          <div class="hotline-item">
            <svg fill="#000" class="telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            <span> +84 899 806 226</span>
          </div>
        </li>
      </ul>
      <div class="send-mail">
        <div class="submit">
          Gửi
        </div>
        <div class="input-field">
          <form class="input-field-container">
            <input placeholder="Họ và tên học viên" class="input-field-item full-name" type="text">
            <input placeholder="Năm sinh" class="input-field-item birthyear" type="text">
            <input placeholder="Số điện thoại" class="input-field-item phone-number" type="text">
          </form>
        </div>
      </div>
    </span>
    <span id="fix-sidebar">
      <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z"/></svg>
      <p>Đăng ký tư vấn ngay!</p>
    </span>
  </div>
</template>

<script>
export default {};
</script>



</style>

<style>
.sticky-contact {
  position: fixed;
  bottom: 200px;
  display: flex;
  transform: translateX(-84%);
  transition: all .3s linear;
  z-index: 99;
}

.sticky-contact:hover {
  
  transform: translateX(-0%);
}

#container {
  display: block;
  position: relative;
  width: 300px;
  height: 170px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,.3);
}

#fix-sidebar {
  width: 60px;
  background-color: var(--primary-color);
  border-radius: 0px 30px 30px 0px;
  box-shadow: 0 2px 10px rgba(0,0,0,.3);
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
}

#fix-sidebar p {
  padding: 0 13px
}

#fix-sidebar svg {
  margin-top: 12px;
  height: 30px;
}

.list-of-info {
  display: flex;
  flex-direction: row;
  list-style: none;
  border-bottom: 3px solid #3333333b;
  padding-bottom: 6px;
  padding: 6px 0;
  margin: 0;
  height: calc(30% - 12px - 2px);
}

.list-of-info-item img{
  width: 30px;
  margin: 6px
}

.hotline {
    display: flex;
    align-items: center;
    justify-content: center;
}

.hotline-item {
  display: flex;
  align-items: center;
  padding: 5px 20px;
  border: 1px solid #333;
  border-radius: 20px;
}

.hotline-item svg {
  margin-right: 6px;
}

.send-mail {
  display: flex;
  height: 70%;
}

.submit {
  text-align: center;
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  color: #fff;
}

.input-field {
  width: 80%;
}

.input-field-container {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.input-field-item {
  padding: 8px;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 90%;
}

/* tablet and mobile */
@media (max-width: 63.9375em) {
  .sticky-contact {
    display: none;
  }
}


</style>