<template>
	<div>
		<div class="title">Recommendation</div>
		<ul>
			<router-link 
			tag="li" 
			class='item border-bottom' 
			v-for="item of list" 
			:key="item.id"
			:to="'/detail/' + item.id">
				<img class="item-img" :src='item.imgUrl' />
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">Details</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
	props: {
		list: Array
	}	
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
	margin-top: .2rem
	line-height: .8rem
	background: #eee
	text-indent: .2rem
.item
	overflow:hidden
	display: flex
	/*采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。*/
	height: 1.9rem
	.item-img
		width: 1.7rem
		height: 1.7rem
		padding: .1rem
	.item-info
		flex: 1
		/*CSS属性 flex 规定了弹性元素如何伸长或缩短以适应flex容器中的可用空间。*/
		padding: .1rem
		min-width: 0
		/*min-width 属性为给定元素设置最小宽度。它可以阻止 width 属性的应用值小于 min-width 的值。溢出时显示省略号*/
		.item-title
			line-height: .54rem
			font-size: .32rem
			ellipsis()
		.item-desc
			line-height: .4rem
			color: #ccc
			ellipsis()
		.item-button
			line-height: .44rem
			margin-top: .16rem
			background: #ff9300
			padding: 0 .1rem
			border-radius: .06rem
			color: #fff
			ellipsis()
</style>