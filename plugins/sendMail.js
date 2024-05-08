export default ({ app }, inject) => {
    const sendMail = async (studentData) => {
        let data = {
            to: "thongduy0512@gmail.com",
            title: "Đăng ký tư vấn trên website unilanguagesonla.com",
            description: '<td align=\"center" class="esd-block-image" style="font-size: 0"><a target="_blank" href="mailto:"><img src="https://fihabrp.stripocdn.email/content/guids/CABINET_67d3387c0a7e03abc9dc6024e5bc2c99fbbbb5603acdbcae62ee9f351780b90a/images/logounikemslogandoc.png" alt="" width="560" class="adapt-img"></a></td>'
        }

        let res = await fetch('http://unilanguagesonla.com/api/mail', {
            method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => console.log(res));
    };
  
    inject('sendMail', sendMail);
  };