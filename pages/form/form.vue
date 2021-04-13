<template>
	<view style="height:100%">
		<map :scale='15' style="width: 100%; height: 50%;" :latitude="latitude" :longitude="longitude"
			:markers="covers">
		</map>
		<view class="">
			111{{t}}
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			console.log(121)
			uni.getLocation({
				type:'gcj02',
			    geocode: true,//设置该参数为true可直接获取经纬度及城市信息
				altitude:true,
			    success: (res)=>{
					alert(111)
			        window.console.log(res);
					alert(JSON.stringify(res))
					const a = JSON.stringify(res)
					console.log(`a`);
					console.log(a);
					this.t = JSON.stringify(res)
			    },
			    fail: function () {
			        uni.showToast({
			            title: '获取地址失败，将导致部分功能不可用',
			            icon: 'none'
			        });
			    },
				complete:()=>{
					alert('fuck')
				}
			});
		},
		data() {
			return {
				t:'',
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 22.224530,
				longitude: 113.510656,
				scale: 20,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>
	uni-page-body {
		height: 100%;
	}
</style>
