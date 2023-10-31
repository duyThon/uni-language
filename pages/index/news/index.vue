<template>
  <div id="news-container">
    <h1>Tin tức & Sự kiện</h1>
    <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12">
            <div class="news-heading-image">
                <img src="https://llv.edu.vn/media/2023/07/how-to-give-a-presentation-in-english-3.png" alt="">
                <div class="overlay-news-heading"></div>
            </div>
            <div class="news-heading">
                <h2>Tips thuyết trình bằng tiếng Anh và mẫu câu</h2>
                <p>28/10/2023</p>
            </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
            <div class="news-heading-image">
                <img src="https://llv.edu.vn/media/2023/07/1599897667_sat_exam-1-3-500x262.jpg" alt="">
                <div class="overlay-news-heading"></div>
            </div>
            <div class="news-heading">
                <h2>Ở độ tuổi nào trẻ em nên bắt đầu chú trọng học ngữ pháp</h2>
                <p>28/10/2023</p>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#news-container {
    margin: 80px
}

.news-heading-image {
    position: relative;
}

.news-heading-image img {
    width: 100%;
}

.overlay-news-heading {
    position: absolute;
    top: 0;
    position: absolute;
    bottom: 0px;
    background: rgb(40,120,140);
    background: linear-gradient(0deg, rgba(40,120,140,1) 0%, rgba(32,139,164,1) 30%, rgba(255,255,255,0) 60%);
    width: 100%;
}
</style>