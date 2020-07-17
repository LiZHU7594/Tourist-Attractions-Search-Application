<template>
  <div>
    <div class="title">
      Hotels in {{this.cityName}}
      <router-link to="/">
        <div class="iconfont header-icon">&#xe658;</div>
      </router-link>
    </div>
    <ul>
      <li
      class='item border-bottom'
      v-for="item of hotelList"
      :key="item.id"
      :to="'/detail/' + item.id">
        <img class="item-img" :src='item.imgUrl' />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">Now Booking</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    cityName: String,
    hotelList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.title
  position: relative
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  color: #fff
  background: $bgColor
  font-size: .32rem
  .header-icon
    position: absolute
    top: 0
    left: 0
    width:.64rem
    text-align: center
    font-size: .4rem
    color: #fff
.item
  overflow:hidden
  display: flex
  height: 1.9rem
  padding: .2 0rem
  border-bottom: .002rem solid #ccc
  .item-img
    display: block;
    height: 1.7rem
    width: 1.7rem
    padding: .1rem
    object-fit: cover
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .5rem
      font-size: .32rem
      font-weight: bold
      color: #545454
      ellipsis()
    .item-desc
      line-height: .5rem
      color: #ccc
      word-break:break-all;
    .item-button
      margin-top: .1rem
      line-height: .5rem
      background: #4A9609
      font-family: Georgia
      padding: 0 .15rem
      border-radius: .06rem
      color: #fff
      ellipsis()
</style>
