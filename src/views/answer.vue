<template>
  <div class="answer">
    <div class="question-content" v-if="subject==1">
      <div class="left">
        <span class="round">{{detail.type==1?'判断题':'单选题'}}</span>
      </div>
      <div class="right">
        <div class="questiopn">{{index+1}}/{{idList.length}} {{detail.question}}</div>
        <div class="questiopn_item">
          <div class="questiopn_item_left">
            <div class="radio_list">
              <div class="radio" @click="checkedanswer(1)" :class="selectClass(1)">
                <label for>
                  <i class="iconfont icon-success_no_circle" v-if="selectClass(1)=='success'"></i>
                  <i class="iconfont icon-cuowuguanbishibai" v-if="selectClass(1)=='error'"></i>
                </label>
                <span>{{detail.a==''?'正确':detail.a}}</span>
              </div>
              <div class="radio" @click="checkedanswer(2)" :class="selectClass(2)">
                <label for>
                  <i class="iconfont icon-success_no_circle" v-if="selectClass(2)=='success'"></i>
                  <i class="iconfont icon-cuowuguanbishibai" v-if="selectClass(2)=='error'"></i>
                </label>
                <span>{{detail.b==''?'错误':detail.b}}</span>
              </div>
              <div
                class="radio"
                @click="checkedanswer(3)"
                :class="selectClass(3)"
                v-if="detail.type==1"
              >
                <label for>
                  <i class="iconfont icon-success_no_circle" v-if="selectClass(3)=='success'"></i>
                  <i class="iconfont icon-cuowuguanbishibai" v-if="selectClass(3)=='error'"></i>
                </label>
                <span>{{detail.c}}</span>
              </div>
              <div
                class="radio"
                @click="checkedanswer(4)"
                :class="selectClass(4)"
                v-if="detail.type==1"
              >
                <label for>
                  <i class="iconfont icon-success_no_circle" v-if="selectClass(4)=='success'"></i>
                  <i class="iconfont icon-cuowuguanbishibai" v-if="selectClass(4)=='error'"></i>
                </label>
                <span>{{detail.d}}</span>
              </div>
            </div>
          </div>
          <div class="questiopn_item_right">
            <img :src="detail.imgurl" alt style="width:200px;" />
          </div>
        </div>
      </div>
    </div>
    <!-- 科目四 -->
    <div class="question-content" v-if="subject==2">
      <div class="left">
        <span class="round">{{detail.type==1?'单选题':detail.type==2?'判断题':"多选题"}}</span>
      </div>
      <div class="right">
        <div class="questiopn">{{index+1}}/{{idList.length}} {{detail.question}}</div>
        <div class="questiopn_item">
          <div class="questiopn_item_left">
            <div class="radio_list">
              <div class="radio" @click="checkedanswer(1)" :class="[getClass(1),selectClass(1)]">
                <label for>
                  <i class="iconfont icon-success_no_circle" v-if="selectClass(1)=='success'"></i>
                  <i class="iconfont icon-cuowuguanbishibai" v-if="selectClass(1)=='error'"></i>
                </label>
                <span>{{detail.a==''?'正确':detail.a}}</span>
              </div>
              <div class="radio" @click="checkedanswer(2)" :class="[getClass(2),selectClass(2)]">
                <label for>
                  <i class="iconfont icon-success_no_circle" v-if="selectClass(2)=='success'"></i>
                  <i class="iconfont icon-cuowuguanbishibai" v-if="selectClass(2)=='error'"></i>
                </label>
                <span>{{detail.b==''?'错误':detail.b}}</span>
              </div>
              <div
                class="radio"
                @click="checkedanswer(3)"
                :class="[getClass(3),selectClass(3)]"
                v-if="detail.type!==2"
              >
                <label for>
                  <i class="iconfont icon-success_no_circle" v-if="selectClass(3)=='success'"></i>
                  <i class="iconfont icon-cuowuguanbishibai" v-if="selectClass(3)=='error'"></i>
                </label>
                <span>{{detail.c}}</span>
              </div>
              <div
                v-if="detail.type!==2"
                class="radio"
                @click="checkedanswer(4)"
                :class="[getClass(4),selectClass(4)]"
              >
                <label for>
                  <i class="iconfont icon-success_no_circle" v-if="selectClass(4)=='success'"></i>
                  <i class="iconfont icon-cuowuguanbishibai" v-if="selectClass(4)=='error'"></i>
                </label>
                <span>{{detail.d}}</span>
              </div>
            </div>
          </div>
          <div class="questiopn_item_right">
            <img :src="detail.imgurl" alt style="width:200px;" />
          </div>
        </div>
      </div>
    </div>
    <div class="btn_group">
      <div>
        <button @click="changeTitle(-1)">上一题</button>
        <button @click="changeTitle(1)">下一题</button>
        <button @click="submitmulti()" v-if="detail.type==3&&subject==2" >提交</button>
      </div>
      <div>
        <el-button type="success" size="small" @click="showResult=!showResult">显示解析</el-button>
      </div>
    </div>
    <el-card class="box-card" style="margin:30px 0px;" v-if="showResult">
      <div slot="header" class="clearfix">
        <span>官方解析</span>
      </div>
      <div class="text item">{{detail.analysis}}</div>
    </el-card>
    <div class="question_list">
      <span
        :class="getListClass(item,index)"
        v-for="(item,index) in idList"
        :key="item.id"
        @click="getQuestion(item,index)"
      >{{index+1}}</span>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      subject: this.$route.query.subject,
      idList: [],
      detail: {},
      radio: "",
      index: 0,
      showResult: false
    };
  },
  computed: {
    ...mapState({
      answerList: "answerList"
    }),
    stateAnswer() {
      let arr = this.answerList.filter(item => {
        return item.id == this.detail.id;
      });
      if (arr.length > 0) {
        return arr[0];
      } else {
        return {};
      }
    },
    selectClass() {
      return index => {
        if (this.subject == 2 && this.detail.type == 3) {
          if (this.detail.submit == undefined && this.detail.select) {
            if (this.detail.select.includes(index)) {
              return "select";
            }
          } else if (this.detail.submit == true && this.detail.select) {
            if (
              this.detail.answer
                .toString()
                .split("")
                .includes(index.toString())
            ) {
              return "success";
            } else if (!this.detail.select.includes(index.toString())) {
              let arr = JSON.stringify(this.detail.select);
              if (
                JSON.parse(arr)
                  .sort()
                  .join("") !== this.detail.answer.toString()
              ) {
                return "error";
              }
            }
          }
        } else {
          if (
            index == this.stateAnswer.select &&
            this.stateAnswer.select == this.detail.answer
          ) {
            return "success";
          } else if (
            index == this.stateAnswer.select &&
            this.stateAnswer.select !== this.detail.answer
          ) {
            return "error";
          } else {
            return "";
          }
        }
      };
    }
  },
  created() {
    this.getSubject1IdList();
  },
  methods: {
    submitmulti() {
      try {
            if(this.detail.select&&this.detail.select.length>1){
       this.$set(this.detail, "submit", true);
      this.updatAnswer(Object.assign(this.detail));
      }
      } catch (error) {
        console.log(error)
      }
    
     
     
    },
    getListClass(item, index) {
      let current = "";
      if (this.index == index) {
        current = "current";
      }
      let classarr = this.answerList.filter(key => {
        return item.id == key.id;
      });
      if (classarr.length > 0) {
        if (classarr[0].type == 3) {
          let arr = JSON.stringify(classarr[0].select);
          if (!classarr[0].submit) {
            return;
          }
          if (
            JSON.parse(arr)
              .sort()
              .join("") == classarr[0].answer.toString()
          ) {
            return "success " + current;
          } else {
            return "error " + current;
          }
        } else {
          if (classarr[0].answer == classarr[0].select) {
            current = "success " + current;
          } else {
            current = "error " + current;
          }
        }
      }
      return current;
    },
    changeTitle(index) {
      if (this.index == 0 && index == -1) {
        return;
      }
      if (this.index == this.idList.length && index == 1) {
        return;
      }
      this.index = this.index + index;
      this.getQuestion(this.idList[this.index]);
    },
    getClass() {
      if (this.detail.type == 3) {
        return "";
      }
    },
    ...mapActions(["updatAnswer"]),
    //获取科目一id列表
    getSubject1IdList() {
      this.$api
        .getSubject1IdList({
          category_id: this.$route.query.category_id,
          subject_id: this.$route.query.subject
        })
        .then(res => {
          this.idList = res.data.data;
          this.getQuestion(this.idList[0]);
        });
    },
    //选题
    checkedanswer(an) {
      if (this.detail.type == 3 && this.detail.submit == true) {
        return;
      }
      if (this.subject == 1) {
        let has = this.answerList.findIndex(v => {
          return v.id == this.detail.id;
        });
        if (has == -1) {
          this.updatAnswer(Object.assign(this.detail, { select: an }));
        }
      } else if (this.subject == 2) {
        if (this.detail.type == 1 || this.detail.type == 2) {
          let has = this.answerList.findIndex(v => {
            return v.id == this.detail.id;
          });
          if (has == -1) {
            this.updatAnswer(Object.assign(this.detail, { select: an }));
          }
        } else {
          if (!this.detail.select) {
            this.$set(this.detail, "select", [an]);
            this.updatAnswer(Object.assign(this.detail, { select: [an] }));
          } else {
            this.detail.select.push(an);
            this.updatAnswer(
              Object.assign(this.detail, {
                select: [...new Set(this.detail.select)]
              })
            );
          }
        }
      }
    },
    getQuestion(item, index) {
      if (index) {
        this.index = index;
      }
      let detail = this.answerList.filter(key => {
        return (key.id == item.id);
      });
      if (detail.length > 0) {
        this.detail = detail[0];
      } else {
         this.detail={}
        this.$api
          .getSubject1Question({
            id: item.id,
            subject_id: this.$route.query.subject
          })
          .then(res => {
            this.detail = res.data.data;
          });
      }
      console.log( this.detail)
    }
  }
};
</script>
<style lang="less" scoped>
.answer {
  width: 1100px;
  text-align: left;
  margin: 0 auto;
  .question-content {
    display: flex;
    padding: 20px 0px;
    .left {
      width: 70px;
      .round {
        display: inline-block;
        background: #00c356;
        font-size: 12px;
        border-radius: 15px;
        padding: 3px 8px;
        color: #fff;
      }
    }
    .right {
      .questiopn {
        text-align: left;
        padding-bottom: 20px;
      }
      .radio_list {
        .success {
          label {
            background: #00c356;
            border: 1px solid #00c356;
          }
        }
        .error {
          label {
            background: #ff4c2d;
            border: 1px solid #ff4c2d;
          }
        }
        .select {
          label {
            background: #409eff;
            border: 1px solid #409eff;
          }
        }
        .radio {
          cursor: pointer;
          display: flex;
          align-items: center;
          label {
            display: inline-flex;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid #efefef;
            margin-right: 16px;
            color: #fff;
            justify-content: center;
            align-items: center;
          }

          padding: 10px 0px;
        }
      }
      flex: 1;
      .questiopn_item {
        display: flex;
        justify-content: space-between;
        .questiopn_item_left {
          text-align: left;
        }
      }
    }
  }
  .el-radio-group {
    display: flex;
    flex-direction: column;
    label {
      margin-top: 30px;
    }
  }
  .btn_group {
    text-align: left;
    padding: 15px 0px;
    display: flex;
    justify-content: space-between;
    button {
      width: 120px;
      height: 36px;
      background: #00c356;
      border-radius: 3px;
      display: inline-block;
      text-align: center;
      color: #fff;
      border: none;
      outline: none;
      margin-right: 30px;
      cursor: pointer;
    }
  }
  .question_list {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 30px;
    max-height: 300px;
    overflow-y: scroll;
    span {
      display: inline-block;
      width: 54px;
      height: 36px;
      border: 1px solid #eee;
      text-align: center;
      line-height: 36px;
      cursor: pointer;
      font-size: 12px;
    }
    .success {
      background: #00c356 !important;
      color: #fff !important;
    }
    .error {
      background: #ff4c2d !important;
      color: #fff !important;
    }
    .current {
      background: #efefef;
    }
  }
}
</style>