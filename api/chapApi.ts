import axiosClient from "./axiosClient"
const chapUrl = "chaps"

const chapApi = {
  getAll: params => {
    const url = `/${chapUrl}`
    return axiosClient.get(url, { params })
  },

  get: id => {
    const url = `/${chapUrl}/${id}`
    return axiosClient.get(url)
  }
}

export default chapApi
