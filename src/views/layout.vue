<template>
  <div id="app">
    <div id="nav">
      <!-- <div class="top_nav">
        <div class="warp">
          <div class="left">
            <span>007学车服务电话:</span>
            <span class="phone">13857199900</span>
          </div>
        </div>
      </div>-->
      <div class="shadow_box">
        <div class="main_warp">
          <div class="log_nav">
            <div class="left">
              <img src="../assets/img/log.png" alt="" class="log_img">
              <div class="memu_list">
                <a :class="{'active':$route.path=='/index'}" @click="jump('/index')">
                  <span>首页</span>
                </a>
                <a :class="{'active':$route.path=='/coach'}" @click="jump('/coach')">
                  <span>驾校</span>
                </a>
                 <a :class="{'active':$route.path=='/practicetest'}" @click="jump('/practicetest')">
                  <span>模拟考试</span>
                </a>
                <a :class="{'active':$route.path=='/practicecar'}" @click="jump('/practicecar')">
                  <span>训练场地</span>
                </a>
                <a
                  :class="{'active':$route.path=='/notesapplication'}"
                  @click="jump('/notesapplication')"
                >
                  <span>报名须知</span>
                </a>
                <a
                  :class="{'active':$route.path=='/personalcenter'}"
                  @click="jump('/personalcenter')"
                >
                  <span>个人中心</span>
                </a>
              </div>
              <div class="left_phone">
                <span>客服:</span>
                <span class="phone">13857199900</span>
              </div>
            </div>
            <div class="right">
              <span @click="jump('/regist')">注册</span>
              <span @click="jump('/login')" v-if="!user.phone">登录</span>
              <span v-if="user.phone">{{user.phone}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
    <div class="copy_right">
      <div id="demo">
        <div id="indemo">
          <div id="demo1">
            <a href="javascript:void(0)" onclick="window.open('http://www.qc5qc.com/', '_blank');">
              <img src="http://115.238.28.138:8023/pages/images/link_1.jpg">
            </a>
            <a href="javascript:void(0)" onclick="window.open('http://www.wellcom.cn/', '_blank');">
              <img src="http://115.238.28.138:8023/pages/images/link_2.jpg">
            </a>
            <a
              href="javascript:void(0)"
              onclick="window.open('http://www.pcauto.com.cn/', '_blank');"
            >
              <img src="http://115.238.28.138:8023/pages/images/link_3.jpg">
            </a>
            <a
              href="javascript:void(0)"
              onclick="window.open('http://www.qc5qc.com/xqc', '_blank');"
            >
              <img src="http://115.238.28.138:8023/pages/images/link_4.jpg">
            </a>
            <a href="javascript:void(0)" onclick="window.open('http://www.hzcgj.cn/', '_blank');">
              <img src="http://115.238.28.138:8023/pages/images/link_5.jpg">
            </a>
            <a
              href="javascript:void(0)"
              onclick="window.open('http://www.hzcgs.gov.cn/', '_blank');"
            >
              <img src="http://115.238.28.138:8023/pages/images/link_6.jpg">
            </a>
            <a href="javascript:void(0)" onclick="window.open('http://www.hzti.com/', '_blank');">
              <img src="http://115.238.28.138:8023/pages/images/link_7.jpg">
            </a>
            <a href="javascript:void(0)" onclick="window.open('http://www.zjcg.com/', '_blank');">
              <img src="http://115.238.28.138:8023/pages/images/link_8.jpg">
            </a>
          </div>
         
        </div>
      </div>
      <!-- <div class="copy_right_warper">
        <div style="display: flex;align-items: center;">
          <img src="../assets/img/log.png" alt class="bottom_log" />
        </div>
        <div class="copy_right_list">
          <div class="item">
            <a href="http://115.238.28.138:8023/" target="_blank">模拟预约</a>
            <a href="http://hz.5u5u5u5u.com/" target="_blank">理论在线学习</a>
            <a href="http://beian.miit.gov.cn/" target="_blank">结业鉴定预约</a>
          </div>
          <div class="item">
            <a href="http://hgh.122.gov.cn/" target="_blank">科目一考试预约</a>
            <a href="http://syjy.5u5u5u5u.com" target="_blank">站岗预约</a>
            <a href="http://beian.miit.gov.cn/" target="_blank">模拟培训预约</a>
          </div>
          <div class="item">
            <a href="http://beian.miit.gov.cn/" target="_blank">试车培训预约</a>
            <a href="http://beian.miit.gov.cn/" target="_blank">科二/科三考试预约</a>
            <a href="http://beian.miit.gov.cn/" target="_blank">科四考试预约</a>
          </div>
        </div>
      </div>-->
      <div class="icp">版权所用©杭州铭瑄信息技术有限公司
        <a href="http://www.beian.miit.gov.cn" target="_blank">浙ICP备19050396号</a>
      </div>
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
.left_phone {
  display: flex;
  align-items: center;
  .phone {
    color: #9bca64;
    margin-left: 15px;
  }
}
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
.shadow_box {
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(220, 220, 220, 1);
}
.copy_right {
  background: #f9f9f9;
  padding-bottom: 35px;
  .icp {
    text-align: right;
    color: #7d7d7d;
    font-size: 12px;
    width: 1200px;
    margin: 0 auto;
  }
  .copy_right_warper {
    display: flex;
    margin: 0 auto;
    width: 1019px;
    .copy_right_list {
      padding: 20px;
      display: flex;
      flex: 1;
      .item {
        display: flex;
        flex-direction: column;
        width: 30%;
        text-align: left;
      }
      a {
        padding: 10px;
      }
    }
  }
  a {
    color: #000000;
    font-size: 14px;
    text-decoration: none;
  }
  .bottom_log {
    width: 200px;
  }
}

.top_nav {
  background: rgba(249, 249, 249, 1);
  padding: 11px;
  .warp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 1230px;
    font-size: 14px;
    color: #2a2828;
    .phone {
      color: #9bca64;
      margin-left: 15px;
    }
    .right {
      span {
        color: @tex-color;
        cursor: pointer;
        padding: 0px 10px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  height: 80px;
  .left {
    display: flex;
  }
  .log_img {
    height: 80px;
  }
  .right {
    font-size: 14px;
    color: #2a2828;
    span + span {
      margin-left: 18px;
      cursor: pointer;
    }
  }
}
.memu_list {
  display: flex;
  a {
    padding: 0px 28px;
    color: #000;
    font-size: 20px;
    cursor: pointer;
    line-height: 80px;
  }
  .active {
    color: #9bca64;
    font-weight: bold;
    span {
      display: inline-block;
      width: 100%;
      height: 100%;
      position: relative;
      &::before {
        position: absolute;
        display: block;
        content: "";
        width: 100%;
        height: 3px;
        background: #9bca64;
        bottom: 0px;
      }
    }
  }
}
</style>
