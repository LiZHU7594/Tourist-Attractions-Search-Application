<template>
	<div>
		<div class="title">Description</div>
		<div class="content">{{this.desc}}</div>
	</div>
</template>

<script>
export default{
	name: 'DetailDesc',
	props: {
		desc: String
	}
}
</script>

<style lang="stylus" scoped>
.title
	border-top: .002rem solid #ccc
	font-family: Georgia
	font-size: .4rem
	font-weight: bold
	line-height: .6rem
	background: #eee
	text-indent: .2rem
.content
	margin-top: .1rem
	margin-left: .2rem
	margin-right: .2rem
	margin-bottom: .1rem
	font-size: .3rem
	font-family: Georgia
	line-height: .4rem
	text-indent: .2rem
</style>