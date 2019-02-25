<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!--&lt;!&ndash;{{this.$store.state.city}}&ndash;&gt; 后由...mapState(['city'])改写(vuex)-->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  props: {
    // city: String
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>

  @import "~styles/varibles.styl" //引入其他CSS要加~ styles的设置在webpack.base.conf.js
  .header
    line-height $headerHeight
    display flex
    background $bgColor
    color #ffffff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin .12rem 0 0 .2rem
      padding-left .2rem
      background #ffffff
      border-radius .1rem
      color #ccc
    .header-right
      min-width 1.04rem
      padding 0 .1rem
      float right
      text-align center
      color #fff
      .arrow-icon
        margin-left -0.04rem
</style>
