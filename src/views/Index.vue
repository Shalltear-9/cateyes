<template>
<div class="head">
  <Neck></Neck>
  <Tabs></Tabs>
  <router-view></router-view>
</div>
</template>

<script>
import Tabs from "../components/index/nav";
import Neck from "../components/index/neck";
export default {
  data() {
    return {}
  },
  components: {
    Tabs,
    Neck
  }
};
</script>

<style lang="less">
.neck {
  margin-top: 50px;
  z-index: 2;
}

.wrap-all {
  position: absolute;
  top: 158px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
