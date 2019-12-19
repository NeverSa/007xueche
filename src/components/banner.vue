<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img
          src="../assets/img/banner.png"
          style="height:363px;width:100%"
          alt
        />
      </swiper-slide>
   
      <!-- Optional controls -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      swiperOption:{
         height: 300
      }
    }
  },
};
</script>


<style scoped lang="less">
</style>
