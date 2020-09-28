<template>
  <div class="wrap-city">
    <div class="hot">热门城市</div>
    <div class="hotcity" v-if="citylist.length">
      <span v-for="(item,index) in citylist[0].cities" :key="index" @click="changeCity(item)">{{item.name}}</span>
    </div>
    <van-index-bar :index-list="indexList">
      <div v-for="(item,index) in citylist" :key="index">
        <template v-if="item.prefix !== 'hotCities'">
          <van-index-anchor :index="item.prefix.toUpperCase()" class="tt"></van-index-anchor>
          <van-cell :title="i.name" v-for="(i,j) in item.cities" :key="j" @click="changeCity(i)"/>
        </template>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCitiesList } from '../utils/api'
export default {
  data() {
    return {
      citylist:[]
    }
  },
  mounted() {
    this.citieslist();
  },
  methods: {
    async citieslist(){
      const res=await getCitiesList();
      console.log(res);
      this.citylist=res;
    },
    changeCity(obj){
      this.$store.commit('changeCities',obj);
      this.$router.go(-1);
    }

  },
  computed: {
    indexList(){
      let arr=[];
      for(let i=1;i<this.citylist.length;i++){
        arr.push(this.citylist[i].prefix.toUpperCase());
      };
      return arr;
    }
  },
}
</script>
<style lang="less" scoped>
  .wrap-city{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: white;
    .tt{background-color: white;}
    .hot{
      z-index: 1;
      box-sizing: border-box;
      padding: 0 0.42667rem;
      color: #323233;
      font-weight: 500;
      font-size: 0.37333rem;
      line-height: 0.85333rem;
      background-color: transparent;
    }
    .hotcity{
      background: #fff;
      overflow: hidden;
      span {
        float: left;
        background: #fff;
        width: 29%;
        height: 33px;
        margin-top: 15px;
        margin-left: 4%;
        padding: 0 4px;
        border: 1px solid #e6e6e6;
        border-radius: 3px;
        line-height: 33px;
        text-align: center;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 10px;
}
    }
  }
</style>