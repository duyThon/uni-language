<template>
  <div>
    <div id="fb-root"></div>

    <!-- Your Plugin chat code -->
    <div id="fb-customer-chat" class="fb-customerchat"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    // Set page_id and attribution
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "389813157754107");
    chatbox.setAttribute("attribution", "biz_inbox");

    // Initialize Facebook SDK
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    };

    // Load Facebook SDK asynchronously
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
};
</script>
