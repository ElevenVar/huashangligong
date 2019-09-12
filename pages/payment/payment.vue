<template>
	<view>
		<view class='bigImgBox'>
			<image class='bigImg' src="../../static/img/paymentImg/Group.png" mode=""></image>
		</view>
		<view class='payWayBox flex'>
			<view class='pay' @tap='getScan'>
				<image class='pays' src="../../static/img/paymentImg/sys.png" mode=""></image>
			</view>
			<view class='pay'>
				<image class='pays' src="../../static/img/paymentImg/fkm.png" mode=""></image>
			</view>
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
			getScan(){
				uni.scanCode({
					success:function(res){
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.bigImgBox{
	width:100%;height:300px;
	.bigImg{
		width:100%;
		height:100%;
	}
}
.payWayBox{
	height:90px;justify-content: space-between;padding:15px;
	.pay{
		width:48%;
		.pays{
			width:100%;height:100%;
		}
	}
}
</style>
