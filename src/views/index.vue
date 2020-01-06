<template>
  <div>
    <banner></banner>
    <div class="regist_nav">
      <input type="text" placeholder="请输入您的手机号" v-model="simbal_phone">
      <button @click="submitUser1">我要报名</button>
    </div>
     <div style="height:40px">
              <vue-seamless-scroll
                :data="newsList"
                :class-option="optionLeft"
                class="seamless-warp2"
              >
                <ul class="item">
                  <li v-for="item in newsList" :key="item">{{item}}报名成功</li>
                </ul>
              </vue-seamless-scroll>
            </div>
    <div class="fixed_left">
      <div class="item">
        <el-input v-model="user.nickName" placeholder="请填写您的姓名"></el-input>
      </div>
      <div class="item">
        <el-input v-model="user.phone" placeholder="请填写您的手机号"></el-input>
      </div>
      <div class="item">
           <el-input v-model="user.location" placeholder="意向学车地址"></el-input>
      </div>
      <div class="item">
        <div
          class="pop-tel"
          style="display:flex;align-items: center;
            justify-content: cente"
        >
          <el-select
            v-model="user.type"
            placeholder="请选择驾考类型"
            style="width:610px;padding-bottom:20px;margin:0 auto"
          >
            <el-option label="C1" value="1"></el-option>
            <el-option label="C2" value="2"></el-option>
          </el-select>
        </div>
      </div>
      <div class="bottom-text">留下您的联系方式，不久后会收到来电</div>
          <div class="pop-btn" @click="submitUser">提交</div>
    </div>
    <div class="regist">
      <!-- <div class="tab-content-each">
        <div class="tab_warper">
          <div class="pop-title">报名咨询</div>
          <div class="pop-name">
            <input type="text" placeholder="请填写您的姓名" v-model="user.nickName">
          </div>
          <div class="pop-tel">
            <input type="text" placeholder="请填写您的手机号" v-model="user.phone">
          </div>
          <div class="pop-tel">
            <input type="text" placeholder="意向学车地址" v-model="user.location">
          </div>
          <div
            class="pop-tel"
            style="display:flex;align-items: center;
            justify-content: cente"
          >
            <el-select
              v-model="user.type"
              placeholder="请选择驾考类型"
              style="width:610px;padding-bottom:20px;margin:0 auto"
            >
              <el-option label="C1" value="1"></el-option>
              <el-option label="C2" value="2"></el-option>
            </el-select>
          </div>
          <div class="bottom-text">留下您的联系方式，不久后会收到来电</div>
          <div class="pop-btn" @click="submitUser">提交</div>
        </div>
      </div>-->

      <!-- <div
        class="card_warper card_warper_title"
        style="padding-right: 600px;
      margin-top:100px;
      padding-bottom:50px;
          box-sizing: border-box;"
      >
        <el-divider content-position="left">
          <span style="font-size:38px;font-weight:bold;color:rgba(42,40,40,1);">热门报考</span>
        </el-divider>
      </div>
      <div class="card_warper">
        <div class="card_list">
          <div>
            <img
              src="../assets/img/index_suj1.jpg"
              alt=""
              style="width:100%;height:264px;border-radius:10px 10px 0px 0px;"
            >
          </div>
          <div class="card_detail">
            <div class="card_title">
              <span>C1标准班</span>
            </div>
            <div class="img_list">
              <div class="details">
                <div class="item">
                  <span>
                    <i class="iconfont icon-baohu"></i>周一到周日练车
                  </span>
                  <span>
                    <i class="iconfont icon-baohu"></i>陪同报名
                  </span>
                </div>
                <div class="item">
                  <span>
                    <i class="iconfont icon-baohu"></i>快速拿证
                  </span>
                  <span>
                    <i class="iconfont icon-baohu"></i>免费保险
                  </span>
                </div>
                <div class="item">
                  <span>
                    <i class="iconfont icon-baohu"></i>收费透明
                  </span>
                  <span>
                    <i class="iconfont icon-baohu"></i>金牌教练
                  </span>
                </div>
                <div class="btn_bottom">
                  <span class="money">
                    <span>￥</span>4680
                  </span>
                  <div class="show_btn" @click="dialogVisible=true">立即报名</div>
                </div>
              </div>
            </div>
        
          </div>
        </div>
        <div class="card_list">
          <div>
            <img
               src="../assets/img/index_suj.png"
              alt=""
              style="width:100%;height:264px;border-radius:10px 10px 0px 0px;"
            >
          </div>
          <div class="card_detail">
            <div class="card_title">
              <span>C2标准班</span>
            </div>
            <div class="img_list">
              <div class="details">
                <div class="item">
                  <span>
                    <i class="iconfont icon-baohu"></i>周一到周日练车
                  </span>
                  <span>
                    <i class="iconfont icon-baohu"></i>陪同报名
                  </span>
                </div>
                <div class="item">
                  <span>
                    <i class="iconfont icon-baohu"></i>快速拿证
                  </span>
                  <span>
                    <i class="iconfont icon-baohu"></i>免费保险
                  </span>
                </div>
                <div class="item">
                  <span>
                    <i class="iconfont icon-baohu"></i>收费透明
                  </span>
                  <span>
                    <i class="iconfont icon-baohu"></i>金牌教练
                  </span>
                </div>
                <div class="btn_bottom">
                  <span class="money">
                    <span>￥</span>5380
                  </span>
                  <div class="show_btn" @click="dialogVisible=true">立即报名</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-dialog :visible.sync="dialogVisible">
        <logincom></logincom>
      </el-dialog> -->

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


    
    <div
      id="rightArrow"
      @click="tagleStatus=!tagleStatus"
      :class="{'tagactive_option':tagleStatus==true}"
    >
      <a href="javascript:;" title="���߿ͻ�"></a>
    </div>
    <div id="floatDivBoxs" :class="{'tagactive':tagleStatus==true}">
      <div class="floatDtt">在线客服</div>
      <div class="floatShadow">
        <ul class="floatDqq">
          <li style="padding-left:0px;">
            <a target="_blank" href="tencent://message/?uin=1044170311&Site=sc.chinaz.com&Menu=yes">
              <img src="../assets/img/qq.png" align="absmiddle">&nbsp;&nbsp;在线客服1号
            </a>
          </li>
          <li style="padding-left:0px;">
            <a target="_blank" href="tencent://message/?uin=1044170311&Site=sc.chinaz.com&Menu=yes">
              <img src="../assets/img/qq.png" align="absmiddle">&nbsp;&nbsp;在线客服2号
            </a>
          </li>
          <li style="padding-left:0px;">
            <a target="_blank" href="tencent://message/?uin=1044170311&Site=sc.chinaz.com&Menu=yes">
              <img src="../assets/img/qq.png" align="absmiddle">&nbsp;&nbsp;在线客服3号
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import logincom from "@/components/login";
import banner from "@/components/banner";
export default {
  data() {
    return {
      tagleStatus: false,
      dialogVisible: false,
      user: {},
      newsList: [],
      newsList2: [],
      simbal_phone: "",
        coach_list: [],
         page: 1,
    };
  },
  components: {
    banner
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
    getMoblieNum() {
      var numArray = new Array(
        "139",
        "138",
        "137",
        "136",
        "135",
        "134",
        "159",
        "158",
        "157",
        "150",
        "151",
        "152",
        "188",
        "187",
        "182",
        "183",
        "184",
        "178",
        "130",
        "131",
        "132",
        "156",
        "155",
        "186",
        "185",
        "176",
        "133",
        "153",
        "189",
        "180",
        "181",
        "177"
      ); //这是目前找到的除了数据卡外的手机卡前三位，类型是字符串数组
      var numList = ""; //创建一个数组用来存放10个手机号
      var arraryLength = numArray.length; //获取数组长度，这样如果手机号前三位取值单位发生变化，在下一步求i的地方就不用修改随机数取值范围了
      for (var n = 0; n < 10; n++) {
        var i = parseInt(Math.random() * arraryLength); //注意乘以的是上面numArray数组的长度，这样就可以取出数组中的随机一个数。random的取值范围是大于等于0.0，小于1.0，相乘后得到的就是0到（数组长度-1）的值。
        var num = numArray[i]; //取出随机的手机号前三位并赋值给num，手机号前三位是字符串类型的
        for (var j = 0; j < 8; j++) {
          num = num + Math.floor(Math.random() * 10); //num是字符串，后面的数字被当做字符串。所以变成两个字符串拼接了
        }
        if (n == 0) {
          numList = numList + num; //第一个手机号前不出现“，”
        } else {
          numList = numList + "," + num;
        } //从第一个手机号后面到最后一个之前用逗号分隔
      }
      let arr = numList.split(",").map(item => {
        return item.substring(0, 3) + "XXXX" + item.substring(6, 10);
      });
      console.log(arr)
      return arr; //修改span的内容，每次都是清空修改，而不是叠加
    },
    submitUser1() {
      if (this.simbal_phone == "" || this.simbal_phone == undefined) {
        this.$message.error("手机号码不能为空");
        return;
      }
      this.$api
        .saveApply({
          phone: this.simbal_phone,
          nickName: this.simbal_phone,
          location: this.simbal_phone
        })
        .then(res => {
          if (res.data.success) {
            this.$message.success("您已提交成功，我们会尽快联系您");
          } else {
            this.$message.error(res.data.message);
          }
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
    }
  },
  created() {
    this.newsList = this.getMoblieNum();
    this.querySchool()
  },
  computed: {
    optionLeft() {
      return {
        direction: 2,
        limitMoveNum: 1
      };
    }
  }
};
</script>
<style lang="less" scoped>
.coach_list {
  width: 800px;
  margin: 0 auto;
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
.fixed_left{
  width:300px;
      position: fixed;
    background: #f5a63b;
    z-index: 99;
    padding: 40px 20px;
    border-radius: 15px;
    bottom:0px;
    .bottom-text {
    text-align: center;
    font-size: 14px;
    color: #000 !important;
    color: rgba(192, 196, 204, 1);
    line-height: 14px;
    margin-bottom:10px;
  }
    .pop-btn {
    height: 55px;
    background: #fff;
    box-shadow: 5px 5px 20px rgba(155, 202, 100, 0.3);
    border-radius: 4px;
    margin: 0 auto;
    line-height: 55px;
       color: #f5a63b;
    font-size: 20px;
    text-align: center;
    letter-spacing: 18px;
    cursor: pointer;
  }
    .item{
      width: 100%;
      margin-bottom: 20px;
      input{
        color: #000;
        &::input-placeholder{
          color: #000;
        } 
      }
    }
}
.regist_nav {
  background-color: #282d2c;
  padding: 25px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    height: 45px;
    font-size: 20px;
    color: #666;
    padding-left: 20px;
    line-height: 41px;
    border: none;
    outline: none;
    width: 450px;
    overflow: hidden;
  }
  button {
    background: rgba(155, 202, 100, 1);
    box-shadow: 5px 5px 20px rgba(155, 202, 100, 0.3);
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    height: 47px;
    margin-left: 15px;
  }
}
.tagactive {
  right: -175px !important;
}
.tagactive_option {
  right: 0px !important;
}
#floatDivBoxs {
  width: 170px;
  background: #fff;
  position: fixed;
  top: 180px;
  right: 0;
  z-index: 999;
      border-radius: 0px 0px 0px 10px;
    overflow: hidden;
}
#floatDivBoxs .floatDtt {
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: #F4A53B;
  color: #fff;
  font-size: 18px;
  text-indent: 22px;
  position: relative;
 

}
#floatDivBoxs .floatDqq {
  padding: 0 14px;
  margin: 0px;
  color: #208FE4;

}
#floatDivBoxs .floatDqq li {
  height: 45px;
  line-height: 45px;
  font-size: 15px;
  border-bottom: 1px solid #F5F5F5;
  padding: 5px 0 5px 50px;
}
#floatDivBoxs .floatDqq li a{
  color:#208FE4;
  text-decoration: none;

}
#floatDivBoxs .floatDtxt {
  font-size: 18px;
  padding: 12px 14px;
}
#floatDivBoxs .floatDtel {
  padding: 0 0 15px 10px;
}
#floatDivBoxs .floatDtel img {
  display: block;
}
#floatDivBoxs .floatDbg {
  width: 100%;
  height: 20px;
  background: url(../assets/img/online_botbg.jpg) no-repeat;
  box-shadow: -2px 0 3px rgba(0, 0, 0, 0.25);
}
.floatShadow {
  background: #fff;
  box-shadow: -2px 0 3px rgba(0, 0, 0, 0.25);
}
#rightArrow {
  width: 68px;
  height:45px;
  position: fixed;
  top: 180px;
  right: 170px;
  z-index: 999;
  display: flex;
