<template>
<div class="top-rote">
  <p>最受好评电影</p>
  <div class="ul-wrap">
    <ul>
      <li v-for="item in listItem" :key="item.id" @click="detail(item.id)">
        <div class="wrap">
          <img :src="item.img" :alt="item.title">
          <span class="text" v-if="item.score">观众评分：{{item.score}}</span>
          <span class="text" v-else>{{item.wishNum}}人想看</span>
        </div>
        <h5>{{item.title}}</h5>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  props: ['listItem'],
  data() {
    return {}
  },
  methods: {
    detail(id) {
      this.$router.push('/detail/' + id);
    }
  },
  watch: {
    async listItem() {
      await this.$nextTick()
      let bs = new BetterScroll('.ul-wrap', {
        // 允许纵向滚动
        scrollY: false,
        scrollX: true,
        click: true
      })
    }
  },
}
</script>

<style lang="less" scoped>
.top-rote {
  width: 100%;
  height: 200px;
  padding: 12px 15px;

  p {
    font-size: 14px;
    margin: 0 0 12px;
  }

  .ul-wrap {
    width: 100%;
    height: 140px;
    overflow: hidden;
  }

  ul {
    display: inline-flex;

    li {
      width: 85px;
      height: 140px;
      margin-right: 10px;
      flex-shrink: 0;

      .wrap {
        width: 85px;
        height: 115px;
        position: relative;

        span {
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 12px;
          color: #faaf00;
          overflow: hidden;
          font-weight: bold;
          white-space: nowrap;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }

      h5 {
        font-size: 13px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        margin: 0 0 3px;
      }
    }
  }
}
</style>
