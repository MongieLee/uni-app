<template>
	<view>
		<!-- <uni-nav-bar title="工作台"></uni-nav-bar> -->
		<view class="container">
			<view class="item">
				<view class="">
					头像
				</view>
				<u-avatar size='68' src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'>
				</u-avatar>
			</view>
			<view class="item">
				<view class="">
					账号
				</view>
				<view class="">
					Admin
				</view>
			</view>
			<view class="item">
				<view class="">
					昵称
				</view>
				<view class="">
					管理员
				</view>
			</view>
			<u-button @click='logout' :custom-style="customStyle" type="error">注销</u-button>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		// import uniNavBar from '../../uni_m'
		components: {
			uniNavBar
		},
		mounted() {
			// if (document) {
			// 	const backIcon = document.querySelector('.uni-page-head-hd')
			// 	backIcon.style.display = 'none'
			// }
		},
		data() {
			return {
				customStyle: {
					margin: '16rpx 14rpx', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
				}
			}
		},
		methods: {
			logout() {
				uni.reLaunch({
				    url: '/'
				});
			}

		},
		onLoad() {
			try {
				const value = uni.getStorageSync('access_token');
				if (value) {
					console.log(value);
				}
			} catch (e) {
				// error
			}
		}
	}
</script>
<style lang="scss" scoped>
	.container {
		font-size: 16px;
		margin-top: 5px;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		border: 1px solid red;
	}

	.item {
		height: 90rpx;
		margin: 0 12rpx;
		padding: 10rpx 14rpx;
		border-bottom: 1px solid #d5d5d5;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.menu-wrapper {
		margin-top: 5px;
		display: flex;
		flex-wrap: wrap;

		&>uni-view {
			padding: 8rpx;
			width: 25%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
</style>
