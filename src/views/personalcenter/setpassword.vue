<template>
  <div class="personalcenter_index">
    <div class="box_hd">
      <h2>密码设置</h2>
      <div class="detail">
        <el-form ref="form" :model="form" label-width="80px"  :rules="rules" style="width:400px">
          <el-form-item label="密码 " prop="password"> 
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="重复密码" prop="repassword">
              <el-input v-model="form.repassword" type="password"></el-input>
          </el-form-item>
       
          <el-form-item>
            <el-button type="primary" @click="onSubmit">修改</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
          password:"",
          repassword:"",
      },
       rules: {
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
          repassword: [
            { required: true, message: '请确认密码', trigger: 'blur' },
          ],
       }
    };
  },
  methods: {
    onSubmit() {
     this.$refs["form"].validate((valid) => {
          if (valid) {
              if(this.form.password!==this.form.repassword){
                  this.$message.error("二次密码不一致")
                  return 
              }
              this.$api.setPassword({password:this.form.password}).then(res=>{
                  if(res.data.success){
                      this.$message.success("密码修改成功")
                  }else{
                       this.$message.error(res.data.message)
                  }
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
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