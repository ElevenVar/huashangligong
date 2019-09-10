<template>
	<view class="content">
		<image class="logo" src="/static/img/480.800.png"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {
			setTimeout('uni.navigateTo({url:"../login/login"})',1000)
		},
		methods: {
			tab:function(){
				uni.navigateTo({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style>
	.content{
		height:100vh;
	}
	.logo{
		width:100%;
		height:100vh;
	}
</style>
