<template>
    <div>
        <v-layout>
            <v-flex
            v-for="(gorsel, gorselIndex) in gorseller"
            :key="gorselIndex"
            class="ma-2"
            style="margin-right: 10px"
            @click="index = gorselIndex"
            >
            <img width="180" height="180" :src="getImagePath(gorsel.url)" class="resimKutusu" />
            </v-flex>
            <LightGallery
            :images="gorseller"
            :index="index"
            :disable-scroll="false"
            @close="index = null"
            />
        </v-layout>
    </div>
</template>

<script>
export default {
    data: () => ({
        gorseller: [
        { title: "img 1", url: "/assets/pics/main-background/gallery/item1.jpg"},
        { title: "img 2", url: "/assets/pics/main-background/gallery/item2.jpg" },
        { title: "img 3", url: "/assets/pics/main-background/gallery/item3.jpg" },
        { title: "img 4", url: "/assets/pics/main-background/gallery/item4.jpg" },
        { title: "img 5", url: "/assets/pics/main-background/gallery/item5.jpg" },
        { title: "img 6", url: "/assets/pics/main-background/gallery/item6.jpg" },
        { title: "img 7", url: "/assets/pics/main-background/gallery/item7.jpg" },
        { title: "img 8", url: "/assets/pics/main-background/gallery/item8.jpg" },
        { title: "img 9", url: "/assets/pics/main-background/gallery/item9.jpg" },
        { title: "img 10", url: "/assets/pics/main-background/gallery/item10.jpg" },
        ],
        index: null,
    }),
    methods: {
    getImagePath(url) {
      return require(`~${url}`);
    }
  }
}
</script>

<style>

</style>