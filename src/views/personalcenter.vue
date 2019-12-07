<template>
  <div class="personalcenter">
    <div class>asdd</div>
    <div class="warper">
      <div class="left_warper">
        <ul class="left_nav">
          <li>我的个人中心</li>
          <li>我的邀请</li>
          <li>体现记录</li>
          <li>绑定账号</li>
        </ul>
      </div>
      <div class="right_warper">
          <router-view/>
      </div>
    </div>
  </div>
</template>
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