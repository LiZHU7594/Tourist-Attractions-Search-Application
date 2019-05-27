<template>
	<div class="header">
		City Choice
		<router-link to="/">
			<div class="iconfont header-icon">&#xe658;</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
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
</style>