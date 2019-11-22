<template>
  <div class="notes">
    <div class="top_bread">
      <span style="margin-top:-3px;">位置：</span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>模拟考试</el-breadcrumb-item>
        <el-breadcrumb-item>{{subject==1?"科目一模拟":"科目四模拟"}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="warper">
      <div class="left">
        <div class="exam_detail">
          <div class="top_name">
            <div class="title">007学车</div>第01考台
          </div>
          <div class="stu_message">
            <div class="item">
              <img src alt />
            </div>
            <div class="item">姓名：001</div>
            <div class="item">考试类型：小车</div>
            <div class="item">考试科目：科目一</div>
            <div class="title">考试信息</div>
          </div>
          <div class="time">
            <timedown :endTime="endTime" :callback="callback" ref="time"></timedown>
            <div class="title">剩余时间</div>
          </div>
        </div>
        <div class="exam_list">
          <div class="exam_question">
            <div class="title_a">考试题目</div>
            <div
              class="question_title"
            >({{detail.type==1?"判断题":"单选题"}}){{index+1}}、{{detail.question}}</div>
            <div class="answer">
              <div class="item">
                A:
                <label>{{detail.type==1?"正确":detail.a}}</label>
              </div>
              <div class="item">
                B:
                <label>{{detail.type==1?"错误":detail.b}}</label>
              </div>
              <div class="item" v-if="detail.type==2">
                C:
                <label>{{detail.c}}</label>
              </div>
              <div class="item" v-if="detail.type==2">
                D:
                <label>{{detail.d}}</label>
              </div>
            </div>
            <div class="result">
              <span>您的选项是：</span>
              <span>
                <el-button
                  size="mini"
                  @click="submitAwser(1)"
                  :type="detail.select==1?'primary':''"
                >A</el-button>
                <el-button
                  size="mini"
                  @click="submitAwser(2)"
                  :type="detail.select==2?'primary':''"
                >B</el-button>
                <el-button
                  size="mini"
                  v-if="detail.type==2"
                  @click="submitAwser(3)"
                  :type="detail.select==3?'primary':''"
                >C</el-button>
                <el-button
                  size="mini"
                  v-if="detail.type==2"
                  @click="submitAwser(4)"
                  :type="detail.select==4?'primary':''"
                >D</el-button>
              </span>
            </div>
          </div>
          <div style="display:flex;align-items: center;
    justify-content: space-between;">
            <div class="exam_message">
              <div class="title_a">提示</div>
              {{detail.type==1?"判断题，请判断对错":"单选题,选择一项"}}
            </div>
            <div>
              <el-button type="success" size="small" @click="changeItem(-1)">上一题</el-button>
              <el-button type="success" size="small " @click="changeItem(1)">下一题</el-button>
              <el-button type="success" size="small" @click="submitExamine()">交卷</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="exam_index">
          <span
            v-for="(item,myindex) in qusetion"
            :key="item.id"
            :class="{'current':index==myindex,'success':item.answer==item.select,'error':item.answer!==item.select&&item.select!==undefined}"
            @click="selectItem(myindex)"
          >{{myindex+1}}</span>
        </div>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <div>
        <h3>操作提示：</h3>
        <h3>1、点击【确认交卷】，将提交考试成绩，结束考试。</h3>
        <h3>2、点击【继续答题】，将继续答题,倒计时结束无法继续答题。</h3>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">继续答题</el-button>
        <el-button type="primary" @click="goresult()">确认交卷</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="考试结果"
      :visible.sync="dialogResult"
      width="30%"
      :show-close="false"
      :close-on-click-modal="false"
      class="dilog_result"
    >
      <div class style="text-align: center;">
        <img src="../assets/img/car.jpg" alt style="width:200px;margin:0 auto" />
      </div>
      <div class="designation">获得称号：{{sorce>90?'秋名山老司机':'马路杀手'}}</div>
      <div class="detail">
        <div :class="sorce>90?'tt':'ee'">
          <span>分数:</span>
          <span>{{sorce}}</span>
        </div>
        <div>
          <span>耗时:</span>
          <span>{{time}}</span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="goback()">返回</el-button>
        <el-button type="primary" @click="reseat()">重新考试</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import timedown from "@/components/timedown";
import moment from "moment";
export default {
  data() {
    return {
      list: [],
      subject: this.$route.query.subject,
      endTime: "",
      qusetion: [],
      detail: {},
      index: 0,
      dialogVisible: false,
      sorce: 0,
      time: "",
      dialogResult: false
    };
  },
  components: {
    timedown
  },
  created() {
    this.getCategorylist();
    let time = parseInt(moment(new Date()).format("X")) + 60 * 45;
    this.endTime = time.toString();
    this.getExamlist();
  },
  methods: {
    goback() {
      this.$router.push("/practicetest");
    },
    reseat() {
      this.dialogResult = false;
      this.getExamlist();
    },
    goresult() {
      this.sorce = 0;
      this.qusetion.forEach(item => {
        if (item.select && item.select == item.answer) {
          this.sorce++;
        }
      });

      this.time = this.$refs.time.getCount();
      this.dialogVisible = false;
      this.dialogResult = true;
    },
    submitExamine() {
      this.dialogVisible = true;
    },
    submitAwser(type) {
      if (this.detail.select) {
        return;
      }
      this.$set(this.detail, "select", type);
    },
    selectItem(myindex) {
      this.index = myindex;
      this.detail = this.qusetion[this.index];
    },
    changeItem(index) {
      if (this.index == 0 && index == -1) {
        return;
      }
      if (this.index == 99 && index == 1) {
        return;
      }
      this.index = this.index + index;
      this.detail = this.qusetion[this.index];
    },
    getExamlist() {
      this.$api.getExamlist().then(res => {
        this.qusetion = res.data.data;
        if (this.qusetion.length) {
          this.detail = this.qusetion[0];
        }
      });
    },
    callback() {},
    jump(item) {
      this.$router.push({
        path: "/answer",
        query: { subject: 1, category_id: item.category_id }
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
.dilog_result {
  .designation {
    font-weight: 600;
    color: #e6a23c;
    padding: 10px;
    text-align: center;
  }
  .detail {
    padding: 10px 80px;
    display: flex;
    justify-content: space-between;
    .ee {
      color: #f56c6c;
    }
    .tt {
      color: #67c23a;
    }
    div {
      width: 50%;
      text-align: center;
      font-size: 26px;
      span {
        margin-right: 15px;
      }
    }
  }
}
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
  text-align: left;
  .warper {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    .left {
      width: 60%;
      display: flex;
      justify-content: space-between;
      .exam_detail {
        width: 20%;
        .title {
          position: absolute;
          left: 50%;
          top: -12px;
          transform: translateX(-50%);
          background: #fff;
          padding: 0px 5px;
          width: 100px;
          text-align: center;
        }
        .top_name {
          border: 1px solid #efefef;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .stu_message {
          border: 1px solid #efefef;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-top: 35px;
          padding-bottom: 78px;
          .item {
            margin: 10px 0px;
            text-align: left;
            padding-left: 10px;
          }
        }
        .time {
          display: flex;
          border: 1px solid #efefef;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-top: 35px;
          height: 60px;
          color: #00c356;
        }
      }
    }
    .right {
      width: 40%;
      padding-left: 30px;
      .exam_index {
        display: flex;
        flex-wrap: wrap;
        span {
          width: 10%;
          display: inline-flex;
          box-sizing: border-box;
          justify-content: center;
          border: 1px solid #efefef;
          height: 35px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .current {
          background: #ccc;
        }
        .success {
          background: #67c23a;
          border: 1px solid #67c23a;
          color: #fff;
        }
        .error {
          background: #fef0f0;
          border: 1px solid #fbc4c4;
        }
      }
    }
    .exam_list {
      flex: 1;
      margin-left: 30px;
      .title_a {
        position: absolute;
        left: 20px;
        top: -12px;
        background: #fff;
        padding: 0px 5px;
        width: 100px;
        text-align: center;
      }
      .exam_question {
        border: 1px solid #efefef;
        height: 350px;
        position: relative;
        padding: 20px;
        box-sizing: border-box;
        margin-bottom: 35px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .item {
          margin-top: 15px;
        }
        .result {
          display: flex;
          align-items: center;
          justify-content: space-between;
          button {
          }
        }
      }
      .exam_message {
        border: 1px solid #efefef;
        height: 62px;
        position: relative;
        padding: 20px;
        box-sizing: border-box;
        width: 40%;
      }
    }
  }
}
</style>