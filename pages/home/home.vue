<template>
	<view>
		<!-- <uni-nav-bar title="工作台"></uni-nav-bar> -->
		<view class="menu-wrapper">
			<view @click="menuClick(item.path)" v-for="(item,index) in menus" :key='index'>
				<u-icon :name="item.icon" size='64' color='#0000ff'></u-icon>
				{{item.text}}
			</view>
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
				menus: [{
					icon: 'man-add-fill',
					text: '考勤',
					path: '/pages/message/message'
				}, {
					icon: 'car-fill',
					text: '出差',
					path: '/pages/message/message'
				}, {
					icon: 'hourglass',
					text: '加班',
					path: '/pages/message/message'
				}, {
					icon: 'order',
					text: '外派',
					path: '/pages/message/message'
				}, {
					icon: 'minus-people-fill',
					text: '请假',
					path: '/pages/message/message'
				}]
			}
		},
		methods: {
			menuClick(url) {
				uni.navigateTo({
					// url: url
					url: '/pages/form/form',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
				console.log(url)
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
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		border: 1px solid red;
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
