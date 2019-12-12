<template>
  <div class="personalcenter_index">
    <div class="box_hd">
      <h2>邀请记录</h2>
      <!-- <div class="detail">
        <div class="item">
          总人数：
          <span class="red">1231</span>
        </div>
        <div class="item">
          已报名：
          <span class="red">1231</span>
        </div>
      </div>-->
      <div class="list">
        <el-table :data="list" stripe style="width: 100%">
          <el-table-column prop="phone" label="手机号" width="180"></el-table-column>
          <el-table-column prop="nickName" label="姓名" width="180"></el-table-column>
          <el-table-column prop="location" label="地址"></el-table-column>
          <el-table-column prop="state" label="状态">
            <template slot-scope="scope">
              <el-tag size="small">{{scope.row.state|state}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="驾考类型">
            <template slot-scope="scope">
              <el-tag size="small">{{scope.row.type|type}}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          startTime: null,
          endTime: null,
          size: 10,
          start: 0,
          page: 1,
          id: 51,
          phone: "1387675344", //手机号码
          nickName: "周某", //姓名
          location: "余杭", //地址
          state: 1, //状态 0未通知 1未沟通，2沟通成功，3沟通失败
          remark: null,
          type: 1, //驾考类型
          createTime: "2019-12-01 23:16:05",
          updateTime: "2019-12-01 23:16:18",
          code: null,
          shareCode: null
        }
      ]
    };
  },
  created() {
    this.inviteRecord();
  },
   filters:{
            state(item) {
            if(item==0){
              return "未通知"
            }else if(item==1){
              return "未沟通"
            }else if(item==2){
              return "沟通成功"
            }else if(item==3){
              return "沟通失败"
            }
            },
            type(item) {
               if(item==1){
              return "C1"
            }else if(item==2){
              return "C2"
            }
            }
        },
  methods: {
    //邀请记录
    inviteRecord() {
      this.$api.inviteRecord().then(res => {
        console.log(res);
        //  this.list = res.data.data;
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
    h2 {
      font-size: 30px;
      font-weight: 400;
      color: #757575;
      text-align: left;
      margin: 0px;
    }
    .detail {
      display: flex;
      .item {
        width: 50%;
        &:first-child {
          border-right: 1px solid #ccc;
        }
      }
    }
  }
}
</style>