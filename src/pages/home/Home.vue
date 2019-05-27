<template>
	<!-- 模板只能对外暴露一个标签 -->
	<div>
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
		<!-- vue会自动把标签和组件做关联 -->
	</div>
</template>

<script>
import HomeHeader from'./components/Header'
import HomeSwiper from'./components/Swiper'
import HomeIcons from'./components/Icons'
import HomeRecommend from'./components/Recommend'
import HomeWeekend from'./components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
	name:'Home',
	components:{
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	},
	data () {
		return {
			lastCity: '',
			swiperList:[],
			iconList:[],
			recommendList:[],
			weekendList:[]
		}
	},
	computed: {
		...mapState(['city'])
	},
	methods: {
		getHomeInfo () {
			axios.get('/api/index'+ this.city + '.json')
        .then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc (res) {
			res = res.data
			if (res.ret && res.data) {
				const data = res.data
				this.swiperList = data.swiperList
				this.iconList = data.iconList
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
			}
		}
	},
	// 使用局部组件的时候要声明
	mounted () {
		this.lastCity = this.city,
		this.getHomeInfo()
	},
	// 页面初次被加载的时候，会发送一个ajax请求
	activated () {
		if (this.lastCity !== this.city) {
			this.lastCity = this.city
			this.getHomeInfo()
		}
	}
	// keep-alive携带的生命周期函数，当页面重新被显示的时候，会被执行
}
</script>

<style></style>