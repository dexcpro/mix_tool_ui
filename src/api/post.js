// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.dexc.pro/dapp/topup/', // 设置基础 URL
    timeout: 10000, // 请求超时
    headers: { 'Content-Type': 'application/json' } // 默认请求头
});

export { axiosInstance };
