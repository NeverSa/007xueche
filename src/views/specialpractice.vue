<template>
  <div class="notes">
    <div class="top_bread">
      <span style="margin-top:-3px;">位置：</span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>模拟考试</el-breadcrumb-item>
        <el-breadcrumb-item>专项练习</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="warper">
      <div class="right_warpe">
        <div class="list">
          <span>1、道路交通安全法律、法规和规章</span>
          <el-button  type="success" @click="jump(1)">立即开始</el-button>
        </div>
        <div class="list">
          <span>2、交通信号</span>
          <el-button  type="success"  @click="jump(2)">立即开始</el-button>
        </div>
        <div class="list">
          <span>3、安全行车、文明驾驶基础知识</span>
          <el-button  type="success"  @click="jump(3)">立即开始</el-button>
        </div>
        <div class="list">
          <span>4、机动车驾驶操作相关基础知识</span>
          <el-button type="success"  @click="jump(4)"> 立即开始</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {},
  methods: {
    jump(category_id) {
      this.$router.push({
        path: "/answer",
        query: { subject: 1, category_id: category_id }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.top_bread {
  display: flex;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0px 15px 0px;
  .el-breadcrumb {
    font-size: 16px;
  }
}
.notes {
  height: 600px;
  .warper {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    .right_warpe {
      flex: 1;
      background: #fff;
      border-bottom: none;
      display: flex;
      padding-top: 30px;
      flex-direction: column;
      .list {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        cursor: pointer;
        color: #4d4d4d;
        font-size: 20px;
        border: 1px solid #efefef;
        padding: 15px;
        .name {
          display: block;
          padding-right: 10px;
        }
      }
    }
  }
}
</style>