<template>
	<div class='wrapper'>
		<swiper :options="swiperOption" v-if="showSwiper">
			<swiper-slide v-for='item of list' :key="item.id">
			    <img class='swiper-img' :src="item.imgUrl" />
			</swiper-slide>    
			<div class="swiper-pagination"  slot="pagination"></div>
			<!-- swiper-pagination显示的内容是传递给swiper这个组件的，swiper决定要显示什么内容 -->
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
			swiperOption:{
				pagination: '.swiper-pagination',
				loop:true
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
.wrapper >>> .swiper-pagination-bullet-active
	background: #fff
		/*当我们引入第三方组件库时(如使用vue-awesome-swiper实现移动端轮播)，需要在局部组件中修改第三方组件库的样式，而又不想去除scoped属性造成组件之间的样式覆盖。这时我们可以通过特殊的方式穿透scoped。*/
.wrapper
	overflow:hidden
	width: 100%
	height: 0
	padding-bottom: 56.25%
	background: #eee
		/*宽高比例自适应*/
	.swiper-img
		width: 100%
</style>
