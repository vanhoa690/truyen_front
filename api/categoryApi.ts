import axiosClient from "./axiosClient"
const categoryUrl = "categories"

const categoryApi = {
  getAll: (params = {}) => {
    const url = `/${categoryUrl}`
    return axiosClient.get(url, { params })
  },

  get: id => {
    const url = `/${categoryUrl}/${id}`
    return axiosClient.get(url)
  }
}

export default categoryApi
