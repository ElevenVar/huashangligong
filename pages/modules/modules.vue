<template>
	<view>
		<view class='zlGrid pd10'>
			<view class="zlGrid-Item col-4" :key="item.index" v-for="(item,index) in GridItem" @tap="zlGridC(index)">
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
						text: '学费',
						"path":"../xuefei/xuefei"
					},
					{
						url: '../../static/img/modulesImg/mj.png',
						text: '电子门禁',
						"path":"../dianzimenjin/dianzimenjin"
					},
					{
						url: '../../static/img/modulesImg/qj.png',
						text: '请假',
						"path":"../qingjia/qingjia"
					},
					{
						url: '../../static/img/modulesImg/cjcx.png',
						text: '成绩查询',
						"path":"../chengjichaxun/chengjichaxun"
					},
					{
						url: '../../static/img/modulesImg/gzcx.png',
						text: '工资查询',
						"path":"../gongzichaxun/gongzichaxun"
					},
					{
						url: '../../static/img/modulesImg/xzf.png',
						text: '学杂费',
						"path":"../xuezafei/xuezafei"
					},
					{
						url: '../../static/img/modulesImg/gxxyj.png',
						text: '共享洗衣机',
						"path":"../gongxiangxiyiji/gongxiangxiyiji"
					},
					{
						url: '../../static/img/modulesImg/kc.png',
						text: '课程',
						"path":"../kecheng/kecheng"
					}
				],
			};
		},
		methods:{
			//点击切换页面
			zlGridC(index){
				let path;
				switch(index){
					case 0:
						path= "../xuefei/xuefei";
						break;
					case 1:
						path= "../dianzimenjin/dianzimenjin";
						break;
					case 2:
						path= "../qingjia/qingjia";
						break;
					case 3:
						path= "../chengjichaxun/chengjichaxun";
						break;
					case 4:
						path= "../gongzichaxun/gongzichaxun";
						break;
					case 5:
						path= "../xuezafei/xuezafei";
						break;
					case 6:
						path= "../gongxiangxiyiji/gongxiangxiyiji";
						break;
					case 7:
						path= "../kecheng/kecheng";
						break;
				}
				uni.navigateTo({
					url: path,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style lang="less">

</style>
