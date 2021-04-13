<template>
	<view class="container">
		<view class="wrapper">
			<view class="bz-font">珠海百智科技</view>
			<view>CMS 2.0</view>
			<view class="form-wrapper">
				<u-form label-width="auto" :model="form" ref="uForm">
					<u-form-item prop='username' left-icon='account-fill'>
						<u-input placeholder='请输入账号' v-model="form.username" border />
					</u-form-item>
					<u-form-item prop='password' left-icon='lock-opened-fill'>
						<u-input placeholder='请输入密码' v-model="form.password" :type="'password'" border password-icon />
					</u-form-item>
				</u-form>
			</view>
			<u-button @click="login" :loading='loading' class="login-button" type="primary" size="medium" :ripple="true"
				ripple-bg-color="#909399">登陆
			</u-button>
			<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>
	import bizRequest from '../../utils/bizRequest.js'
	export default {
		data() {
			return {
				form: {
					username: '',
					password: '',
				},
				count: 4,
				value: 2,
				loading: false,
				rules: {
					username: [{
						required: true,
						message: '请输入账号',
						trigger: ['change', 'blur'],
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: ['change', 'blur'],
					}]
				}
			}
		},
		methods: {
			login() {
				this.loading = !this.loading
				this.$refs.uForm.validate(valid => {
					console.log(valid)
					if (valid) {
						bizRequest('/oauth/token', 'POST', this.form, {}, true).then((response) => {
							console.log(response)
							try {
								uni.setStorageSync('access_token', response.data.access_token);
							} catch (e) {
								console.log(e)
							}
							this.$refs.uToast.show({
								title: '登陆成功',
								type: 'success',
							})
							this.loading = !this.loading;
							uni.switchTab({
								url: '/pages/home/home'
							});
						}, (err) => {
							console.log(err)
							this.$refs.uToast.show({
								title: err?.data?.error_description,
								type: 'error',
							})
							this.loading = !this.loading
						})
						// // bizRequest('/oauth/token','post',data,{},true)
						// this.$refs.uToast.show({
						// 	title: '登录成功',
						// 	type: 'success',
						// })
					} else {

					}
				});

			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>
<style lang="scss">
	.u-form-item__message {
		padding-left: 0;
	}
</style>
<style lang="scss" scoped>
	.container {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url(../../static/loginBg.png);

		.wrapper {
			display: flex;
			flex-direction: column;
			border-radius: 16rpx;
			width: 90%;
			align-items: center;
			background-color: white;
			color: #686868;
			padding: 40rpx 16rpx;

			.form-wrapper {
				width: 90%;
			}

			.bz-font {
				font-size: 48rpx;
			}

			.login-button {
				width: 90%;
			}
		}
	}
</style>
