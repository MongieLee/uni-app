const baseURL = "https://www.baiz.cn:4433";

// const updateToken = (
// 	accessToken: string,
// 	refresh_token: string,
// 	expires: number
// ): void => {
// 	window.localStorage.setItem("access_token", accessToken);
// 	window.localStorage.setItem("refresh_token", refresh_token);
// 	const expires_time = new Date(Date.now() + expires * 1000).toString();
// 	window.localStorage.setItem("expires_time", expires_time);
// };

// const removeToken = (): void => {
// 	window.localStorage.removeItem("access_token");
// 	window.localStorage.removeItem("refresh_token");
// 	window.localStorage.removeItem("expires_time");
// };

const BizRequest = (
	url,
	method = "GET",
	data = {},
	params = {},
	isToken = false,
) => {
	return new Promise((resolve, reject) => {
		const _data = isToken ? Object.assign({}, {
			grant_type: "password",
			client_id: "BizClient",
			client_secret: "BizClient",
		}, data) : data;
		const _header = isToken ? {
			"Content-Type": "application/x-www-form-urlencoded"
		} : {
			"Content-Type": "application/json"
		};
		console.log(_data)
		console.log(_header)

		uni.request({
			method,
			url: baseURL + url, //仅为示例，并非真实接口地址。
			data: _data,
			header: _header,
			success: (res) => {
				if (res.statusCode === 200) {
					resolve(res)
				} else {
					reject(res)
				}
			},
			fail: (err) => {
				reject(err)
			}
		});

		// axios(options)
		// 	.then(async (response: any) => {
		// 		if (response.status === 200) {
		// 			if (isToken) {
		// 				updateToken(
		// 					response.data.access_token,
		// 					response.data.refresh_token,
		// 					response.data.expires_in
		// 				);
		// 				resolve(response);
		// 			} else {
		// 				resolve(response.data);
		// 			}
		// 		} else {
		// 			showToast({
		// 				message: "请求失败",
		// 			});
		// 			reject(response);
		// 		}
		// 	})
		// 	.catch(async (err: any) => {
		// 		showToast({
		// 			message: err.response?.data.error_description || err.message,
		// 		});
		// 		reject(err);
		// 	});
	});
};

export default BizRequest;
