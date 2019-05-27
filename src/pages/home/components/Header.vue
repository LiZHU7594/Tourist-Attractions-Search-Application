<template>
	<!-- 模板只能对外暴露一个标签 -->
	<div class='header'>
		<div class='header-input'>
			<span class="iconfont">&#xe63c;</span>
			Enter your destination
		</div>
		<router-link to='/city'>
			<div class='header-right'>
				{{this.city}}
				<span class="iconfont arror-icon">&#xe695;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name:'HomeHeader',
	computed: {
		...mapState(['city'])
	// 把'city'这个公用数据映射到'city'这个计算属性中
}
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
/*在css中引入其他的css,回到scr要用~@*/
/*样式里面引入样式要加@*/
	.header
		display: flex
		line-height: $headerHeight
		background: $bgColor
		color: #fff
		.header-input
			flex: 1
			height: .64rem
			line-height: .64rem
			margin-top: .12rem
			margin-left: .2rem
			padding-left: .2rem
			background: #fff
			border-radius: .1rem
			color:#ccc
		.header-right
			mind-width: 1.04rem
			padding: 0 .1rem
			float: right
			text-align: center
			.arrow-icon
				margin-left: -.04rem
				font-size: .24rem
			color:white

</style>