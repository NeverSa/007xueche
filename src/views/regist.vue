<template>
  <div class="wrapper">
    <div class="register">
      <div class style="    text-align: center;">
        <h2>注册</h2>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <div class="form_item">
          <label for>手机号码</label>
          <el-form-item prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
        </div>
        <div class="form_item">
          <label for>昵称</label>
          <el-form-item prop="nickName">
            <el-input v-model="ruleForm.nickName"></el-input>
          </el-form-item>
        </div>
        <div class="form_item">
          <label for>验证码</label>
          <el-form-item prop="code">
            <div style="display:flex">
              <el-input v-model="ruleForm.code"></el-input>
              <el-button @click="sendSms()" :disabled="disabled">
                <template v-if="!disabled">获取验证码</template>
                <template v-else>{{second}}秒后重发</template>
              </el-button>
            </div>
          </el-form-item>
        </div>
        <div class="form_item">
          <label for>密码</label>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sending: true, //是否发送验证码
      disabled: false, //是否禁发验证码
      second: 60,
      ruleForm: {
        phone: "",
        nickName:"",
        code:"",
        password:"",
      },
      rules: {
        phone: [{ required: true, message: "请输入手机号码", trigger: "blur" }],
        code: [
          { required: true, message: "请输入验证码", trigger: "change" }
        ],
        password:[
          { required: true, message: "请输入密码", trigger: "change" }
        ],
      }
    };
  },
  methods: {
    //发生验证码
    sendSms() {
      if (this.ruleForm.phone == "") {
        this.$message.error("手机号不能为空");
        return;
      }
      this.$api
        .sendSms({ mobile: this.ruleForm.phone, type: "REGISTER_CODE" })
        .then(res => {
          if (res.success) {
            this.disabled = true;
            this.timeDown();
          }
        });
    },
    timeDown() {
      let result = setInterval(() => {
        --this.second;
        if (this.second < 0) {
          clearInterval(result);
          this.sending = true;
          this.disabled = false;
          this.second = 60;
        }
      }, 1000);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            this.$api.register(this.ruleForm).then(res=>{
                if(res.data.success){
                    this.$message.success("注册成功");
                }else{
                    this.$message.error(res.data.message);
                }
            })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped lang="less">
.wrapper {
  width: 100%;
  height: 100vh;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  .register {
    width: 850px;
    background: #fff;
    padding: 30px;
    .form_item {
      label {
        color: #333;
        padding: 5px 0px;
        display: block;
      }
    }
  }
  .demo-ruleForm {
    width: 332px;
    margin: 0 auto;
  }
}
</style>