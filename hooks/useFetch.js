// import { useState, useEffect } from "react"
const baseUrl = `${process.env.url_api}`
const storyUrl = "stories"
const categoryUrl = "categories"
const chapUrl = "chaps"
import categoryApi from "../api/categoryApi"
import storyApi from "../api/storyApi"
import chapApi from "../api/chapApi"

const useFetch = async (initialState = {}) => {
  const { categoryId, storyId, chapId, textSearch } = initialState

  let categories,
    stories,
    storiesPopular,
    chaps = []
  let story = {}
  try {
    // const params = {
    //   title_like: textSearch
    // }
    // const response = await storyApi.getAll(params)
    categories = await categoryApi.getAll()
    story = await storyApi.get(storyId)
    chaps = await chapApi.getAll()
  } catch (error) {
    console.log("Failed to fetch: ", error)
  }
  if (categoryId) {
    if (categoryId === "All") {
      stories = await fetch(`${baseUrl}/${storyUrl}`)
        .then(res => res.json())
        .catch(error => console.log(`Error in promises ${error}`))
      storiesPopular = await fetch(`${baseUrl}/${storyUrl}?popular=true`)
        .then(res => res.json())
        .catch(error => console.log(`Error in promises ${error}`))
    } else {
      stories = await fetch(`${baseUrl}/${storyUrl}?category=${categoryId}`)
        .then(res => res.json())
        .catch(error => console.log(`Error in promises ${error}`))
      storiesPopular = await fetch(
        `${baseUrl}/${storyUrl}?category=${categoryId}&popular=true`
      )
        .then(res => res.json())
        .catch(error => console.log(`Error in promises ${error}`))
    }
  } else {
    stories = await fetch(`${baseUrl}/${storyUrl}`)
      .then(res => res.json())
      .catch(error => console.log(`Error in promises ${error}`))
  }
  // const categories = await fetch(`${baseUrl}/${categoryUrl}`)
  //   .then(res => res.json())
  //   .catch(error => console.log(`Error in promises ${error}`))

  const storiesSearch = await fetch(
    `${baseUrl}/${storyUrl}?title_like=${textSearch}`
  )
    .then(res => res.json())
    .catch(error => console.log(`Error in promises ${error}`))

  // const story = await fetch(`${baseUrl}/${storyUrl}/${storyId}`)
  //   .then(res => res.json())
  //   .catch(error => console.log(`Error in promises ${error}`))

  // const chaps = await fetch(`${baseUrl}/${chapUrl}?story=${storyId}`)
  //   .then(res => res.json())
  //   .catch(error => console.log(`Error in promises ${error}`))

  const chap = await fetch(`${baseUrl}/${chapUrl}/${chapId}`)
    .then(res => res.json())
    .catch(error => console.log(`Error in promises ${error}`))

  return {
    categories,
    stories,
    storiesPopular,
    storiesSearch,
    story,
    chaps,
    chap
  }
}

export default useFetch
