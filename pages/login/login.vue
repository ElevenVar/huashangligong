<template>
	<view class='indexBox'>
		<view class='logoBox pr'>
			<image class='imgBox' src="../../static/img/homeImg/banner.png" mode=""></image>
			<image class='logoImg pa' src="../../static/img/homeImg/school.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			login:function(){
				uni.switchTab({
					url:'../home/home'
				})
			}
		}
	}
</script>

<style lang="less">
	.indexBox{
	}
	.logoBox{
		
	}
	.imgBox{
		width:750rpx;
		height:460rpx;
	}
	.logoImg{
		width:150px;height:200px;
		top:0;
		left:0;
	}
</style>
