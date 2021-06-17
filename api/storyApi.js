import axiosClient from "./axiosClient"
const storyUrl = "stories"

const storyApi = {
  getAll: params => {
    const url = `/${storyUrl}`
    return axiosClient.get(url, { params })
  },

  get: id => {
    const url = `/${storyUrl}/${id}`
    return axiosClient.get(url)
  }
}

export default storyApi
