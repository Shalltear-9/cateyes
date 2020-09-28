<template>
<div class="header">
  <h2>猫眼电影</h2>
  <span class="iconfont icon-caidan-"></span>
</div>
</template>

<script>
export default {}
</script>

<style lang="less">
@import '../../assets/styles/less/var.less';

.header {
  height: 50px;
  width: 100%;
  z-index: 6;
  position: fixed;
  top: 0;
  left: 0;
  background-color: @theme-color;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;

  h2 {
    font-weight: normal;
  }

  .icon-caidan- {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
  }
}
</style>
