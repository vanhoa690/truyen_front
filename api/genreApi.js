import axiosClient from "./axiosClient"
const genreUrl = "genres"

const genreApi = {
  getAll: (params = {}) => {
    const url = `/${genreUrl}`
    return axiosClient.get(url, { params })
  },

  get: id => {
    const url = `/${genreUrl}/${id}`
    return axiosClient.get(url)
  }
}

export default genreApi
