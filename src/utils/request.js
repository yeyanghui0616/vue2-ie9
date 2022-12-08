/**
 * axios组件自己定义封装，增加基础配置、请求前、后拦截器处理。
 * @return axios对象
 * */

import axios from 'axios';

axios.defaults.withCredentials=true;

const axiosInstance = axios.create({
    baseURL: '/api',
    timeout: 30000
});


//ajax请求前拦截器
axiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
//ajax响应后拦截器
axiosInstance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default axiosInstance;