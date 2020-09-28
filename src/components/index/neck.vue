<template>
  <div class="neck">
    <section class="left">
      <img src="@/assets/img/cat.png" alt="">
      <article class="content">
        <h2>猫眼</h2>
        <p>在线选座，热门影讯，爱上看电影</p>
      </article>
    </section>
    <button>打开App</button>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less">
@import '../../assets/styles/less/var.less';
  .neck{
    height: 64px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left{
      display: flex;
      justify-content: space-between;
      align-items: center;
      img{
        width: 44px;
        height: 44px;
      }
      .content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h2{
        font-weight: normal;
        }
        p{
          color: #999;
          font-size: 12px;
        }
      }
    }
    button{
      padding: 8px 13px;
      background-color: @theme-color;
      border: none;
      border-radius: 5px;
      font-size: 15px;
      color: white;
    }
  }
</style>
