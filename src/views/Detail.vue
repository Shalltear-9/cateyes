<template>
  <div class="detail-wrap">
    <div class="detail">
      <header>
        猫眼电影 >
        <span>{{ movieInfo.nm }}</span>
      </header>

      <section class="info">
        <img :src="movieInfo.img" :alt="movieInfo.nm" />
        <div class="right">
          <h4>{{ movieInfo.nm }}</h4>
          <p>{{ movieInfo.enm }}</p>
          <p>
            <span v-for="(item, index) in movieInfo.tags" :key="index"
              >{{ item }}&nbsp;{{
                index !== movieInfo.tags.length - 1 ? "/" : ""
              }}&nbsp;</span
            >
          </p>
          <p class="star">
            <span v-for="(item, index) in movieInfo.star" :key="index"
              >{{ item
              }}{{ index !== movieInfo.star.length - 1 ? "/" : "" }}</span
            >
          </p>
          <p>{{ movieInfo.showTime }}</p>
          <div class="button">
            <span>❤&nbsp;想看</span>
            <span>☆&nbsp;看过</span>
          </div>
        </div>
      </section>

      <section class="praise">
        <div class="rt-praise">
          <div class="left">
            <img src="../assets/img/cat.png" alt="" />实时口碑
          </div>
          <div class="right">
            <span>{{ praise.wish }}人想看</span
            ><span>{{ praise.watched }}人看过</span>
          </div>
        </div>
        <div class="data">
          <div class="score">
            <span class="scorein">{{ praise.score }}</span>
            <span>{{ praise.evaluate }}人评</span>
          </div>
          <div class="chart">
            <detail-chart
              v-for="(item, index) in praise.mark"
              :key="index"
              :item="item"
              :url="praise.starPic"
              :num="5 - index"
              :evaluate="praise.evaluate"
            >
            </detail-chart>
          </div>
        </div>
      </section>

      <section class="intro">
        <div class="title">
          <span>简介</span>
          <div class="button-wrap">
            <span @click="sw">{{ this.open ? "收起" : "展开" }}</span>
          </div>
        </div>
        <div class="content" :class="this.open ? 'open' : 'close'">
          {{ movieInfo.content }}
        </div>
      </section>

      <section class="starList">
        <div class="actor">
          <span>演职人员</span>
          <span>全部&gt;</span>
        </div>
        <div class="actorlist">
          <ul>
            <li v-for="(item, index) in movieInfo.actorList" :key="index">
              <img :src="item.pic" alt="" />
              <span>{{ item.name }}</span>
              <span>{{ item.role }}</span>
            </li>
          </ul>
        </div>
      </section>

      <section class="discuss">
        <p class="short">短评</p>
        <div v-for="(item, index) in discuss" :key="index">
          <div class="top">
            <div>
              <p>{{ item.name }}</p>
              <div class="fen">
                <div class="img">
                  <img src="@/assets/img/star-full-graded.png" alt="" v-for="index in Math.floor(item.score/2)" :key="index">
                  <img src="@/assets/img/star-half-graded.png" alt="" v-if="item.score%2">
                </div>
                <p>{{ item.score }}分</p>
              </div>
            </div>
            <p class="like">赞{{ item.praiseNum }}</p>
          </div>
          <p class="discuss-content">{{ item.content }}</p>
          <div class="bottom">
            <span>{{ item.time }}</span>
            <span class="reply">{{ item.commentsNum }}回复</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import { getMovieInfo } from "../utils/api";
