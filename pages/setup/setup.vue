<template>
	<view class='setUp'>
		<view class='zlList flex bgWthite'>
			<view class='zlList-text'>头像</view>
			<view class='zlList-imgBox flex'>
				<image class='zlList-img' src="../../static/img/homeImg/banner1.png" mode=""></image>
				<image class='zlList-imgdk' src="../../static/img/setupImg/dk.png" mode=""></image>
			</view>
		</view>
		<view class='outLogin bgWthite'>
			<view class='out' @tap='OutLogin'>退出登录</view>
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
			//退出登录
			OutLogin(){
				uni.clearStorage();
				uni.navigateTo({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style lang="less">
	.setUp{
		height:100vh;background-color:#f2f2f2;
	}
.zlList{
	height:60px;
	line-height:60px;
	justify-content:space-between;
	.zlList-text{
		padding-left:15px;
	}
	.zlList-imgBox{
		width:75px;margin-top:3px;padding-right:20px;justify-content:space-between;
		.zlList-img{
			width:50px;height:50px;border-radius:50%;margin-top:3px;
		}
		.zlList-imgdk{
			width:15px;height:15px;margin-top:20px;
		}
	}
}
.outLogin{
	height:60px;margin-top:5px;
	.out{
		width:80px;text-align: center;line-height:60px;margin: 0 auto;
	}
}
</style>
