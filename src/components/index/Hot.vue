<template>
<div class="wrap-all">
  <div>
    <top-rote :listItem="listItem"></top-rote>
    <movie-list :list="list" :total="total"></movie-list>
  </div>
</div>
</template>

<script>
import {
  getIndexList,
  getTopRated,
  pullUpLoadList
} from "../../utils/api";

import topRote from "./top-rote";
import movieList from "./movielist";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      list: [],
      listItem: [],
      listIds: [],
      index: 12,
      total: 0,
    };
  },
  components: {
    topRote,
    movieList
  },
  mounted() {
    this.getList();
    this.getTopRatedList();
  },
  methods: {
    async pullUpLoad() {
      const ids = this.listIds.slice(this.index, this.index + 10);
      const idStr = ids.join();
      const res = await pullUpLoadList({
        ids: idStr,
      });
      this.index += 10;
      this.list = this.list.concat(res.result);
    },
    async getTopRatedList() {
      const res = await getTopRated();
      this.listItem = res.result.result;
    },
    async getList() {
      const res = await getIndexList();
      //获取所有电影的ids
      this.listIds = res.result.movieIds;
      console.log(this.listIds);
      //获取当前的电影列表
      this.list = res.result.movieList;
      //获取电影总数
      this.total = res.result.total;
      await this.$nextTick();
      let bs = new BetterScroll(".wrap-all", {
        // 允许纵向滚动
        scrollY: true,
        //允许点击
        click: true,
        //允许使用上拉加载
        pullUpLoad: true,
      });
      bs.on("pullingUp", async () => {
        // 请求数据,更新列表
        // 判断一下当前的总长度是否已经等于一开始返回的总长度,不够继续请求，如果超出就显示没有更多
        if (this.list.length < this.total) {
          await this.pullUpLoad();
          // 重新计算bette-scroll的高度
          bs.refresh();
          // 表示这次上拉结束，可以做下一次下拉了
          bs.finishPullUp();
        }
      });
    },
  },

}
</script>
