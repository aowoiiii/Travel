<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key='item.id'>
        <img :src='item.imgUrl' class="swiper-img"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true // 显示页面
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1812/d1/cd4f32e924a5a302.jpg_750x200_3d492837.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active //样式穿透
    background #fff
  .wrapper
    //解决轮播图下面的内容抖动问题 overflow width height padding
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.7%
    background #eee
    .swiper-img
      width 100%
</style>
