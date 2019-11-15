<template>
  <div class="map">
    <div class="title">练车场地</div>
    <div class="map-area" id="map"></div>
    <div class="list">
      <div class="item" @click="changeMap(item)" v-for="item in areaList" :key="item.x">
        <div class="name">{{item.name}}</div>
        <div class="address"><i class="iconfont  icon-dizhi"></i>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import BMap from "BMap";
export default {
  data() {
    return {
      mapId: "BMap-" + parseInt(Date.now() + Math.random()),
      myMap: null,
      areaList: [
        {
          name: "测试场地1",
          x: "120.172391",
          y: "30.269053",
          address: "zdadasdasd"
        },
        {
          name: "测试场地2",
          x: "120.146951",
          y: "30.28078",
          address: "zdadasdasd"
        },
        {
          name: "测试场地3",
          x: "120.1126",
          y: "30.30024",
          address: "zdadasdasd"
        },
        {
          name: "测试场地4",
          x: "120.219822",
          y: "30.254455",
          address: "zdadasdasd"
        }
      ]
    };
  },
  mounted() {
    this.createMap();
  },
  methods: {
    changeMap(item) {
      this.myMap.clearOverlays();
      var point = new BMap.Point(item.x, item.y);
      var marker = new BMap.Marker(point); //创建标注
      this.myMap.addOverlay(marker); //方法addOverlay() 向地图中添加覆盖物
    },
    createMap() {
      /* eslint-disable */
      // 创建Map实例
      this.myMap = new BMap.Map("map");
      // 初始化地图,设置中心点坐标和地图级别
      this.myMap.centerAndZoom(new BMap.Point(120.186764, 30.256826), 11);
      //添加地图类型控件
      this.myMap.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      // 设置地图显示的城市 此项是必须设置的
      this.myMap.setCurrentCity("北京");
      //开启鼠标滚轮缩放
      this.myMap.enableScrollWheelZoom(true);
      /* eslint-enable */
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
    .item {
      border-bottom: 1px solid #efefef;
      padding: 10px 0px;
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
  }
}
.map-area {
  width: 753px;
  height: 522px;
}
</style>
