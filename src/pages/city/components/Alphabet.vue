<template>
	<ul class="list">
		<li 
		class="item" 
		v-for="item of letters" 
		:key="item"
		:ref="item" 
		@touchstart="handleTouchStart"
		@touchmove="handleTouchMove"
		@touchend="handleTouchEnd"
		@click="handleLetterClick"
		>{{item}}</li>
	</ul>
</template>

<script>
export default {
	name: 'CityAlphabet',
	props: {
		cities: Object
	},
	computed: {
		letters () {
			const letters = []
			for (let i in this.cities) {
				letters.push(i)
			}
			return letters
 		}
	},
	data () {
		return {
			touchStatus: false,
			startY : 0,
			timer : null
		}
	},
	updated () {
		this.startY = this.$refs['A'][0].offsetTop
		// 当alphabet部分渲染好后，执行代码，拿到这个元素距顶部的高度
	},
	methods: {
		handleLetterClick (e) {
			this.$emit("change", e.target.innerText)
			// 向外触发事件
		},
		handleTouchStart () {
			this.touchStatus = true
		},
		handleTouchMove (e) {
			if(this.touchStatus) {
				if (this.timer) {
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(() => {
					const touchY = e.touches[0].clientY - 79
					// handletouchmove的时候会接受到一个参数e，touches[0]是手指的信息
					const index = Math.floor((touchY - this.startY)/20)
					if (index >= 0 && index < this.letters.length) {
						this.$emit('change', this.letters[index])
					}
				},16)				
				// 正在做这件事情的时候，让它延迟16毫秒执行。假设在这16毫秒之间，又做了手指的滚动，那么上一次的操作会被清除掉，重新做这一次要做的事情
			}
		},
		handleTouchEnd () {
			this.touchStatus = false
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.list
	display:flex
	flex-direction: column
	justify-content: center
	position: absolute
	top: 1.58rem
	right: 0
	bottom: 0
	width: .4rem
	.item
		line-height: .44rem
		text-align: center
		color: $bgColor
</style>