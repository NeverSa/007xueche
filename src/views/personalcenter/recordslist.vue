<template>
  <div class="personalcenter_index">
    <div class="box_hd">
      <h2>提现记录</h2>
      <div class="list">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="amount" label="申请金额" width="180"></el-table-column>
          <el-table-column prop="state" label="申请状态" width="180">
            <template slot-scope="scope">
              <el-tag size="small">{{scope.row.state|state}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="remark" label="说明"></el-table-column>
          <el-table-column prop="updateTime" label="时间"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          startTime: null,
          endTime: null,
          size: 10,
          start: 0,
          page: 1,
          id: 2,
          userId: 2,
          amount: 5, //申请金额
          state: 0, //申请状态,0提现中，1提现成功，2提现失败
          remark: null, //说明
          createTime: "2019-12-01 23:39:30",
          updateTime: "2019-12-01 23:39:30"
        }
      ]
    };
  },
  created() {
    this.withdrawRecord();
  },
  filters: {
    state(item) {
      if (item == 0) {
        return "提现中";
      } else if (item == 1) {
        return "提现成功";
      } else if (item == 2) {
        return "提现失败";
      }
    }
  },
  methods: {
    withdrawRecord() {
      this.$api.withdrawRecord().then(res => {
         this.tableData=res.data.data
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