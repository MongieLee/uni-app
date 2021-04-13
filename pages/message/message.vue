<template>
	<view class="container">
		<view class="tabs-wrapper">
			<u-tabs :list="list" :is-scroll="false" :offset="[2,40]" height='88' :current="current" @change="change"></u-tabs>
		</view>
		<scroll-view class="list-page"></scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '全部',
					count: 5
				}, {
					name: '未读',
					count: 3
				}, {
					name: '已读',
					count: 7
				}],
				current: 0
			}
		},
		methods: {
			change(e) {
				console.log(e)
				this.current = e
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background-color: #f2f2f2;
		display: flex;
		height: 100%;
		flex-direction: column;

		.tabs-wrapper {
			z-index: 998;
			position: relative;
			// box-shadow: 0px 3px 2px 3px rgba(0, 0, 0, 0.7);
			&::after {
				background-image: url(https://cdn.dcloud.net.cn/img/shadow-grey.png);
				content: "";
				position: absolute;
				left: 0;
				right: 0;
				top: 100%;
				height: 5px;
				background-size: 100% 100%;
			}
		}
	}

	.list-page {
		flex: 1;
		padding: 10rpx;
	}

	uni-page-body {
		height: 100%;
	}
</style>
