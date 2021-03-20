import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.baseUrl,
})

export default axiosInstance
