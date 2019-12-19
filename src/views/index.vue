<template>
  <div>
    <banner></banner>
    <div class="regist">
      <div class="tab-content-each">
        <div class="tab_warper">
          <div class="pop-title">报名咨询</div>
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
              style="width:610px;padding-bottom:20px;margin:0 auto"
            >
              <el-option label="C1" value="1"></el-option>
              <el-option label="C2" value="2"></el-option>
            </el-select>
          </div>
          <div class="bottom-text">留下您的联系方式，不久后会收到来电</div>
          <div class="pop-btn" @click="submitUser">提交</div>
        </div>
      </div>
      <div
        class="card_warper card_warper_title"
        style="padding-right: 600px;
      margin-top:100px;
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
              src="http://www.qingmangxueche.com/KUpload/image/20180227/20180227183732_5639.jpg"
              alt
              style="width:100%;height:264px;border-radius:10px 10px 0px 0px;"
            />
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
                  <span  class="money"><span>￥</span> 4580</span>
                    <div class="show_btn" @click="dialogVisible=true">立即报名</div>
                </div>
              
              </div>
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
          </div>
        </div>
      <div class="card_list">
          <div>
            <img
              src="http://www.qingmangxueche.com/KUpload/image/20180227/20180227183732_5639.jpg"
              alt
              style="width:100%;height:264px;border-radius:10px 10px 0px 0px;"
            />
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
                  <span  class="money"><span>￥</span> 4580</span>
                    <div class="show_btn" @click="dialogVisible=true">立即报名</div>
                </div>
              
              </div>
            </div>
            <div style="height:40px">
              <vue-seamless-scroll
                :data="newsList2"
                :class-option="optionLeft"
                class="seamless-warp2"
              >
                <ul class="item">
                  <li v-for="item in newsList" :key="item">{{item}}报名成功</li>
                </ul>
              </vue-seamless-scroll>
            </div>
          </div>
        </div>
      </div>
      <el-dialog :visible.sync="dialogVisible">
        <logincom></logincom>
      </el-dialog>
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
              <img src="../assets/img/qq.png" align="absmiddle" />&nbsp;&nbsp;在线客服1号
            </a>
          </li>
          <li style="padding-left:0px;">
            <a target="_blank" href="tencent://message/?uin=1044170311&Site=sc.chinaz.com&Menu=yes">
              <img src="../assets/img/qq.png" align="absmiddle" />&nbsp;&nbsp;在线客服2号
            </a>
          </li>
          <li style="padding-left:0px;">
            <a target="_blank" href="tencent://message/?uin=1044170311&Site=sc.chinaz.com&Menu=yes">
              <img src="../assets/img/qq.png" align="absmiddle" />&nbsp;&nbsp;在线客服3号
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import logincom from "@/components/login";
import banner from "@/components/banner";
export default {
  data() {
    return {
      tagleStatus: false,
      dialogVisible: false,
      user: {},
      newsList: [],
      newsList2: []
    };
  },
  components: {
    logincom,
    banner
  },
  methods: {
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
        return item.substring(0, 3) + "XXXX" + item.substring(6, 11);
      });
      return arr; //修改span的内容，每次都是清空修改，而不是叠加
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
    this.newsList2 = this.getMoblieNum();
  },
  computed: {
    optionLeft() {
      return {
        direction: 2,
        limitMoveNum: 2
      };
    }
  }
};
</script>
<style lang="less" scoped>
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
}
#floatDivBoxs .floatDtt {
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: #f08326;
  color: #fff;
  font-size: 18px;
  text-indent: 22px;
  position: relative;
}
#floatDivBoxs .floatDqq {
  padding: 0 14px;
  margin: 0px;
}
#floatDivBoxs .floatDqq li {
  height: 45px;
  line-height: 45px;
  font-size: 15px;
  border-bottom: 1px solid #e3e3e3;
  padding: 0 0 0 50px;
}
#floatDivBoxs .floatDtxt {
  font-size: 18px;
  color: #333;
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
  width: 50px;
  height: 45px;
  background: url(../assets/img/online_arrow.jpg) no-repeat;
  position: fixed;
  top: 180px;
  right: 170px;
  z-index: 999;
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
  height: 30px;
  width: 100%;
  color: #545454;
  font-size: 14px;
  ul.item {
    width: 580px;
    li {
      float: left;
      margin-right: 10px;
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
  width: 1220px;
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
    .card_detail{
      padding: 25px 32px;
      .btn_bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0px;
          .money {
        color: #FB560A;
        font-size: 29px;
        font-weight: bold;
        span{font-size: 22px}
      }
         .show_btn {
           width:158px;
          height:47px;
          border:1px solid rgba(155,202,100,1);
          border-radius:24px;
          color: #9BCA64;
          text-align: center;
          line-height: 47px;
          cursor: pointer;
         font-size:17px; 

        }
      }
    }
    .card_title {
      display: flex;
      justify-content: space-between;
      color: #2A2828;
      font-weight:bold;
      font-size:22px;
    
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
