<template>
  <div class="notes">
    <div class="warper">
      <div class="subject">
        <div class="item">
          <div class="title">
            科目一  <span>（交规）</span>
          </div>
          <div class="warper">
              <div class="subject_list" @click="answer(1,1)"  style="border-right:none">
              <img src="../assets/img/subject_1.png" alt="">
              章节练习
            </div>
            <div class="subject_list" @click="answer(2,1)">
              <img src="../assets/img/subject_2.png" alt="">
              顺序练习
            </div>
             <div class="subject_list" @click="answer(3,1)">
               <img src="../assets/img/subject_3.png" alt="">
              考试模拟
            </div>
          </div>
        </div>
         <div class="item">
            <div class="title">
            科目四  <span>（安全文明驾驶）</span>
          </div>
             <div class="warper">
            <div class="subject_list" @click="answer(2,2)">
              <img src="../assets/img/subject_2.png" alt="">
              顺序练习
            </div>
             <div class="subject_list" @click="answer(3,2)">
               <img src="../assets/img/subject_3.png" alt="">
              考试模拟
            </div>
          </div>
         </div>
      </div>
      <!-- <div class="right_warpe">
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
          
          </div>
          <div class="subj_list">
            <div class="item" @click="answer(2,2)">
              <span style="background:#feb354">
                <i class="iconfont icon-repeat"></i>
              </span>顺序练习
            </div>
             <div class="item" @click="answer(3,2)">
              <span style="background:#ab92ed">
                <i class="iconfont icon-repeat"></i>
              </span>
              考试模拟
            </div>
          </div>
        </div>
      </div> -->
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
    answer(type,subject) {
      if(type==1){
       this.$router.push({
        path: "/specialpractice",
        query: { subject: subject, type: type }
      });
      }else if(type==2){
         this.$router.push({
        path: "/answer",
        query: { subject: subject, type: type }
      });
      }else if(type==3){
         this.$router.push({
        path: "/examine",
        query: { subject: subject }
      });
      }
     
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
.subject_list{
  display: flex;
  color: #2A2828;
  font-size: 14px;
  font-weight: bold;
      align-items: center;
 width: 200px;
 cursor: pointer;
}
.notes {
  height: 600px;
  .subject{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: left;
    margin-top:52px;
    .item{
      width:790px;
    height:155px;
    background:rgba(242,246,249,1);
    border-radius:20px;
    box-sizing: border-box;
    padding: 20px 30px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title{
      font-size: 20px;
      color: #2A2828;
      font-weight:bold;
      span{
        color: #ACB1B7;
        font-weight: normal;
        font-size: 16px;
      }
    }
    }
  }
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
      border-bottom: none;
      .title {
        display: flex;
        justify-content: space-between;
        .item {
          width: 48%;
          border: 1px solid #efefef;
          padding: 15px;
          font-size: 13px;
              box-sizing: border-box;
          cursor: pointer;
        }
        .active {
          color: #00c356;
          background: #f2f2f2;
        }
      }
      .contnet {
        display: flex;
            justify-content: space-between;
        .subj_list {
          width: 48%;
          display: flex;
          flex-wrap: wrap;
          .item {
            width: 50%;
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #efefef;
            border-left: 1px solid #efefef;
            box-sizing: border-box;
            flex-direction: column;
              border-right: 1px solid #efefef;
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