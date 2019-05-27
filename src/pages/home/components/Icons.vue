<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<router-link 
				tag="div" 
				class='icon' 
				v-for="item of page" 
				:key="item.index"
				:to="'/hotel/' + item.id">
					<div class='icon-img'>
						<img class='icon-img-content' :src='item.imgUrl' />
					</div>
					<p class='icon-desc'>{{item.desc}}</p>
				</router-link>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeIcons',
	props: {
		list:Array
		},
	data () {
		return {
			swiperOption: {
				autoplay: false
			}
		}
	},
	// 当创建一个Vue实例时，它将在其data对象中找到的所有属性添加到Vue的反应性系统中。当这些属性的值改变时，视图将“反应”更新以匹配新值。
	computed :{
		// 计算属性是根据其他的属性计算生成的新的结果，自带缓存机制
		pages () {
			const pages = []
			this.list.forEach((item,index) => {
				const page = Math.floor(index/8)
				if (!pages[page]) {
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	}

}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'

.icons >>> .swiper-container
	height: 0
	padding-bottom: 50%
	/*默认宽度是100%，往下撑的高度是50%*/
.icons
	margin-top: .2rem
	.icon
		position: relative
		overflow: hidden
		float: left
		/*float CSS属性指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。该元素从网页的正常流动(文档流)中移除，尽管仍然保持部分的流动性（与绝对定位相反）。
		left表明元素必须浮动在其所在的块容器左侧的关键字。*/
		width: 25%
		height: 0
		padding-bottom: 25%
		.icon-img
			position: absolute
			/*padding属性设置一个元素的内边距，padding 区域指一个元素的内容和其边界之间的空间，该属性不能为负值。*/
			/*如果父类元素不需要定位而子类元素需要定位，那么父类一般是relative（目的是使子类实现参照；通过top,bottom,left,right的设置相对于其正常位置进行定位），子类是absolute（元素的位置通过"left","top","right"以及"bottom"属性进行规定。*/
			top: 0
			left: 0
			right: 0
			right: 0
			bottom : .44rem
			box-sizing: border-box
			/*border-box 告诉浏览器去理解你设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px,那么这100px会包含其它的border和padding，内容区的实际宽度会是width减去border + padding的计算值。大多数情况下这使得我们更容易的去设定一个元素的宽高。*/
			padding: .1rem
			.icon-img-content
				display: block
				margin: 0 auto
				/*这两行code可以让图片自动居中*/
				height: 100%
		.icon-desc
			position: absolute
			left: 0
			right: 0
			bottom: 0
			height: .44rem
			line-height: .44rem
			/*用于设置多行元素的空间量，如多行文本的间距。*/
			text-align: center
			color: darkTextColor
			ellipsis()
</style>