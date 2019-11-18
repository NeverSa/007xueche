<template>
  <div class="notes">
    <div class="top_bread" >
     <span style="margin-top:-3px;">位置：</span> 
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="warper">
      <div class="left_warpe">
        <div class="title">
          <i class="iconfont icon-cheliangzhihui"></i>
          <div>车型选择</div>
        </div>
        <div class="list" :class="{'active':$route.path=='/notesapplication/index'}">小车</div>
      </div>
      <div class="right_warpe">
        <div class="title">
          <div class="item" :class="{'active':active==1}" @click="active=1">科目一（交规）</div>
          <div
            class="item"
            style="border-right:none"
            :class="{'active':active==2}"
            @click="active=2"
          >科目四（安全文明驾驶）</div>
        </div>
        <div class="contnet">
          <div class="subj_list">
            <div class="item" @click="answer(1)">
              <span style="background:#4ec1e8">
                <i class="iconfont icon-zhangjielianxi"></i>
              </span>
              专项练习
            </div>
            <div class="item" @click="answer(2)">
              <span style="background:#ab92ed">
                <i class="iconfont icon-repeat"></i>
              </span>
              顺序练习
            </div>
          </div>
          <div class="subj_list">
            <div class="item" @click="answer(1)">
              <span style="background:#4acfad">
                <i class="iconfont icon-zhangjielianxi"></i>
              </span>专项练习
            </div>
            <div class="item" @click="answer(2)">
              <span style="background:#feb354">
                <i class="iconfont icon-repeat"></i>
              </span>顺序练习
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1
    };
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    answer(type) {
      this.$router.push({
        path: "/answer",
        query: { subject: this.active, type: type }
      });
    },
    jump(url) {
      this.$router.push(url);
    }
  }
};
</script>
<style lang="less" scoped>
.top_bread{
  display: flex;
  align-items: center;
width:1200px;margin:0 auto;padding:30px 0px 15px 0px;
.el-breadcrumb{
  font-size: 16px;
}
}
.notes {
  height: 600px;
  .warper {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    .left_warpe {
      width: 200px;
      background: #fff;
      margin-right: 50px;
      border: 1px solid #efefef;
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
      border: 1px solid #efefef;
      border-bottom: none;
      .title {
        display: flex;
        border-bottom: 1px solid #efefef;
        .item {
          width: 50%;
          border-right: 1px solid #efefef;
          padding: 15px;
          font-size: 13px;
          cursor: pointer;
        }
        .active {
          color: #00c356;
          background: #f2f2f2;
        }
      }
      .contnet {
        display: flex;
        .subj_list {
          width: 50%;
          display: flex;
          flex-wrap: wrap;
          .item {
            width: 50%;
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #efefef;
            border-right: 1px solid #efefef;
            box-sizing: border-box;
            flex-direction: column;
            cursor: pointer;
            span {
              display: inline-flex;
              width: 50px;
              height: 50px;
              border-radius: 10px;
              align-items: center;
              justify-content: center;
              font-size: 30px;
              color: #fff;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
}
</style>