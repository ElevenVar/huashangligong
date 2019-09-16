<template>
	<view class='chenjichaxun'>
		<view class='top'>
			<!-- <image class='max' src="../../static/img/chenjichaxunImg/bg.png" mode=""></image> -->
		</view>
		<view class='selectBox flex'>
			<view class='timeBox flex'>
				<view class='timeImg'>
					<image class='max' src="../../static/img/chenjichaxunImg/time.png" mode=""></image>
				</view>
				<view class='timeTextBox pr'>
					<picker class='timeTextParent' mode="date" :value="date" @change="changeTime">
						<view class='timeText fs12'>{{date}}</view>
					</picker>
					<view class='tiemSelect pa'>
						<image class='max' src="../../static/img/chenjichaxunImg/xl.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class='timeBox flex'>
				<view class='timeImg'>
					<image class='max' src="../../static/img/chenjichaxunImg/time.png" mode=""></image>
				</view>
				<view class='timeTextBox pr'>
					<picker class='timeTextParent' mode="selector" :value="index" :range="array" @change="changePicker">
						<view class='timeText fs12'>{{array[index]}}</view>
					</picker>
					<view class='tiemSelect pa'>
						<image class='max' src="../../static/img/chenjichaxunImg/xl.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: '',
				index:-1,
				array: ['中国', '美国', '巴西', '日本'],
			};
		},
		methods: {
			//时间选择
			changeTime(e) {
				this.date = e.target.value;
			},
			//学期选择
			changePicker(e){
				this.index = e.target.value;
			}
		}
	}
</script>

<style lang="less">
	.chenjichaxun {
		.top {
			width: 100%;
			height: 120px;
		}
		.selectBox{
			height:35px;
			line-height:35px;
			justify-content: space-between;
			.timeBox{
				width:48%;justify-content: space-between;border:1px solid #f2f2f2;margin:0 5px;padding:0 5px;
				.timeImg{
					width:15px;
					height:15px;
				}
				.timeTextBox{
					flex:1;padding-left:10px;justify-content:space-between;
					.timeTextParent{
						flex:1;
						.timeText{
							height:30px;
						}
					}
					.tiemSelect{
						width:15px;height:15px;top:0;right:10px;
					}
				}
			}
		}
	}
</style>
