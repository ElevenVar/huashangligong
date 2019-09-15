<template>
	<view class='chenjichaxun'>
		<view class='top'>
			<image class='max' src="../../static/img/chenjichaxunImg/bg.png" mode=""></image>
		</view>
		<view>
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<view class='timeBoxLeft'>
							<image class='max' src="../../static/img/chenjichaxunImg/time.png" mode=""></image>
						</view>
					</view>
					<view class="uni-list-cell-db">
						<picker mode="date" :value="date" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
					<view class='timeBox'>
						<image class='max' src="../../static/img/chenjichaxunImg/xl.png" mode=""></image>
					</view>
				</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<view class='timeBoxLeft'>
							<image class='max' src="../../static/img/chenjichaxunImg/time.png" mode=""></image>
						</view>
					</view>
					<view class="uni-list-cell-db">
						<picker mode="date" :value="date" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
					<view class='timeBox'>
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
				dateText:''
			};
		},
		methods: {
			bindDateChange(e) {
				this.date = e.target.value;
			}
		}
	}
</script>

<style lang="less">
	/* 列表 */
	.uni-list {
		background-color: #FFFFFF;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content:space-between !important;
		.uni-list-cell {
			width:45%;
			position: relative;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.uni-list-cell-left {
				font-size: 28upx;
				padding: 0 30upx;
				.timeBoxLeft{
					width:15px;height:15px;
				}
			}

			.uni-list-cell-db {
				flex: 1;
				.uni-input {
					height: 30upx;
					padding: 15upx 25upx;
					line-height: 30upx;
					font-size: 28upx;
					background: #FFF;
					flex: 1;
				}
			}
			.timeBox{
				position:absolute;width:15px;height:15px;right:15px;top:0;
			}
		}
	}

	.chenjichaxun {
		.top {
			width: 100%;
			height: 120px;
		}
	}
</style>
