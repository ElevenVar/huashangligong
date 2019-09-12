<template>
	<view>
		<view class='zlGrid pd10'>
			<view class="zlGrid-Item col-4" :key="item.index" v-for="(item,index) in GridItem" @tap="zlGridC(item.text,index)">
				<view>
					<image class="zlGrid-Img" :src="item.url" mode=""></image>
				</view>
				<text class='fs12' style='font-size:14px;'>{{item.text1}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				GridItem: [{
						url: '../../static/img/homeImg/bmjf.png',
						text: '学费',
						text1: "顶呱呱大学"
					},
					{
						url: '../../static/img/homeImg/cjcx.png',
						text: '电子门禁',
						text1: "顶呱呱大学"
					},
					{
						url: '../../static/img/homeImg/dzmj.png',
						text: '请假',
						text1: "顶呱呱大学"
					},
					{
						url: '../../static/img/homeImg/hfcz.png',
						text: '成绩查询',
						text1: "顶呱呱大学"
					},
					{
						url: '../../static/img/homeImg/cjcx.png',
						text: '工资查询',
						text1: "顶呱呱大学"
					},
					{
						url: '../../static/img/homeImg/dzmj.png',
						text: '学杂费',
						text1: "顶呱呱大学"
					},
					{
						url: '../../static/img/homeImg/hfcz.png',
						text: '共享洗衣机',
						text1: "顶呱呱大学"
					},
					{
						url: '../../static/img/homeImg/cjcx.png',
						text: '课程',
						text1: "顶呱呱大学"
					}
				],
			};
		}
	}
</script>

<style lang="less">

</style>
