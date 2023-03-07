import axios from 'axios'

const request = axios.create({
    baseURL: '/api',
    timeout: 80000,
    withCredentials: true
})

request.interceptors.request.use(
    req => {
        return req
    },
    err => {
        return Promise.reject(err)
    }
)

request.interceptors.response.use(
    response => {
        return response.data
    },
    err => {
        return Promise.reject(err)
    }
)

export default request