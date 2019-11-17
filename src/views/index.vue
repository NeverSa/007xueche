<template>
  <div>
    <banner></banner>
    <div class="regist">
      <div class="tab-content-each">
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
            style="width:405px;padding-bottom:20px;margin:0 auto"
          >
            <el-option label="C1" value="1"></el-option>
            <el-option label="C2" value="2"></el-option>
          </el-select>
        </div>
        <div class="pop-btn" @click="submitUser">提交</div>
        <div class="bottom-text">留下您的联系方式，不久后会收到来电</div>
      </div>
      <div class="card_warper card_warper_title" style="padding:0px">热门报考</div>
      <div class="card_warper">
        <div class="card_list">
          <div class="card_title">
            <span>C1标准班</span>
            <span class="money">￥4580</span>
          </div>
          <div class="img_list">
            <div>
              <img
                src="http://www.qingmangxueche.com/KUpload/image/20180227/20180227183732_5639.jpg"
                alt
                style="width:236px;"
              />
            </div>
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
              <div class="show_btn" @click="dialogVisible=true">立即报名</div>
            </div>
          </div>
          <div style="height:40px">
            <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
              <ul class="item">
                <li v-for="item in newsList" :key="item">{{item}}报名成功</li>
              </ul>
            </vue-seamless-scroll>
          </div>
        </div>
        <div class="card_list">
          <div class="card_title">
            <span>C2标准班</span>
            <span class="money">￥4880</span>
          </div>
          <div class="img_list">
            <div>
              <img
                src="http://www.qingmangxueche.com/KUpload/image/20180227/20180227183732_5639.jpg"
                alt
                style="width:236px;"
              />
            </div>
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
              <div class="show_btn" @click="dialogVisible=true">立即报名</div>
            </div>
          </div>
          <div style="height:40px">
            <vue-seamless-scroll
              :data="newsList2"
              :class-option="optionLeft"
              class="seamless-warp2"
            >
              <ul class="item">
                <li v-for="item in newsList2" :key="item">{{item}}报名成功</li>
              </ul>
            </vue-seamless-scroll>
          </div>
        </div>
      </div>
      <el-dialog :visible.sync="dialogVisible">
        <logincom></logincom>
      </el-dialog>
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
ul {
  list-style: none;
}
.seamless-warp2 {
  overflow: hidden;
  height: 40px;
  width: 100%;
  color: #666;
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
  .bottom-text {
    text-align: center;
    font-size: 12px;
    color: #999999;
    line-height: 14px;
    margin-top: 12px;
  }
}
.card_title {
  text-align: left;
}
.card_warper_title {
  font-size: 24px;
  color: #333;
  font-weight: 400;
}
.card_warper {
  width: 1220px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  .card_list {
    width: 48%;
    border-radius: 5px;
    border: 1px solid #eee;
    padding: 20px;
    box-sizing: border-box;
    .card_title {
      display: flex;
      justify-content: space-between;
      .money {
        color: #ffa630;
        font-size: 24px;
      }
    }
    .img_list {
      display: flex;
      margin-top: 10px;
      .details {
        padding: 0px 15px;
        flex: 1;
        .show_btn {
          background: #00c356;
          margin: 0 auto;
          color: #fff;
          border-radius: 3px;
          text-align: center;
          line-height: 40px;
          cursor: pointer;
          font-size: 12px;
          width: 140px;
          margin-top: 35px;
        }
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
