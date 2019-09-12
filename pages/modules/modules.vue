<template>
	<view>
		<view class='zlGrid pd10'>
			<view class="zlGrid-Item col-4" :key="item.index" v-for="(item,index) in GridItem" @tap="zlGridC(item.text,index)">
				<view>
					<image class="zlGrid-Img" :src="item.url" mode=""></image>
				</view>
				<text class='fs12' style='font-size:14px;'>{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				GridItem: [{
						url: '../../static/img/modulesImg/xf.png',
						text: '学费'
					},
					{
						url: '../../static/img/modulesImg/mj.png',
						text: '电子门禁'
					},
					{
						url: '../../static/img/modulesImg/qj.png',
						text: '请假'
					},
					{
						url: '../../static/img/modulesImg/cjcx.png',
						text: '成绩查询'
					},
					{
						url: '../../static/img/modulesImg/gzcx.png',
						text: '工资查询'
					},
					{
						url: '../../static/img/modulesImg/xzf.png',
						text: '学杂费'
					},
					{
						url: '../../static/img/modulesImg/gxxyj.png',
						text: '共享洗衣机'
					},
					{
						url: '../../static/img/modulesImg/kc.png',
						text: '课程'
					}
				],
			};
		}
	}
</script>

<style lang="less">

</style>
