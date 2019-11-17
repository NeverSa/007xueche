<template>
  <div class="coach">
    <div class="warper">
      <div class="scree">
        <div style=" display: flex;">
          <div class="label">按区域：</div>
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
                <img :src="item.image" alt />
              </div>
              <div class="center">
                <span class="school_name">{{item.schoolName}}</span>
                <span class="location">驾校地址：{{item.location}}</span>
                <span>
                  <el-rate v-model="item.score" disabled></el-rate>
                </span>
              </div>
            </div>

            <div class="money">￥4380</div>
          </div>
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
              style="width:405px;padding-bottom:20px;margin:0 auto"
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
      coach_list: [
        {
          id: 11,
          schoolName: "测试驾校", //学校名称
          location: "浙江省杭州市西湖区三墩心诚驾校", //学校地址
          image:
            "//pic1.58cdn.com.cn//nowater/jxt/n_v2bc850e95852f49a09147e197fa15cac6.png?h=120&w=200&ss=1", //图片信息
          fee: 129.23, //学费
          discount: 0.8, //折扣
          score: 5 //评分
        },
        {
          id: 121,
          schoolName: "测试驾校", //学校名称
          location: "浙江省杭州市西湖区三墩心诚驾校", //学校地址
          image:
            "//pic1.58cdn.com.cn//nowater/jxt/n_v2bc850e95852f49a09147e197fa15cac6.png?h=120&w=200&ss=1", //图片信息
          fee: 129.23, //学费
          discount: 0.8, //折扣
          score: 5 //评分
        },
        {
          id: 121,
          schoolName: "测试驾校", //学校名称
          location: "浙江省杭州市西湖区三墩心诚驾校", //学校地址
          image:
            "//pic1.58cdn.com.cn//nowater/jxt/n_v2bc850e95852f49a09147e197fa15cac6.png?h=120&w=200&ss=1", //图片信息
          fee: 129.23, //学费
          discount: 0.8, //折扣
          score: 5 //评分
        },
        {
          id: 1212311,
          schoolName: "测试驾校", //学校名称
          location: "浙江省杭州市西湖区三墩心诚驾校", //学校地址
          image:
            "//pic1.58cdn.com.cn//nowater/jxt/n_v2bc850e95852f49a09147e197fa15cac6.png?h=120&w=200&ss=1", //图片信息
          fee: 129.23, //学费
          discount: 0.8, //折扣
          score: 5 //评分
        }
      ]
    };
  },
  methods: {
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
  background: #f7f9fa;
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
        width: 118px;
      }
      .search_list {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        span {
          color: #999;
          font-size: 14px;
          line-height: 21px;
          margin-right: 20px;
          cursor: pointer;
        }
        .active {
          color: #00c356;
        }
      }
    }
    .coach_list {
      border-top: 1px solid #efefef;
      margin-top: 30px;
      padding-top: 30px;
      .item {
        display: flex;
        padding-bottom: 20px;
        justify-content: space-between;
        .center {
          display: flex;
          flex-direction: column;
          margin-left: 15px;
          .school_name {
          }
          .location {
            font-size: 14px;
            color: #666;
            margin: 15px 0px;
          }
        }
        .money {
          font-size: 18px;
          font-weight: 700;
          color: #ffa630;
          align-items: center;
          display: flex;
        }
      }
    }
    .right_warp {
      flex: 1;
      margin-left: 30px;
      background: #fff;
      .title {
        text-align: center;
        padding: 10px 0px;
      }
      .tab-content-each {
        padding: 0px 20px;
        .pop-title {
          height: 88px;
          line-height: 88px;
          font-size: 20px;
          color: #4a4a4a;
          text-align: center;
        }
        input {
          width: 388px;
          height: 38px;
          padding-left: 10px;
          display: block;
          margin: 0 auto;
          -webkit-appearance: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          border: 1px solid #eeeeee;
          border-radius: 3px;
          outline: none;
          margin-bottom: 20px;
          font-family: inherit;
        }
        .pop-btn {
          width: 390px;
          height: 40px;
          background: #00c356;
          margin: 0 auto;
          color: #fff;
          border-radius: 3px;
          text-align: center;
          line-height: 40px;
          cursor: pointer;
          font-size: 12px;
        }
      }
    }
  }
}
</style>