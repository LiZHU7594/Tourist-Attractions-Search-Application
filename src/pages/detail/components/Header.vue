<template>
	<div>
		<router-link 
		tag="div" 
		to="/" 
		class="header-abs"
		v-show="showAbs">
			<div class="iconfont header-abs-back">&#xe658;</div>
		</router-link>
		<div 
		class="header-fixed" 
		v-show="!showAbs"
		:style=opacityStyle>
			<router-link to="/">
				<div class="iconfont header-fixed-back">&#xe658;</div>
			</router-link>
			Detail
		</div>
	</div>
</template>

<script>
export default{
	name: 'DetailHeader',
	data () {
		return {
			showAbs: true,
			opacityStyle: {
				opcaity: 0
			}
		}
	},
	methods: {
		handleScroll () {
			const top = document.documentElement.scrollTop
			if (top > 60) {
				let opacity = top / 140
				opacity = opacity > 1 ? 1 : opacity
				this.opacityStyle = { opacity }
				// key-value都相等的时候，写一个就可以了
				this.showAbs = false
			} else {
				this.showAbs = true
			}
		}
	},
	activated () {
		window.addEventListener("scroll", this.handleScroll)
		// 只要scroll事件被执行，对应的handleScroll事件就会被执行
		// window是一个全局对象，这个事件会被绑定到所有的组件上
	},
	// 因为用了keep-alive，页面只要被展示，activated就会被执行
	deactivated () {
		window.removeEventListener("scroll", this.handleScroll)
	}
	// 当页面被隐藏或替换成新的页面的时候，这个生命周期钩子会被执行
	
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header-abs
	position: absolute
	left: .2rem
	top: .2rem
	width: .8rem
	height: .8rem
	line-height: .8rem
	border-radius: .4rem
	text-align: center
	background: rgba(0, 0, 0, .8)
	.header-abs-back
		color: #fff
		font-size: .4rem
.header-fixed
	z-index: 2
	position: fixed
	top: 0
	left: 0
	right: 0
	height: $headerHeight
	line-height: $headerHeight
	text-align: center
	color: #fff
	background: $bgColor
	font-size: .32rem
	.header-fixed-back
		position: absolute
		top: 0
		left: 0
		width:.64rem
		text-align: center
		font-size: .4rem
		color: #fff
</style>