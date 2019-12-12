<template>
  <div class="personalcenter">
    <div class="warper">
      <div class="left_warper">
        <ul class="left_nav">
          <li @click="jump('/personalcenter/index')">我的个人中心</li>
          <li @click="jump('/personalcenter/invitation')">我的邀请</li>
          <li @click="jump('/personalcenter/recordslist')">提现记录</li>
          <li @click="jump('/personalcenter/accountbinding')">绑定账号</li>
          <li @click="jump('/personalcenter/setpassword')">密码设置</li>
        </ul>
      </div>
      <div class="right_warper">
          <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    jump(url){
      this.$router.push(url)
    },
    
  }
}
</script>
<style lang="less" scoped>
.personalcenter {
  background: #f9f9f9;

  .warper {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    .left_warper {
      background: #fff;
      width: 234px;
      padding: 20px 10px;
      .left_nav {
        list-style: none;
        text-align: left;
        li {
          padding: 10px 0px;
          cursor: pointer;
          color: #757575;
        }
      }
    }
    .right_warper {
      background: #fff;
      flex: 1;
      margin-left: 20px;
      padding: 36px 0px;
    }
  }
}
</style>