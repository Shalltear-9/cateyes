<template>
<footer>

  <ul>
    <router-link v-for="(item,index) in list" :key="index" tag="li" :to="item.url" active-class="active">
      <span class="iconfont" :class="item.icon">
        <span>{{item.title}}</span>
      </span>
    </router-link>
  </ul>
  <!-- <span v-for="(item,index) in list" :key="index" :class="[item.icon,{active:currentIndex===index}]" @click="colorChange(index)">
    <span>{{item.title}}</span>
  </span>  -->
</footer>
</template>

<script>
export default {
  data() {
    return {
      list: [{
          icon: 'iconfont icon-dianying',
          title: '电影/影院',
          url: '/index/hot'
        },
        {
          icon: 'iconfont icon-shipin',
          title: '视频',
          url: '/vedio'
        },
        {
          icon: 'iconfont icon-xiaoshipin',
          title: '小视频',
          url: '/minivedio'
        },
        {
          icon: 'iconfont icon-yanchu',
          title: '演出',
          url: '/show'
        },
        {
          icon: 'iconfont icon-wode',
          title: '我的',
          url: '/mine'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/less/var.less';

footer {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;

  .iconfont {
    font-size: 25px;
  }

  ul {
    display: flex;

    span {
      width: 75px;
      font-size: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .active {
    color: @theme-color;
  }
}
</style>
