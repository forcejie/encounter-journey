import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'
import useDateStore from '@/store/modules/date'
const dateStore = useDateStore()

class KKRequest {
    constructor(baseURL, timeout=10000) {
        this.instance = axios.create ({
            baseURL,
            timeout
        })
        this.instance.interceptors.request.use(config => {
            dateStore.isLoading = true
            return config
        }, err => {
            return err
        })
        this.instance.interceptors.response.use(res => {
            dateStore.isLoading = false
            return res
        }, err => {
            dateStore.isLoading = false
            return err
        })
    }
    

    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    get(config) {
        return this.request({...config, method: "get"})
    }
    post(config) {
        return this.request({ ...config, method: "post" })
    }
}

export default new KKRequest(BASE_URL, TIMEOUT)