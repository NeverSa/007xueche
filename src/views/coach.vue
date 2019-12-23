<template>
  <div class="coach">
    <div class="warper">
      <div class="scree">
        <div style=" display: flex;">
          <div class="label">全部区域</div>
          <div class="search_list">
            <span
              v-for="item in areList"
              :class="{'active':item.code==code}"
              :key="item.code"
              @click="changeCode(item.code)"
            >{{item.name}}</span>
          </div>
        </div>
        <div class="coach_list">
          <div class="item" v-for="item in coach_list" :key="item.id">
            <div style="display:flex">
              <div>
                <img :src="item.image" alt style="width:200px;height:120px;" />
              </div>
              <div class="center">
                <span class="school_name">{{item.schoolName}}</span>
                 <span>
                  <el-rate v-model="item.score" disabled></el-rate>
                </span>
                <span class="location"><img src="../assets/img/dingwei.png" alt=""> 驾校地址：{{item.location}}</span>
               
              </div>
            </div>

            <div class="money">￥{{item.fee}}</div>
          </div>

          <el-pagination layout="prev, pager, next" :current-page.sync ="page" :total="50" @current-change="currentChange()"></el-pagination>
        </div>
      </div>
      <div class="right_warp">
        <div class="title">报名咨询</div>
        <div class="tab-content-each">
          <div class="pop-name">
            <input type="text" placeholder="请填写您的姓名" v-model="user.nickName" />
          </div>
          <div class="pop-tel">
            <input type="text" placeholder="请填写您的手机号" v-model="user.phone" />
          </div>
          <div class="pop-tel">
            <input type="text" placeholder="意向学车地址" v-model="user.location" />
          </div>
          <div class="pop-tel" style="display:flex;align-items: center;
    justify-content: cente">
            <el-select
              v-model="user.type"
              placeholder="请选择驾考类型"
              style="width:100%;padding-bottom:20px;margin:0 auto"
            >
              <el-option label="C1" value="1"></el-option>
              <el-option label="C2" value="2"></el-option>
            </el-select>
          </div>
          <div class="pop-btn" @click="submitUser">提交</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: "",
      user: {},
      page: 1,
      areList: [
        {
          code: "",
          name: "不限"
        },
        {
          code: "1",
          name: "上城区"
        },
        {
          code: "2",
          name: "下城区"
        },
        {
          code: "3",
          name: "江干区"
        },
        {
          code: "4",
          name: "拱墅区"
        },
        {
          code: "5",
          name: "西湖区"
        },
        {
          code: "6",
          name: "滨江区"
        },
        {
          code: "7",
          name: "萧山区"
        },
        {
          code: "8",
          name: "余杭区"
        },
        {
          code: "9",
          name: "下沙"
        }
      ],
      coach_list: []
    };
  },
  created() {
    this.querySchool();
  },
  methods: {
    currentChange(){
      this.querySchool()
    },
    querySchool() {
      this.$api.querySchool({ page: this.page,size:5 }).then(res => {
        this.coach_list = res.data.data;
      });
    },

    submitUser() {
      if (this.user.nickName == "" || this.user.nickName == undefined) {
        this.$message.error("姓名不能为空");
        return;
      }
      if (this.user.phone == "" || this.user.phone == undefined) {
        this.$message.error("手机号码不能为空");
        return;
      }
      if (this.user.location == "" || this.user.location == undefined) {
        this.$message.error("意向学车地址不能为空");
        return;
      }
      this.$api.saveApply(this.user).then(res => {
        if (res.data.success) {
          this.$message.success("您已提交成功，我们会尽快联系您");
        } else {
          this.$message.error(res.data.message);
        }
      });
    },
    changeCode(code) {
      this.code = code;
    }
  }
};
</script>
<style lang="less" scoped>
.coach {
  text-align: left;
  background: #fff;
  .warper {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .scree {
      background: #fff;
      width: 70%;
      padding: 30px;
      box-sizing: border-box;

      .label {
        padding: 5px 10px;
        background: #9bca64;
        border-radius: 13px;
        color: #fff;
        font-size: 12px;
        height: 28px;
        width: 86px;
        text-align: center;
        box-sizing: border-box;
      }
      .search_list {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        span {
          color: #5B5B5B;
          font-size: 14px;
          cursor: pointer;
          border:1px solid rgba(194,194,194,1);
        font-size: 12px;
        border-radius:13px;
          padding: 5px 15px;
          margin-left: 15px;
          margin-bottom: 5px;
          height: 28px;
          box-sizing: border-box;
        }
        .active {
          color: #00c356;
            border:1px solid #00c356;
        }
      }
    }
    .coach_list {
      margin-top: 30px;
      padding-top: 30px;
      .item {
        display: flex;
        padding-bottom: 20px;
        justify-content: space-between;
        .center {
          display: flex;
          flex-direction: column;
          margin-left:40px;
          justify-content: space-between;
          .school_name {
            font-size:22px;
            font-weight:bold;
            color: #333631;
            padding-top: 30px;
          }
          .location {
            font-size: 18px;
            color: #ACB4B9;
            margin: 15px 0px;
            display: flex;
            align-items: center;
            img{
              margin-right: 8px;
            }
          }
        }
        .money {
          font-size: 22px;
          font-weight: 700;
          color: #FB560A;
          align-items: center;
          display: flex;
        }
      }
    }
    .right_warp {
      width: 400px;
      box-sizing: border-box;
      margin-left: 30px;
      background:rgba(255,255,255,1);
    box-shadow:0px 3px 20px rgba(0,0,0,0.06);
    border-radius:20px;
    margin-top:30px;
    padding: 0px  40px;
  height: 420px;
      .title {
        color: #2A2828;
        font-size:22px;
        text-align: center;
        padding: 30px 0px;
      }
      .tab-content-each {
        .pop-title {
          height: 88px;
          line-height: 88px;
          font-size: 20px;
          color: #4a4a4a;
          text-align: center;
        }
        input {
          width: 318px;
          height: 38px;
          padding-left: 10px;
          display: block;
          margin: 0 auto;
          -webkit-appearance: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
       border:1px solid rgba(220,223,230,1);
          border-radius: 4px;
          outline: none;
          margin-bottom: 20px;
          font-family: inherit;
        }
        .pop-btn {
        width: 100%;
          height: 40px;
          margin: 0 auto;
          color: #fff;
          border-radius: 3px;
          text-align: center;
          line-height: 40px;
          cursor: pointer;
          font-size: 12px;
          background:rgba(155,202,100,1);
      box-shadow:5px 5px 20px rgba(155,202,100,0.3);
      border-radius:4px;
        }
      }
    }
  }
}
</style>