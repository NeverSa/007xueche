<template>
  <div class="map">
    <div class="title">练车场地</div>
    <baidu-map id="map" class="map-area" center="杭州" @ready="handlerBMap">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-marker
        v-if="mark"
        :position="position"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
        <bm-label :content="content" :offset="{width: -35, height: 30}" />
      </bm-marker>
      <bm-local-search
        style="display:none"
        :forceLocal="true"
        :selectFirstResult="true"
        :keyword="keyword"
        :auto-viewport="true"
        :location="location"
        @searchcomplete="searchcomplete"
      ></bm-local-search>
    </baidu-map>

    <div class="list">
      <el-scrollbar>
      <div class="list_warper">
         <div class="item" :class="{'current':myindex==index}" @click="changeMap(item,index)" v-for="(item,index) in areaList" :key="item.x">
        <div class="name">{{item.schoolName}}</div>
        <div class="address">
          <i class="iconfont icon-dizhi"></i>
          {{item.location}}
        </div>
      </div>
      </div>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mark: false,
      location: "杭州",
      content: "",
      position: { lng: 120.286061, lat: 30.174135 },
      map: null,
      BMap: null,
      keyword: "百度",
      areaList: [],
      myindex:0,
    };
  },
  mounted() {
    this.querySchool();
  },
  methods: {
    handlerBMap({ BMap, map }) {
      this.map = map;
      this.BMap = BMap;
    },
    searchcomplete(results) {
      setTimeout(() => {
        this.map.clearOverlays();
        this.position = {
          lng: results.Br[0].point.lng,
          lat: results.Br[0].point.lat
        };
        this.content = this.keyword;
        this.mark = true;
      }, 0);
    },
    querySchool() {
      this.$api.querySchool().then(res => {
        this.areaList = res.data.data;
      });
    },
    changeMap(item,index) {
      this.mark = false;
      this.keyword = item.location;
      this.myindex=index;
     
    }
   
  }
};
</script>
<style scoped lang="less">
.map {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  background: #fff;
  padding-bottom: 110px;
  .title {
    width: 100%;
    padding: 34px 0 14px;
    font-size: 24px;
    font-weight: 400;
    text-align: left;
  }
  .list {
    flex: 1;
    text-align: left;
    padding: 0px 30px;
    height: 528px;
    overflow-y: scroll;
    .item {
      border-bottom: 1px solid #efefef;
      padding: 10px 0px;
      padding-left: 20px;
      cursor: pointer;
      .name {
        padding: 10px 0;
        font-size: 18px;
        color: #555;
      }
      .address {
        position: relative;
        padding: 4px 0 0 0px;
        font-size: 14px;
        color: #888;
      }
    }
    .current{
      border-left: 8px solid #97C562;
    background:rgba(151,197,98,0.1);
    }
  }
}
.map-area {
  width: 753px;
  height: 522px;
}
</style>