import DetailChart from "../components/detail/detail-chart";
export default {
  data() {
    return {
      movieInfo: {},
      praise: {},
      discuss: [],
      open: false,
      actorlist: [],
    };
  },
  components: {
    DetailChart,
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    sw() {
      this.open = !this.open;
    },
    async getInfo() {
      console.log(this.$route.params.id);
      const result = await getMovieInfo({
        id: this.$route.params.id,
      });
      if (result.status === 0) {
        this.movieInfo = result.movieInfo;
        this.praise = result.praise;
        this.discuss = result.discuss;
        this.actorlist = result.movieInfo.actorList;
        console.log(result);
      }
      await this.$nextTick();
      let bs = new BetterScroll(".detail-wrap", {
        // 允许纵向滚动
        scrollY: true,
        click:true
      });
    },
  },
  watch: {
    async actorlist() {
      await this.$nextTick();
      let bs2 = new BetterScroll(".actorlist", {
        // 允许纵向滚动
        scrollY: false,
        scrollX: true,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.detail-wrap {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  background-color: white;
  overflow: hidden;

  .detail {
    background-color: #403723;
    padding: 21px 16px 0;
    color: #ccc;
    font-size: 14px;
    

    header {
      margin-bottom: 15px;
    }

    .info {
      width: 100%;
      height: 154px;
      display: flex;
      justify-content: space-between;

      img {
        width: 100px;
        height: 138px;
      }

      .right {
        width: 231px;
        height: 138px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        h4 {
          font-size: 25px;
        }

        .star {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .button {
        display: flex;
        justify-content: space-around;

        span {
          font-size: 16px;
          padding: 8px 30px;
          border-radius: 5px;
          background-color: #888;
        }
      }
    }

    .praise {
      width: 100%;
      height: 176px;
      margin-top: 15px;
      padding: 10px 12px;
      font-size: 12px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.2);
      box-shadow: 0 0 2px 0 hsla(0, 0%, 100%, 0.03);

      .rt-praise {
        display: flex;
        justify-content: space-between;

        .left {
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 14px;
            height: 14px;
            margin-right: 5px;
          }
        }

        .right {
          display: flex;
          justify-content: center;
          align-items: center;

          span {
            margin: 0 5px;
          }
        }
      }

      .data {
        width: 100%;
        height: 128px;
        padding: 20px 0;
        display: flex;
        justify-content: center;

        .score {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-right: 20px;

          .scorein {
            font-size: 34px;
            color: #ffb400;
          }
        }

        .chart {
          padding: 10px 0;
        }
      }
    }

    .intro {
      margin-top: 15px;

      .title {
        display: flex;
        justify-content: space-between;
      }

      .content {
        margin: 5px 0;
        font-size: 15px;
        text-align: justify;
        line-height: 26px;
        height: 76px;
      }

      .close {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      .open {
        height: 128px;
      }
    }

    .starList {
      width: 100%;
      height: 180px;
      margin: 15px 0;

      .actor {
        display: flex;
        justify-content: space-between;
      }

      .actorlist {
        overflow: hidden;

        ul {
          width: 510px;
          display: flex;
          justify-content: space-between;
          margin: 15px 0;

          li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 82px;
            flex-shrink: 0;
            margin-right: 5px;

            img {
              width: 80px;
              height: 112px;
            }

            span {
              width: 100%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }

    .discuss{
      width: 109%;
      margin: 0 -15px;
      padding: 15px;
      color: black;
      background-color: white;
      border-radius: 5px 5px 0 0;

      .top{
        margin: 15px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .like{
          color: #ccc;
          padding: 3px 5px;
          border: 1px solid #ddd;
          border-radius: 10px;
        }
        .fen{
          margin: 10px 0;
          color: gold;
          display: flex;
          justify-content: flex-start;
          .img{
            img{
              width: 9px;
              height: 9px;
              margin: 0 2px 0 0;
            }
          }
        }
      }
      .discuss-content{
        font-size: 15px;
        margin: 10px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
      }
      .bottom{
        span{
          padding:2px 5px;
        }
        .reply{
          margin-left: 10px;
          color: #5a7cab;
          border: 1px solid #5a7cab;
          border-radius: 5px;
          background-color: #eef1f6;
        }
      }
    }
  }
}
</style>
