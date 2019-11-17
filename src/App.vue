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
          <a :class="{'active':$route.path=='/index'}" @click="jump('/index')">首页</a>
           <a :class="{'active':$route.path=='/practicetest'}" @click="jump('/practicetest')">模拟考试</a>
          <a :class="{'active':$route.path=='/coach'}" @click="jump('/coach')">驾校</a>
          <a :class="{'active':$route.path=='/practicecar'}" @click="jump('/practicecar')">训练场地</a>
          <a
            :class="{'active':$route.path=='/notesapplication'}"
            @click="jump('/notesapplication')"
          >报名须知</a>
        </div>
      </div>
  
    </div>
    <router-view />
    <div class="copy_right">
      <div>
        <img src="./assets/img/log.png" alt class="bottom_log" />
      </div>

      <a href="http://beian.miit.gov.cn/" target="_blank">浙ICP备09002072号-3</a>
    </div>
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
  created() {},
  methods: {
    jump(url) {
      this.$router.push(url);
    }
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
  font-family: "Microsoft YaHei", sans-serif;
}
.copy_right {
  background: #f9f9f9;
  padding: 20px 0px;
  a {
    color: #999;
  }
  .bottom_log {
    width: 200px;
  }
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
