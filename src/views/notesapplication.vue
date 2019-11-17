<template>
  <div class="notes">
    <div class="warper">
      <div class="left_warpe">
        <div class="title">
          <i class="iconfont icon-cheliangzhihui"></i>
          <div>报名须知</div>
        </div>
        <div
          class="list"
          :class="{'active':$route.path=='/notesapplication/index'}"
          @click="jump('/notesapplication/index')"
        >报名条件</div>
        <div
          class="list"
          :class="{'active':$route.path=='/notesapplication/material'}"
          @click="jump('/notesapplication/material')"
        >准备材料</div>
        <div
          class="list"
          :class="{'active':$route.path=='/notesapplication/agreement'}"
          @click="jump('/notesapplication/agreement')"
        >培训协议</div>
      </div>
      <div class="right_warpe">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    jump(url) {
      this.$router.push(url);
    }
  }
};
</script>
<style lang="less" scoped>
.notes {
  background: #f2f2f2;
  .warper {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    .left_warpe {
      width: 200px;
      background: #fff;
      margin-right: 50px;
      .title {
        padding: 20px 0px;
        i {
          font-size: 35px;
        }
        font-size: 20px;
        background: #00c356;
        color: #fff;
      }
      .list {
        border-bottom: 1px solid #efefef;
        padding: 20px 0px;
        color: #333;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        position: relative;
      }
      .active {
        &:after {
          display: block;
          content: "";
          width: 4px;
          height: 100%;
          position: absolute;
          background: #00c356;
          top: 0px;
        }
      }
    }
    .right_warpe {
      flex: 1;
      background: #fff;
    }
  }
}
</style>