box-shadow:0px 3px 6px rgba(0,0,0,0.16);
border-radius:10px 0px 0px 10px;
  background: url(../assets/img/kefu.png) no-repeat rgba(244,165,59,1) center center;
}
#rightArrow a {
  display: block;
  height: 45px;
}
ul {
  list-style: none;
}
.seamless-warp2 {
  overflow: hidden;
  height:40px;
  width: 1000px;
  margin: 0 auto;
  font-size: 18px;
  ul.item {
    width: 580px;
    li {
      float: left;
      margin-right: 10px;
        color: #000
    }
  }
}
.regist {
  text-align: left;
}
.tab-content-each {
  background: url(../assets/img/shape.png) no-repeat center center;
  .tab_warper {
    width: 816px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.06);
    margin-top: 42px;
    border-radius: 15px;
    padding-bottom: 52px;
  }
  .pop-title {
    height: 88px;
    line-height: 88px;
    font-size: 26px;
    color: #2a2828;
    text-align: center;
  }
  input {
    width: 600px;
    height: 38px;
    padding-left: 10px;
    display: block;
    margin: 0 auto;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(220, 223, 230, 1);
    border-radius: 4px;
    outline: none;
    margin-bottom: 20px;
    font-family: inherit;
  }
  .pop-btn {
    width: 400px;
    height: 55px;
    background: rgba(155, 202, 100, 1);
    box-shadow: 5px 5px 20px rgba(155, 202, 100, 0.3);
    border-radius: 4px;
    margin: 0 auto;
    line-height: 55px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    letter-spacing: 18px;
    cursor: pointer;
  }
  .bottom-text {
    text-align: center;
    font-size: 14px;
    color: #999999;
    color: rgba(192, 196, 204, 1);
    line-height: 14px;
    text-align: left;
    padding-left: 98px;
    margin-bottom: 36px;
  }
}
.card_title {
  text-align: left;
}
.card_warper_title {
  font-size: 24px;
  color: #333;
  font-weight: 400;
  display: flex;
}
.card_warper {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0px 109px 0px;
  .card_list {
    width: 390px;
    border-radius: 5px;
    border: 1px solid #eee;
    box-sizing: border-box;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.06);
    border-radius: 10px 10px 0px 0px;
    .card_detail {
      padding: 25px 32px;
      .btn_bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0px;
        .money {
          color: #fb560a;
          font-size: 29px;
          font-weight: bold;
          span {
            font-size: 22px;
          }
        }
        .show_btn {
          width: 158px;
          height: 47px;
          border: 1px solid rgba(155, 202, 100, 1);
          border-radius: 24px;
          color: #9bca64;
          text-align: center;
          line-height: 47px;
          cursor: pointer;
          font-size: 17px;
        }
      }
    }
    .card_title {
      display: flex;
      justify-content: space-between;
      color: #2a2828;
      font-weight: bold;
      font-size: 22px;
    }
    .img_list {
      display: flex;
      margin-top: 10px;
      .details {
        flex: 1;

        .item {
          margin-bottom: 15px;
          span {
            width: 50%;
            display: inline-block;
            color: #999;
            font-size: 13px;
            i {
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
