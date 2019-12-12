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
            <span @click="jump('/regist')">注册</span>
            <span @click="jump('/login')" v-if="!user.phone">登录</span>
            <span  v-if="user.phone">{{user.phone}}</span>
          </div>
        </div>
      </div>
      <div class="main_warp">
        <div class="log_nav">
          <img src="../assets/img/log.png" alt class="log_img" />
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
          <a
            :class="{'active':$route.path=='/personalcenter'}"
            @click="jump('/personalcenter')"
          >个人中心</a>
        </div>
      </div>
    </div>
    <router-view />
    <div class="copy_right">
      <div>
        <img src="../assets/img/log.png" alt class="bottom_log" />
      </div>
      <div class="copy_right_list">
        <a href="http://beian.miit.gov.cn/" target="_blank">网络理论学习</a>
        <a href="http://beian.miit.gov.cn/" target="_blank">面授培训续约</a>
        <a href="http://beian.miit.gov.cn/" target="_blank">结业鉴定预约</a>
        <a href="http://beian.miit.gov.cn/" target="_blank">科目一考试预约</a>
        <a href="http://beian.miit.gov.cn/" target="_blank">站岗预约</a>
        <a href="http://beian.miit.gov.cn/" target="_blank">模拟培训预约</a>
        <a href="http://beian.miit.gov.cn/" target="_blank">试车培训预约</a>
        <a href="http://beian.miit.gov.cn/" target="_blank">科二/科三考试预约</a>
        <a href="http://beian.miit.gov.cn/" target="_blank">科四考试预约</a>
      </div>

      <a href="http://beian.miit.gov.cn/" target="_blank">浙ICP备19050396</a>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
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
     ...mapState({
      user: "user"
    }),
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
.copy_right_list {
  padding: 20px;
  a {
    padding: 10px;
  }
}
#nav {
  border-bottom: 1px solid #00c356;
  padding-bottom: 15px;
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
        padding: 0px  10px;
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
