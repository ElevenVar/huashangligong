<template>
	<view>
		<view class = 'zlTab-header flex'>
			<view class="zlTab-header-Item">
				<text class='zlTab-header-Item-Type' :class="activeClass == 0 ? 'btBlue':''" @tap="changeType(0)">校园信息</text>
			</view>
			<view class= "zlTab-header-Item">
				<text class='zlTab-header-Item-Type' :class="activeClass == 1 ? 'btBlue':''" @tap="changeType(1)">班级信息</text>
			</view>
		</view>
		<view class='zlTab-content'>
			<view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeClass:0
			};
		},
		methods:{
			//切换信息
			changeType(ind){
				this.activeClass = ind
			}
		}
	}
</script>

<style lang="less">
.zlTab-header{
	border-bottom:1px solid #f2f2f2; justify-content: space-between;text-align: center;padding:10px;
	.zlTab-header-Item{
		width:50%;
		.zlTab-header-Item-Type{
			padding:9px 15px;
		}
	}
}
</style>
