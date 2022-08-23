//该文件用于配置请求
import axios from "axios"


const service = axios.create({
    baseURL:'http://localhost:3000/fapig/calculator',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    timeout: 30000
})

export default service;