<template>
  <div class="answer">
    <div class="question-content">
      <div class="left">
        <span class="round">{{detail.type==2?'单选题':'判断题'}}</span>
      </div>
      <div class="right">
        <div class="questiopn">1/1433 年满20周岁，可以初次申请下列哪种准驾车型？</div>
        <div class="questiopn_item">
          <div class="questiopn_item_left">
            <div class="radio_list">
              <div class="radio" @click="checkedanswer(1)" :class="getClass(1)">
                <label for>
                  <i class="iconfont icon-success_no_circle" v-if="getClass(1)=='success'"></i>
                  <i class="iconfont icon-cuowuguanbishibai" v-if="getClass(1)=='error'"></i>
                </label>
                <span>{{detail.a}}</span>
              </div>
              <div class="radio" @click="checkedanswer(2)" :class="getClass(2)">
                <label for>
                  <i class="iconfont icon-success_no_circle" v-if="getClass(2)=='success'"></i>
                  <i class="iconfont icon-cuowuguanbishibai" v-if="getClass(2)=='error'"></i>
                </label>
                <span>{{detail.b}}</span>
              </div>
              <div class="radio" @click="checkedanswer(3)" :class="getClass(3)" v-if="detail.type==2">
                <label for>
                  <i class="iconfont icon-success_no_circle" v-if="getClass(3)=='success'"></i>
                  <i class="iconfont icon-cuowuguanbishibai" v-if="getClass(3)=='error'"></i>
                </label>
                <span>{{detail.c}}</span>
              </div>
              <div class="radio" @click="checkedanswer(4)" :class="getClass(4)" v-if="detail.type==2">
                <label for>
                  <i class="iconfont icon-success_no_circle" v-if="getClass(4)=='success'"></i>
                  <i class="iconfont icon-cuowuguanbishibai" v-if="getClass(4)=='error'"></i>
                </label>
                <span>{{detail.d}}</span>
              </div>
            </div>
          </div>
          <div class="questiopn_item_right"></div>
        </div>
      </div>
    </div>
    <div class="btn_group">
      <button @click="changeTitle(-1)">上一题</button>
      <button @click="changeTitle(1)">下一题</button>
    </div>
    <div class="question_list">
      <span :class="getListClass(item)" v-for="(item,index) in idList" :key="item.id" @click="getQuestion(item,index)">{{index+1}}</span>
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
      index:0
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
    }
  },
  created() {
    if (this.subject == 1) {
      this.getSubject1IdList();
    }
  },
  methods: {
    getListClass(item){
      let classarr=this.answerList.filter(key => {
        return item.id == key.id;
      });
      if(classarr.length>0){
        if(classarr[0].answer==classarr[0].select){
          return "success"
        }else{
          return "error"
        }
      }
      
    },
    changeTitle(index){
     if( this.index==0&&index==-1){
       return
     }
     if(this.index==this.idList.length&&index==1){
    return
     }
       this.index=this.index+index;
      this.getQuestion(this.idList[this.index])
    },
    getClass(type) {
      if (
        type == this.stateAnswer.select &&
        this.stateAnswer.select == this.detail.answer
      ) {
        return "success";
      } else if (
        type == this.stateAnswer.select &&
        this.stateAnswer.select !== this.detail.answer
      ) {
        return "error";
      } else {
        return "";
      }
    },
    ...mapActions(["updatAnswer"]),
    //获取科目一id列表
    getSubject1IdList() {
      this.$api.getSubject1IdList().then(res => {
        this.idList = res.data.data;
        this.getQuestion(this.idList[0]);
      });
    },
    //选题
    checkedanswer(an) {
      let has = this.answerList.findIndex(v => {
        return v.id == this.detail.id;
      });
      if (has == -1) {
        this.updatAnswer(Object.assign(this.detail, { select: an }));
      }
    },
    getQuestion(item,index) {
      this.index=index;
      this.$api.getSubject1Question({ id: item.id }).then(res => {
        this.detail = res.data.data;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.answer {
  width: 1100px;
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
    button {
      width: 120px;
      height: 36px;
      background: #00c356;
      border-radius: 3px;
      display: inline-block;
      text-align: center;
      line-height: 36px;
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
    span {
      display: inline-block;
      width: 54px;
      height: 36px;
      border: 1px solid #eee;
      text-align: center;
      line-height: 36px;
      cursor: pointer;
    }
    .success{
      background: #00c356;
      color: #fff;
    }
    .error{
      background: #ff4c2d;
      color: #fff;
    }
  }
}
</style>