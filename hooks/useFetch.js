// import { useState, useEffect } from "react"
import categoryApi from "../api/categoryApi"
import storyApi from "../api/storyApi"
import chapApi from "../api/chapApi"
import genreApi from "../api/genreApi"

const useFetch = async (initialState = {}) => {
  const { categoryId, storyId, chapId, genreId } = initialState

  let categories,
    stories,
    storiesPopularAll,
    storiesPopular,
    chapsPopular,
    genres,
    chapsRelated,
    chaps = []
  let story,
    chap = {}

  try {
    categories = await categoryApi.getAll({
      visible: true
    })
  } catch (error) {
    console.log("Failed to fetch:categories ")
  }

  try {
    storiesPopularAll = await storyApi.getAll({
      popular: true,
      visible: true
    })
    chapsPopular = await chapApi.getAll({
      popular: true,
      visible: true,
      _sort: "createdAt",
      _order: "asc"
    })
  } catch (error) {
    console.log("Failed to fetch:storiesPopularAll ")
  }

  if (categoryId) {
    if (categoryId === "All") {
      try {
        stories = await storyApi.getAll({ visible: true })
        storiesPopular = [...storiesPopularAll]
      } catch (error) {
        console.log("Failed to fetch:stories All ")
      }
    } else {
      try {
        stories = await storyApi.getAll({
          category: categoryId,
          visible: true
        })
        storiesPopular = await storyApi.getAll({
          category: categoryId,
          popular: true,
          visible: true
        })
      } catch (error) {
        console.log("Failed to fetch:stories - cateId ")
      }
    }
  }
  if (storyId) {
    try {
      story = await storyApi.get(storyId)
      genres = await genreApi.getAll({ visible: true })
      chaps = await chapApi.getAll({
        story: storyId,
        visible: true,
        genre: genreId || "213123123-123123123",
        _sort: "createdAt",
        _order: "desc"
      })
    } catch (error) {
      console.log("Failed to fetch:storyId ")
    }
  }
  if (chapId) {
    try {
      chap = await chapApi.get(chapId)
      const genre = chap.genre
      const storyId = chap.story
      chapsRelated = await chapApi.getAll({
        story: storyId,
        visible: true,
        genre: genre || "213123123-123123123",
        _sort: "createdAt",
        _order: "desc"
      })
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
    genres,
    chapsPopular,
    chapsRelated,
    chap
  }
}

export default useFetch
