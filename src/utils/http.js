const ax = require('axios')
const env = 'test'
const apiObj = {
    getTenPages: {
        test: '/static/mock/getTenPages.json'
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

export default ax