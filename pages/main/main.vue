<template>
	<view>
		<view class='headerBox pr'>
			<image class='headerImg' src="../../static/img/mainImg/bannerbg.png" mode=""></image>
			<image class='logo pa'></image>
			<view class='headText pa' style='width:100%;'>
				<text class='fs14'>姓名：张三</text>
			</view>
		</view>
		<view class='zlGrid pd10'>
			<view class="zlGrid-Item" :key="item.index" v-for="(item,index) in GridItem" @tap="zlGridC(item.path,index)">
				<view>
					<image class="zlGrid-Img" :src="item.url" mode=""></image>
				</view>
				<text class='fs13'>{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				GridItem: [{
						url: '../../static/img/mainImg/grxx.png',
						text: '个人信息',
						"path":"../information/information"
					},
					{
						url: '../../static/img/mainImg/xxzx.png',
						text: '消息记录',
						"path":"../message/message"
					},
					{
						url: '../../static/img/mainImg/sz.png',
						text: '设置',
						"path":"../setup/setup"
					}
				],
			};
		},
		methods:{
			zlGridC(item, index) {
				let url;
				if(index == 0){
					url = "../information/information"
				}else if(index == 1){
					url = "../message/message"
				}else if(index == 2){
					url = "../setup/setup"
				}
				uni.navigateTo({
					url: url,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
		}
	}
</script>

<style lang="less">

</style>
