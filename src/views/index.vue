<template>
  <div class="regist">
    <div class="tab-content-each">
      <div class="pop-title">报名咨询</div>
      <div class="pop-name">
        <input type="text" placeholder="请填写您的姓名" v-model="user.phone" />
      </div>
      <div class="pop-tel">
        <input type="text" placeholder="请填写您的手机号" v-model="user.phone" />
      </div>
      <div class="pop-tel">
        <input type="text" placeholder="意向学车地址" v-model="user.location" />
      </div>
      <div class="pop-tel">
        <input type="text" placeholder="驾考类型 " v-model="user.type " />
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
            <div class="show_btn">立即报名</div>
          </div>
        </div>
        <div style="height:40px">
          <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
            <ul class="item">
              <li v-for="item in newsList" :key="item.title">{{item.title}}</li>
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
            <div class="show_btn">立即报名</div>
          </div>
        </div>
        <div style="height:40px">
          <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
            <ul class="item">
              <li v-for="item in newsList" :key="item.title">{{item.title}}</li>
            </ul>
          </vue-seamless-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      user: {},
      newsList: [
        {
          title: "186XXXX2564:报名成功"
        },
        {
          title: "186XXXX2564:报名成功"
        },
        {
          title: "186XXXX2564:报名成功"
        },
        {
          title: "186XXXX2564:报名成功"
        },
        {
          title: "186XXXX2564:报名成功"
        },
        {
          title: "186XXXX2564:报名成功"
        }
      ]
    };
  },
  methods: {
    submitUser() {}
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
