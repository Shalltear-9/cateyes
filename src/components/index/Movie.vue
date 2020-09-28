<template>
<div class="wrap-all">
  <div class="content">
    <div v-for="(item,index) in cinemaList" :key="index" class="inner">
      <section class="title">
        <p>{{item.title}}</p>
        <span class="price">{{item.price}}元起</span>
      </section>
      <section class="address">
        <p class="addr">
          {{item.location}}
        </p>
        <span class="dist">{{item.distance}}km</span>
      </section>
      <section class="label">
        <span 
        v-for="(iten,index) in item.labels"
        :key="index"
        >
          {{iten}}
        </span>
      </section>
      <section class="card">
        <span class="cad">卡</span>
        <span>{{item.discount}}</span>
      </section>
    </div>
  </div>
</div>
</template>

<script>
import {getCinemaInfo} from '../../utils/api';
import BetterScroll from "better-scroll";
export default {
  data(){
    return {
      cinemaList:[]
    }
  },
  mounted() {
    this.getCinema()
  },
  methods: {
    async getCinema(){
      const res= await getCinemaInfo();
      this.cinemaList=res.result;
      console.log(res.result);
      await this.$nextTick();
      let bs = new BetterScroll(".wrap-all", {
        // 允许纵向滚动
        scrollY: true,
        //允许点击
        click: true
      });
    }
  },
}
</script>

<style lang="less" scoped>
  .content{
    width: 100%;
    font-size: 18px;
    padding: 12px 15px;
    .inner{
      margin: 25px 0;

      .title{
      display: flex;
      align-items: center;
      .price{
        margin-left: 15px;
        color: red;
      }
    }
    .address{
      width: 100%;
      font-size: 14px;
      display: flex;
      color: #666;
      margin: 10px 0;
      .addr{
        width: 289px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        .dist{
          margin-left: 5px;
        }
      }
    }

    .label{
      display: flex;
      
      span{
        border: 1px solid black;
        padding: 1px 3px;
        font-size: 12px;
        margin: 0 2px;
        border-color: #589daf;
        color: #589daf;
      }
      
    }
    .card{
      font-size: 12px;
      margin: 15px 0;
      .cad{
        color: white;
        padding: 3px;
        background-color: #09f;
        border-radius: 2px;
      }
    }
    }
    
  }
</style>
