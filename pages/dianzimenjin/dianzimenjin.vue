<template>
	<view class='dzmj pr'>
		<view class='dgmj-Img'>
			<image class='ImgBox' src="../../static/img/dianzimenjinImg/bj.png" mode=""></image>
		</view>
		<view class='code pa'></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
.dzmj{
	.dgmj-Img{
		height:100vh;
		width:100%;
		.ImgBox{
			width:100%;height:100%;
		}
	}
	.code{
		width:90%;
		height:65%;
		left:50%;
		top:20px !important;
		background-color:#f2f2f2;
		border-radius:15px;top:0;
		margin-left:-45%;
	}
}
</style>
