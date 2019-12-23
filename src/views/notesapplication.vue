<template>
  <div class="notes">
    <div class="warper">
      <div class="left_warpe">
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
  background: #fff;
  .warper {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    .left_warpe {
      width: 200px;
      background: #fff;
      margin-right: 50px;
      padding-top:80px;
      .list {
        padding: 10px 10px;
        color: #ACB1B7;
        font-size:20px;
        font-weight: bold;
        cursor: pointer;
        position: relative;
        text-align: left;
      }
      .active {
        color: #9BCA64;
        &:after {
             position: absolute;
            display: block;
            content: "";
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-top-color: #9BCA64;
            left: 0px;
            top: 32%;
            transform: rotate(-90deg) translateY(-59%);
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