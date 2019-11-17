<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img
          src="//pic5.58cdn.com.cn//brandads/n_v2f0e76515e929459b8515e270b9abfed1_5725c6ad31bf6884.png?h=360&w=1903&ss=1&crop=1&cpos=middle"
          alt
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="//pic5.58cdn.com.cn//brandads/n_v2456fe322261540a49bc75cbf4a1c9efd_4329f6901bd95b57.png?h=360&w=1903&ss=1&crop=1&cpos=middle"
          alt
        />
      </swiper-slide>
      <!-- Optional controls -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "banner"
};
</script>


<style scoped lang="less">
</style>
