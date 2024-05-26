export default ({ app }, inject) => {
    const sendMail = async (studentData) => {
        let data = {
            to: "unilanguagesonla1@gmail.com",
            title: "Đăng ký tư vấn trên website unilanguagesonla.com",
            description: `
            <div text-align=\"center" style="border:15px solid #28788c">
              <img style="width: 50%; height: auto; display: block; margin-left: auto; margin-right: auto;text-align: center;" src="https://unilanguagesonla.s3.ap-southeast-1.amazonaws.com/2024-05/1716443823664logo-uni-kem-slogan-doc.png" />
              <h1 style="text-align: center;"><strong>THÔNG TIN HỌC SINH</strong></h1>
              <h3 style="text-align: center;"><strong>Họ và tên học sinh: ${studentData.name}</strong></h3>
              <h3 style="text-align: center;"><strong>Năm sinh: ${studentData.birthyear}</strong></h3>
              <h3 style="text-align: center;"><strong>Số điện thoại: ${studentData.phoneNo}</strong></h3>
              <h3 style="text-align: center;"><strong>Email: ${studentData.mail}</strong></h3>
            </div>
            `
        }
        let res = await fetch('http://unilanguagesonla.com/api/mail', {
            method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if(res.status == 200) {
          window.location.href = '/gmail-form'
        } else {
          alert("Vui lòng thử lại")
        }
      });
    };
  
    inject('sendMail', sendMail);
  };