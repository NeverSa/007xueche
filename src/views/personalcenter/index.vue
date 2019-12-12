<template>
  <div class="personalcenter_index">
    <div class="box_hd">
      <div class="acc_info">
        <div class="user">
          <img src="../../assets/img/photo.jpg" alt class="img" />
          <div>{{detail.nickName}}</div>
        </div>
        <div class="user_info">
          <span>绑定手机：{{detail.phone}}</span>
          <span>
            邀请码:{{detail.shareCode}}
            <span
              class="el-dropdown-link"
              style="position: relative;"
              @click="showQc=!showQc"
            >
              <el-button type="primary" size="mini" round>分享</el-button>
              <div
                id="qrCode"
                ref="qrCodeDiv"
                style="width:200px;height:200px;position: absolute;top:30px;"
                v-show="showQc"
              ></div>
            </span>
          </span>
        </div>
      </div>
      <div class="icon_list">
        <div class="item">
          <i class="icon-qianbao iconfont" style="     background: #ff6709;"></i>
          <div>
            账户余额:
            <span class="red">{{detail.commission||"0.00"}}</span>
            <el-button size="mini" round type="success" style="margin-left:20px;" @click="dialogVisible=true">提现</el-button>
          </div>
        </div>
        <div class="item">
          <i class="icon-yaoqing iconfont" style="background:#8bc34a"></i>
          <div>
            邀请人数:
            <span class="red">{{list.length}}</span>
          </div>
        </div>
      </div>
    </div>

    <el-dialog title="提现申请" :visible.sync="dialogVisible" width="30%" >
     <div>
         <el-form :model="form">
            <el-form-item label="提现金额" >
              <el-input v-model="form.amount" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
     </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="withdraw">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      dialogVisible:false,
      showQc: false,
      detail: {},
      list: [],
      form:{
        amount:"",
      },
    };
  },
  created() {
    this.getUserinfo();
    this.inviteRecord();
  },
  mounted() {
    this.$nextTick(function() {
      this.bindQRCode();
    });
  },
  methods: {
    withdraw(){
      if(this.form.amount==""){
        this.$message.error("金额不能为空")
        return 
      }
      this.$api.withdraw({amount:this.form.amount}).then(res=>{
        if(res.data.success){
          this.$message.success("提现成功");
          this.dialogVisible=false;
        }else{
          this.$message.error(res.data.message)
        }
      })
    },
    //邀请记录
    inviteRecord() {
      this.$api.inviteRecord().then(res => {
        this.list = res.data.data;
      });
    },
    bindQRCode() {
      new QRCode(this.$refs.qrCodeDiv, {
        text: "https://www.baidu.com",
        width: 200,
        height: 200,
        colorDark: "#333333", //二维码颜色
        colorLight: "#ffffff", //二维码背景色
        correctLevel: QRCode.CorrectLevel.L //容错率，L/M/H
      });
    },
    getUserinfo() {
      this.$api.userInfo().then(res => {
        this.detail = res.data.data;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.personalcenter_index {
  .red {
    color: #ff6700;
  }
  .box_hd {
    padding: 0px 30px;
    .acc_info {
      border-bottom: 1px solid #efefef;
      padding-bottom: 20px;
      display: flex;
      .user {
        display: flex;
        align-items: center;
        font-size: 24px;
        font-weight: 400;
        color: #616161;
      }
      .img {
        border-radius: 50%;
        margin-right: 20px;
      }
      .user_info {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-left: 300px;
        span {
          margin-top: 20px;
          color: #757575;
          font-size: 14px;
        }
      }
    }
    .icon_list {
      display: flex;
      .item {
        display: flex;
        align-items: center;
        i {
          width: 100px;
          height: 100px;
          display: inline-flex;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          color: #fff;
          margin-right: 10px;
        }
        width: 50%;
        padding: 20px 0px;
      }
    }
  }
}
</style>