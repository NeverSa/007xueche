<template>
  <div class="answer">
    <div class="question-content">
      <div class="left">
        <span class="round">单选题</span>
      </div>
      <div class="right">
        <div class="questiopn">1/1433 年满20周岁，可以初次申请下列哪种准驾车型？</div>
        <div class="questiopn_item">
          <div class="questiopn_item_left">
            <el-radio-group v-model="radio">
              <el-radio :label="3">备选项</el-radio>
              <el-radio :label="6">备选项</el-radio>
              <el-radio :label="9">备选项</el-radio>
            </el-radio-group>
          </div>
          <div class="questiopn_item_right">asdad</div>
        </div>
      </div>
    </div>
    <div class="btn_group">
      <button>上一题</button>
      <button>下一题</button>
    </div>
    <div class="question_list">
      <span>1</span>
      <span>1</span>
      <span>1</span>
      <span>1</span>
      <span>1</span>
      <span>1</span>
      <span>1</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.answer {
  width: 1100px;
  margin: 0 auto;
  .question-content {
    display: flex;
    padding: 20px 0px;
    .left {
      width: 70px;
      .round {
        display: inline-block;
        background: #00c356;
        font-size: 12px;
        border-radius: 15px;
        padding: 3px 8px;
        color: #fff;
      }
    }
    .right {
      .questiopn {
        text-align: left;
      }
      flex: 1;
      .questiopn_item {
        display: flex;
        justify-content: space-between;
        .questiopn_item_left {
          text-align: left;
        }
      }
    }
  }
  .el-radio-group {
    display: flex;
    flex-direction: column;
    label {
      margin-top: 30px;
    }
  }
  .btn_group {
    text-align: left;
    padding: 15px 0px;
    button {
      width: 120px;
      height: 36px;
      background: #00c356;
      border-radius: 3px;
      display: inline-block;
      text-align: center;
      line-height: 36px;
      color: #fff;
      border: none;
      outline: none;
      margin-right: 30px;
      cursor: pointer;
    }
  }
  .question_list {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 30px;
    span {
      display: inline-block;
      width: 54px;
      height: 36px;
      border: 1px solid #eee;
      text-align: center;
      line-height: 36px;
      cursor: pointer;
    }
  }
}
</style>