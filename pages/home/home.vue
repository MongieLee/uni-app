<template>
	<view>
		<!-- <uni-nav-bar title="工作台"></uni-nav-bar> -->
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

			}
		},
		methods: {

		}
	}
</script>
<style lang="scss" scoped>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		border: 1px solid red;
	}
</style>
