<template>
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
</template>
<script>
export default {
    name:"logincom",
  data() {
    return {
      user: {}
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
    }
  }
};
</script>
<style lang="less" scoped>
.tab-content-each {
  .pop-title {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    color: #4a4a4a;
    text-align: center;
    padding-bottom: 20px;
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