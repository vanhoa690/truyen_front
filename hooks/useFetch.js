// import { useState, useEffect } from "react"
import categoryApi from "../api/categoryApi"
import storyApi from "../api/storyApi"
import chapApi from "../api/chapApi"

const useFetch = async (initialState = {}) => {
  const { categoryId, storyId, chapId } = initialState

  let categories,
    stories,
    storiesPopular,
    chaps = []
  let story,
    chap = {}

  try {
    categories = await categoryApi.getAll()
    story = await storyApi.get(storyId)
    chaps = await chapApi.getAll({
      story: storyId
    })
    chap = await chapApi.get(chapId)
  } catch (error) {
    console.log("Failed to fetch: ", error)
  }
  if (categoryId && categoryId === "All") {
    try {
      stories = await storyApi.getAll()
      storiesPopular = await storyApi.getAll({
        popular: true
      })
    } catch (error) {
      console.log("Failed to fetch: ", error)
    }
  } else {
    try {
      stories = await storyApi.getAll({
        category: categoryId
      })
      storiesPopular = await storyApi.getAll({
        category: categoryId,
        popular: true
      })
    } catch (error) {
      console.log("Failed to fetch: ", error)
    }
  }

  return {
    categories,
    stories,
    storiesPopular,
    story,
    chaps,
    chap
  }
}

export default useFetch
