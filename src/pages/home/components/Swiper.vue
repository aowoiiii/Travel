<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key='item.id'>
        <img :src='item.imgUrl' class="swiper-img"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 5000,
        pagination: '.swiper-pagination',
        loop: true // 循环显示
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
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
