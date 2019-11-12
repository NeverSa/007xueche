<template>
  <div class="coach">
    <div class="warper">
      <div class="scree">
        <div style=" display: flex;">
          <div class="label">按区域：</div>
          <div class="search_list">
            <span
              v-for="item in areList"
              :class="{'active':item.code==code}"
              :key="item.code"
              @click="changeCode(item.code)"
            >{{item.name}}</span>
          </div>
        </div>
        <div class="coach_list">
          <div class="item" v-for="item in coach_list" :key="item.id">
            <div>
              <img :src="item.image" alt />
            </div>
            <div class="center">
              <span class="school_name">{{item.schoolName}}</span>
              <span class="location">驾校地址：{{item.location}}</span>
              <span>
                <el-rate v-model="item.score"></el-rate>
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="right_warp">asdad</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: "",
      areList: [
        {
          code: "",
          name: "不限"
        },
        {
          code: "1",
          name: "上城区"
        },
        {
          code: "2",
          name: "下城区"
        },
        {
          code: "3",
          name: "江干区"
        },
        {
          code: "4",
          name: "拱墅区"
        },
        {
          code: "5",
          name: "西湖区"
        },
        {
          code: "6",
          name: "滨江区"
        },
        {
          code: "7",
          name: "萧山区"
        },
        {
          code: "8",
          name: "余杭区"
        },
        {
          code: "9",
          name: "下沙"
        }
      ],
      coach_list: [
        {
          id: 11,
          schoolName: "测试驾校", //学校名称
          location: "浙江省杭州市西湖区三墩心诚驾校", //学校地址
          image:
            "//pic1.58cdn.com.cn//nowater/jxt/n_v2bc850e95852f49a09147e197fa15cac6.png?h=120&w=200&ss=1", //图片信息
          fee: 129.23, //学费
          discount: 0.8, //折扣
          score: 5 //评分
        }
      ]
    };
  },
  methods: {
    changeCode(code) {
      this.code = code;
    }
  }
};
</script>
<style lang="less" scoped>
.coach {
  text-align: left;
  background: #f7f9fa;
  .warper {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .scree {
      background: #fff;
      width: 70%;
      padding: 30px;
      box-sizing: border-box;

      .label {
        width: 118px;
      }
      .search_list {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        span {
          color: #999;
          font-size: 14px;
          line-height: 21px;
          margin-right: 20px;
          cursor: pointer;
        }
        .active {
          color: #00c356;
        }
      }
    }
    .coach_list {
      border-top: 1px solid #efefef;
      margin-top: 30px;
      .item {
        display: flex;
        .center {
          display: flex;
          flex-direction: column;
          .school_name {
          }
        }
      }
    }
    .right_warp {
      flex: 1;
      margin-left: 30px;
      background: #fff;
    }
  }
}
</style>