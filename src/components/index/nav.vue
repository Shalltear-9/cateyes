<template>
<div class="tabs">
  <section>
    <span @click="city">{{citys}}</span>
    <span class="iconfont icon-lower-triangle"></span>
  </section>
  <ul>
    <li v-for="(item,index) in list" :key="index" @click="tabsChange(index,item.url)" :class="{active:currentIndex===index}">
      {{item.title}}
      <div class="slide-box" v-if="currentIndex===index"></div>
    </li>
  </ul>
  <span class="iconfont icon-fangdajing"></span>
</div>
</template>

<script>
export default {
  data() {
    return {
      //  list: ['热映', '影院', '待映', '经典电影'],
      list: [{
          title: '热映',
          url: '/index/hot'
        },
        {
          title: '影院',
          url: '/index/movie'
        },
        {
          title: '待映',
          url: '/index/backlog'
        },
        {
          title: '经典电影',
          url: '/index/classical'
        }
      ],
      currentIndex: 0
    }
  },
  computed: {
    citys(){
      return this.$store.state.city.name;
    }
  },
  methods: {
    tabsChange(i, url) {
      this.currentIndex = i;
      this.$router.push(url);
    },
    city(){
      this.$router.push('/cities')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/less/var.less';

.tabs {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 15px;
  color: #666;
  position: absolute;
  top: 114px;
  left: 0;
  background-color: white;
  z-index: 2;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;

    li {
      padding: 0 8px;
      position: relative;
      line-height: 44px;

      .slide-box {
        width: 20px;
        height: 3px;
        border-radius: 2px;
        background-color: @theme-color;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .active {
      color: black;
      font-weight: bold;
      font-size: 18px;
    }
  }

  .icon-fangdajing {
    color: @theme-color;
  }
}
</style>
