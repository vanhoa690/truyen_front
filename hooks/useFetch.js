// import { useState, useEffect } from "react"
import categoryApi from "../api/categoryApi"
import storyApi from "../api/storyApi"
import chapApi from "../api/chapApi"

const useFetch = async (initialState = {}) => {
  const { categoryId, storyId, chapId } = initialState

  let categories,
    stories,
    storiesPopularAll,
    storiesPopular,
    chapsPopular,
    chaps = []
  let story,
    chap = {}

  try {
    categories = await categoryApi.getAll()
  } catch (error) {
    console.log("Failed to fetch:categories ")
  }

  try {
    storiesPopularAll = await storyApi.getAll({
      popular: true
    })
    chapsPopular = await chapApi.getAll({
      popular: true
    })
  } catch (error) {
    console.log("Failed to fetch:storiesPopularAll ")
  }

  if (categoryId) {
    if (categoryId === "All") {
      try {
        stories = await storyApi.getAll()
        storiesPopular = [...storiesPopularAll]
        // const chapPopular
      } catch (error) {
        console.log("Failed to fetch:stories All ")
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
        console.log("Failed to fetch:stories - cateId ")
      }
    }
  }
  if (storyId) {
    try {
      story = await storyApi.get(storyId)
      chaps = await chapApi.getAll({
        story: storyId
      })
    } catch (error) {
      console.log("Failed to fetch:storyId ")
    }
  }
  if (chapId) {
    try {
      chap = await chapApi.get(chapId)
    } catch (error) {
      console.log("Failed to fetch:chapId ")
    }
  }

  return {
    categories,
    stories,
    storiesPopularAll,
    storiesPopular,
    story,
    chaps,
    chapsPopular,
    chap
  }
}

export default useFetch
