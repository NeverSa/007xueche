<template>
  <div class="personalcenter_index">
    <div class="box_hd">
      <h2>账号绑定</h2>
      <el-card class="box-card" style="margin-top:20px;">
        <div slot="header" class="clearfix">
          <span>账号信息：</span>
          <span v-if="!user.withdrawAccount">
            <el-tag type="danger">未绑定</el-tag>
          </span>
          <span v-if="user.withdrawAccount">{{user.withdrawAccount}}</span>
          <el-button style="float: right; padding: 3px 0" type="text" v-if="!user.withdrawAccount" @click="build=true">绑定</el-button>
        </div>
        <div>
          <div class="detail" v-if="build">
            <div class="item">
              <el-select v-model="accountType" placeholder="请选择账号类型">
                <el-option label="微信" value="1"></el-option>
                <el-option label="支付宝" value="2"></el-option>
              </el-select>
            </div>
            <div>
              <el-input v-model="withdrawAccount" placeholder="请输入账号"></el-input>
            </div>
            <div style="margin-left:30px;">
               <el-button type="success" plain @click="submitBuild()">确定</el-button>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      accountType: "",
      withdrawAccount:"",
      build:false,
      user: JSON.parse(sessionStorage.getItem("user"))
    };
  },
  methods: {
    submitBuild(){
      if(this.accountType==""){
        this.$message.error("账号类型不能为空");
        return
      }
      if(this.withdrawAccount==""){
         this.$message.error("账号信息不能为空");
        return
      }
      this.$api.bindAccount({accountType:this.accountType,withdrawAccount:this.withdrawAccount}).then(res=>{
        if(res.data.success){
           this.$message.error("绑定成功");
        }else{
           this.$message.error(res.data.message);
        }
       
      })
    },
  },
};
</script>
<style lang="less" scoped>
.personalcenter_index {
  text-align: left;
  .red {
    color: #ff6700;
  }
  .box_hd {
    padding: 0px 30px;
    h2 {
      font-size: 30px;
      font-weight: 400;
      color: #757575;
      text-align: left;
      margin: 0px;
    }
    .detail {
      margin-top: 15px;
      display: flex;
      .item {
        margin-right: 20px;
      }
    }
  }
}
</style>