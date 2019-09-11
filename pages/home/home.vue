<template>
	<view class='Home'>
		<view class='imgBox'>
			<image class='img' src="../../static/img/homeImg/banner1.png" mode=""></image>
		</view>
		<view class='zlGrid pd10 flex'>
			<view class="zlGrid-Item"
				:key="item.index"
				v-for="(item,index) in GridItem"
				@tap="zlGridC(item.text,index)"
			>
				<view><image class="zlGrid-Img" :src="item.url" mode=""></image></view>
				<text class='fs12' style='font-size:14px;'>{{item.text}}</text>
			</view>
		</view>
		<view class='zlNew'>
			<view class='zlNew-Title flex'>
				<image class='zlNew-img' src="../../static/img/homeImg/zxdt.png" mode=""></image>
				<text>最新动态</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				GridItem:[
					{
						url:'../../static/img/homeImg/bmjf.png',
						text:'报名查询'
					},
					{
						url:'../../static/img/homeImg/cjcx.png',
						text:'成绩查询'
					},
					{
						url:'../../static/img/homeImg/dzmj.png',
						text:'电子门禁'
					},
					{
						url:'../../static/img/homeImg/hfcz.png',
						text:'话费充值'
					},
				],
			};
		},
		methods:{
			zlGridC(item,index){
				console.log(item,index)
			}
		}
	}
</script>

<style lang="less">
	.fs12 span{
		font-size:12px !important;
	}
.img{
	width:100%;
	height:250px;
}
.zlGrid{
	.zlGrid-Item{
		width:25%;
		text-align: center;
		.zlGrid-Img{
			width:40px;height:40px;
		}
	}
}
.zlNew{
	padding-top:10px;background-color:#f2f2f2;
	.zlNew-Title{
		justify-content: flex-start;background-color:#fff;
		.zlNew-img{
			width:20px;height:20px;
		}
	}
}
</style>
