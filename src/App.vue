<template>
    <router-view />
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
