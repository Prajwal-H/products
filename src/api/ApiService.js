import axios from "axios";
class ApiService {
	constructor() {
		let service = axios.create({
			headers: {},
		});
		service.interceptors.response.use(this.handleSuccess, this.handleError);
		this.service = service;
		this.currentUrl = "";
	}

	handleSuccess(response) {
		return response;
	}

	handleError = (error) => {
		const { status } = error.response || "";

		if (status === 401) {
			// if (this.currentUrl.indexOf("/sign-in") < 0) {
			//   localStorage.clear();
			//   sessionStorage.clear();
			// }
		}
		return Promise.reject(error);
	};

	get(path, params) {
		this.currentUrl = path;
		return this.service
			.request({
				method: "GET",
				url: path,
				params: params,
				headers: this.getHeader(),
			})
			.then((response) => response.data || response)
			.catch((e) => this.handleError(e));
	}

	put(path, payload, options = {}) {
		return this.service
			.request(this.getRequestObject("PUT", path, payload, options))
			.then((response) => response.data || response)
			.catch((e) => this.handleError(e));
	}

	patch(path, payload, options = {}) {
		return this.service
			.request(this.getRequestObject("PATCH", path, payload, options))
			.then((response) => response.data || response)
			.catch((e) => this.handleError(e));
	}

	post(path, payload, options = {}, contentType = null) {
		return this.service
			.request(this.getRequestObject("POST", path, payload, options, contentType))
			.then((response) => response.data || response)
			.catch((e) => this.handleError(e));
	}

	delete(path, payload, options = {}) {
		return this.service
			.request(this.getRequestObject("DELETE", path, payload, options))
			.then((response) => response.data || response)
			.catch((e) => this.handleError(e));
	}

	getHeader = (contentType, options) => {
		if (contentType === "xml") {
			return {
				"Content-Type": "application/xml",
				// Authorization: "Bearer " + localStorage.getItem("token"),
			};
		} else if (contentType === "multipart/form-data") {
			return {
				"Content-Type": "multipart/form-data",
				// Authorization: "Bearer " + localStorage.getItem("token"),
			};
		} else {
			return {
				"Content-Type": "application/json;charset=UTF-8",
				// Authorization: "Bearer " + localStorage.getItem("token"),
			};
		}
	};

	getRequestObject = (method, path, payload, options = {}, contentType) => {
		this.currentUrl = path;
		return {
			method: method,
			url: path,
			responseType: options.responseType || "json",
			data: payload,
			headers: this.getHeader(contentType, options),
		};
	};
}

export default new ApiService();
