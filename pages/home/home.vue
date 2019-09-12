<template>
	<view class='Home'>
		<view class='headerBox'>
			<image class='headerImg' src="../../static/img/homeImg/banner1.png" mode=""></image>
		</view>
		<view class='zlGrid pd10'>
			<view class="zlGrid-Item col-4" :key="item.index" v-for="(item,index) in GridItem" @tap="zlGridC(item.text,index)">
				<view>
					<image class="zlGrid-Img" :src="item.url" mode=""></image>
				</view>
				<text class='fs14'>{{item.text1}}</text>
			</view>
		</view>
		<view class='zlNew'>
			<view class='zlNew-Title flex'>
				<image class='zlNew-img pr' src="../../static/img/homeImg/zxdt.png" mode=""></image>
				<text class="text">最新动态</text>
			</view>
			<view class='zlNew-List flex bgw' 
				:key="item.index" v-for="item in zlNewLists"
			>
				<view class='zlNew-List-Left'>
					<view class='toe'><text class='fs16'>{{item.newTitle}}</text></view>
					<view>
						<text class='fs13'>{{time()}}</text>
					</view>
				</view>
				<view class='zlNew-List-Right'>
					<image class='zlNew-Img' :src="item.newImg" mode=""></image>
				</view>
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
						text: '学杂费',
						text1: "顶呱呱大学"
					},
					{
						url: '../../static/img/homeImg/cjcx.png',
						text: '成绩查询',
						text1: "顶呱呱大学"
					},
					{
						url: '../../static/img/homeImg/dzmj.png',
						text: '课程',
						text1: "顶呱呱大学"
					},
					{
						url: '../../static/img/homeImg/hfcz.png',
						text: '消息',
						text1: "顶呱呱大学"
					},
				],
				zlNewLists: [{
						newTitle: '壮丽70年，全球川商为祖国奔跑',
						newTime: '',
						newImg: '../../static/img/homeImg/t1.png'
					},
					{
						newTitle: '杭州西湖最美风景，期待您的到来',
						newTime: '3',
						newImg: '../../static/img/homeImg/t2.png'
					},
					{
						newTitle: '任重而道远 | 顶呱呱长沙分公司被指定为长沙市营商环境监测单位',
						newTime: '4',
						newImg: '../../static/img/homeImg/t3.png'
					},
					{
						newTitle: '云端筑梦人：顶呱呱余松，从0到1，他有更大的野心',
						newTime: '',
						newImg: '../../static/img/homeImg/t1.png'
					},
					{
						newTitle: '智能企服时代，顶呱呱会计共享中心重磅亮相!',
						newTime: '',
						newImg: '../../static/img/homeImg/t2.png'
					}
				]
			};
		},
		onTabItemTap(index){
			console.log(index)
		},
		methods: {
			zlGridC(item, index) {
				console.log(item, index)
			},
			//获取电脑时间
			time() {
				let da = new Date();
				let fullyear = da.getFullYear();
				let month = da.getMonth() + 1;
				let day = da.getDate();
				let hours = da.getHours();
				let minutes = da.getMinutes();
				let seconds = da.getSeconds();
				return fullyear + "/" + month + "/" + day + " " + hours + ":" + minutes
			}
		}
	}
</script>

<style lang="less">
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	}

	.zlNew {
		padding-top: 5px;
		background-color: #f2f2f2;

		.zlNew-Title {
			justify-content: flex-start;
			background-color: #fff;
			height: 50px;
			border-bottom: 1px solid #f2f2f2;
			line-height: 50px;

			.zlNew-img {
				width: 16px;
				height: 16px;
				vertical-align: text-bottom;
				top: 18px;
				margin-right: 20px;
				left: 10px;
			}

			.text {
				font-size: 16px;
				font-weight: bold;
			}
		}

		.zlNew-List {
			padding: 4px 10px;
			justify-content: space-between;
			border-bottom: 1px solid #f2f2f2;

			.zlNew-List-Left {
				flex: 1;
				overflow: hidden;

				.toe {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}

			.zlNew-List-Right {
				width: 90px;
				height: 55px;
				margin-left: 10px;

				.zlNew-Img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
