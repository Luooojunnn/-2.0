const ax = require('axios')
const env = 'test'
const apiObj = {
    getTenPages: {
        test: 'http://localhost:3000/pages/getFivePages'
    }
}

ax.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.url = apiObj[config.url][env]
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

ax.interceptors.response.use(function (response) {
    // 在发送请求之前做些什么
    if (response.status === 200) {
        return response.data;
    }
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default ax