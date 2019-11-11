<template>
  <div class="regist">
    <div class="tab-content-each">
      <div class="pop-title">报名咨询</div>
      <div class="pop-name">
        <input type="text" placeholder="请填写您的姓名" v-model="user.phone"/>
      </div>
      <div class="pop-tel">
        <input type="text" placeholder="请填写您的手机号"  v-model="user.phone"/>
      </div>
        <div class="pop-tel">
        <input type="text" placeholder="意向学车地址"  v-model="user.location"/>
      </div>
        <div class="pop-tel">
        <input type="text" placeholder="驾考类型 "  v-model="user.type "/>
      </div>
      <div class="pop-btn" @click="submitUser">提交</div>
      <div class="bottom-text">留下您的联系方式，不久后会收到来电</div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data(){
    return {
      user:{},
    }
  },
  methods:{
    submitUser(){}
  }
};
</script>
<style lang="less" scoped>
.tab-content-each {
  .pop-title {
    height: 88px;
    line-height: 88px;
    font-size: 20px;
    color: #4a4a4a;
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
</style>
