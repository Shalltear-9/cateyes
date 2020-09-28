<template>
  <li class="list">
    <img :src="item.img | format" :alt="item.nm">
    <div class="center">
      <div class="left">
        <div class="head">
          <h2>{{item.nm}}</h2>
          <span class="d" v-if="item.version==='v2d imax'">2D</span>
          <span class="d" v-else>3D</span>
          <span class="imax">IMAX</span>
        </div>
        <span v-if="item.sc">观众评：{{item.sc}}</span>
        <span v-else>{{item.wish}}人想看</span>
        <span class="star">主演：{{item.star}}</span>
        <p>{{item.showInfo}}</p>
      </div>
      <div class="right">
        <span class="sell" v-if="item.showst===3">购票</span>
        <span class="presell" v-else>预售</span>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: ['item'],
  filters: {
    format (value) {
      return value.replace('/w.h', '')
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/styles/less/var.less';
.list{
  width: 100%;
  height: 114px;
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  img{
    width: 64px;
    height: 90px;
  }
  .center{
    width: 275px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left{
      color: #666;
      width: 205px;
      height: 90px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      .head{
        display: flex;
        h2{
          color: black;
          font-size: 17px;
          margin-right: 5px;
        }
        .d{
          padding: 2px;
          background-color: @blue;
          color: white;
        }
        .imax{
          padding: 1px;
          border: 1px solid @blue;
        }
      }
      .star{
        display: block;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .right{
      span{
        padding: 5px 10px;
        color: white;
        border-radius: 5px;
      }
      .sell{
        background-color: @theme-color;
      }
      .presell{
        background-color: @blue;
      }
    }
  }
}
</style>
