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
        <span class="list" v-for="item in list" :key="item.category_id" @click="jump(item)">
          <el-badge value="100" type="success">
            <span class="name">{{item.category_name}}</span>
          </el-badge>
        </span>
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
  created() {
    this.getCategorylist();
  },
  methods: {
    jump(item) {
      this.$router.push({
        path: "/answer",
        query: { subject: 1,category_id:item.category_id }
      });
    },
    getCategorylist() {
      this.$api.getCategorylist().then(res => {
        this.list = res.data.data;
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
      flex-wrap: wrap;
      justify-content: flex-start;
      padding-top: 30px;
      .list {
        width: 16.6%;
        display: inline-block;
        text-align: left;
        margin-bottom: 30px;
        cursor: pointer;
        color: #4d4d4d;
        font-size: 14px;
        .name {
          display: block;
          padding-right: 10px;
        }
      }
    }
  }
}
</style>