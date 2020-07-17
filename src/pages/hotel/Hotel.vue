<template>
  <!-- 模板只能对外暴露一个标签 -->
  <div>
    <hotel-list :cityName="cityName" :hotelList="hotelList"></hotel-list>
    <!-- vue会自动把标签和组件做关联 -->
  </div>
</template>

<script>
import HotelList from './components/HotelList'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Hotel',
  components: {
    HotelList
  },
  data () {
    return {
      cityName: '',
      hotelList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHotelInfo () {
      axios.get('/static/mock/hotel' + this.city + '.json')
        .then(this.getHotelInfoSucc)
    },
    getHotelInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cityName = data.cityName
        this.hotelList = data.hotelList
      }
    }
  },
  // 使用局部组件的时候要声明
  mounted () {
    this.getHotelInfo()
  }
}
</script>

<style></style>
