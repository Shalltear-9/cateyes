<template>
<div class="chart-wrap">
  <div class="left">
    <img :src="url" alt="" v-for="i in num" :key="i">
  </div>
  <div class="center">
    <div class="bg">
      <div class="cover" :style="{width:item / evaluate * 100 +'%'}"></div>
    </div>
  </div>
  <div>
    <span>{{(item / evaluate * 100).toFixed(2) +'%'}}</span>
  </div>
</div>
</template>

<script>
export default {
  props: ['item', 'url', 'num', 'evaluate']
}
</script>

<style lang="less" scoped>
.chart-wrap {
  display: flex;
  justify-content: center;
  align-items: center;

  .left {
    width: 35px;
    display: flex;
    justify-content: flex-end;

    img {
      width: 5px;
      height: 5px;
      margin: 1px;
    }
  }

  .center {
    .bg {
      width: 100px;
      height: 5px;
      border-radius: 2px;
      background-color: cyan;
      margin: 1px;

      .cover {
        height: 5px;
        border-radius: 2px;
        background-color: gold;
      }
    }
  }
}
</style>
