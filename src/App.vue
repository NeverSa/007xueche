<template>
  <div id="app">
    <div id="nav">
      <div class="top_nav">
        <div class="warp">
          <div class="left">
            <span>007学车服务电话:</span>
            <span class="phone">18655190545</span>
          </div>
          <div class="right">
            <span>报名</span>
          </div>
        </div>
      </div>
      <div class="main_warp">
        <div class="log_nav">
          <img src="./assets/img/log.png" alt class="log_img" />
        </div>
        <div class="memu_list">
          <a :class="{'active':index=='首页'}">首页</a>
          <a :class="{'active':index=='驾校'}">驾校</a>
        </div>
      </div>
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
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: "首页",
      swiperOption: {
        loop: true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body,
html {
  margin: 0;
  padding: 0;
  font-family: 'Microsoft YaHei', sans-serif ;

}

.top_nav {
  background: #f9f9f9;
  padding: 10px;
  .warp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 1230px;
    font-size: 14px;
    color: #999;
    .phone {
      color: @tex-color;
      margin-left: 15px;
    }
    .right {
      span {
        color: @tex-color;
        cursor: pointer;
      }
    }
  }
}
.main_warp {
  width: 1230px;
  margin: 0 auto;
}
.log_nav {
  text-align: left;
  .log_img {
    width: 200px;
  }
}
.memu_list {
  display: flex;
  a {
    padding: 20px 48px;
    color: @gray-color;
    font-size: 16px;
    cursor: pointer;
  }
  .active {
    color: @tex-color;
  }
}
</style>
