<template>
	<view class='indexBox'>
		<view class='headerBox pr'>
			<image class='imgBox' src="../../static/img/homeImg/banner.png" mode=""></image>
			<image class='logoImg pa' src="../../static/img/homeImg/school.png" mode=""></image>
			<view class='textBox pa'>
				<text class='text'>uni-APP</text>
			</view>
			<view class='roleBox pa'>
				<view class='roleList'>
					<view 
						class='role'
						:class="activeClass == index ? 'actived':''"
						:key='item.index'
						v-for='(item,index) in roleList'
						@tap="selectRole(index)"
					>
						{{item}}
					</view>
				</view>
			</view>
		</view>
		<view class='formBox'>
			<view class='inputBox pr'>
				<image class='imgIcon pa' src="../../static/img/homeImg/sjh.png" mode=""></image>
				<input class='input' placeholder="请输入手机号" type="text" value="" />
			</view>
			<view class='inputBox pr'>
				<image class='imgIcon pa' src="../../static/img/homeImg/yzm.png" mode=""></image>
				<input class='input' style='margin-right:100px;' placeholder="请输入验证码" type="text" value="" />
				<view class='Vcode pa'>获取验证码</view>
			</view>
			<view class='inputBox pr' style='background-color:#fff;'>
				<button class='button' type="primary" @tap="submit">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeClass:0,
				roleList:["按钮","表格数","表单"]
			};
		},
		methods:{
			//选择登陆角色
			selectRole(index){
				this.activeClass = index;
			},
			//登录
			submit(){
				uni.switchTab({
					url:'../home/home',
				})
			}
		}
	}
</script>

<style lang="less">
	.indexBox{
	}
	.logoBox{
		width:100%;height:250px;
	}
	.imgBox{
		width:100%;
		height:100%;
	}
	.logoImg{
		width:110px;
		height:108px;
		top:50%;
		left:50%;
		margin-left:-55px;
		margin-top:-54px;
	}
	.textBox{
		width:100%;top:160px;left:0;padding:10px 0;text-align: center;
		.text{
			color:#fff;
		}
	}
	.roleBox{
		width:100%;
		top:235px;
		.roleList{
			z-index:100;
			margin:0 auto;
			width:550rpx;
			height:35px;
			border-radius: 15px;
			background-color:#fff;
			box-shadow:0px 1px 8px #333333;
			display: flex;
			justify-content: space-between;
			.role{
				width:33.333%; text-align: center; line-height:35px;font-size:14px; color:grey;
			}
			.actived{
				background-color:#2292DD;color:#fff;border-radius: 15px;
			}
		}
	}
	.formBox{
		padding:35px 25px;
		.inputBox{
			background-color:#f2f2f2;margin-top:45px;height:40px;border-radius:10px;border:1px solid #f2f2f2;
			.input{
				margin-left:30px;font-size:12px;text-indent: 15px;margin-top:6px;height:20px;line-height:22px;margin-top:5px;
			}
			.imgIcon{
				width:20px;height:20px;left:15px;top:10px;
			}
			.Vcode{
				width:100px;right:0;top:0;text-align: center;background-color:#2292DD;color:#fff;height:40px;line-height:40px;font-size:12px;
			}
			.button{
				height:40px;line-height: 40px;font-size:14px;background-color:#2292DD;border-radius:10px;
			}
		}
	}
</style>
