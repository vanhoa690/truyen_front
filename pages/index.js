import Home from "../components/Website/Home"

const HomePage = ({ categories, stories, storiesPopular, categoryId }) => {
  return (
    <Home
      categories={categories}
      stories={stories}
      storiesPopular={storiesPopular}
      categoryId={categoryId}
    />
  )
}
export default HomePage

export const getServerSideProps = async ({ query: { categoryId = "All" } }) => {
  const baseUrl = `${process.env.url_api}`
  const storyUrl = "stories"
  const categoryUrl = "categories"
  let stories = []
  let storiesPopular = []
  if (categoryId === "All") {
    stories = await fetch(`${baseUrl}/${storyUrl}`)
      .then(res => res.json())
      .catch(error => console.log(`Error in promises ${error}`))
    storiesPopular = await fetch(`${baseUrl}/${storyUrl}?popular=true`)
      .then(res => res.json())
      .catch(error => console.log(`Error in promises ${error}`))
    // const fetchStory = fetch(`${baseUrl}/${storyUrl}`)
    // const fetchStoryPopular = fetch(`${baseUrl}/${storyUrl}?popular=true`)
    // Promise.all([fetchStory, fetchStoryPopular])
    //   .then(results => Promise.all(results.map(r => r.json())))
    //   .then(result => {
    //     ;[stories, storiesPopular] = result
    //   })
    //   .catch(error => console.log(`Error in promises ${error}`))
  } else {
    stories = await fetch(`${baseUrl}/${storyUrl}?category=${categoryId}`)
      .then(res => res.json())
      .catch(error => console.log(`Error in promises ${error}`))
    storiesPopular = await fetch(
      `${baseUrl}/${storyUrl}?category=${categoryId}&popular=true`
    )
      .then(res => res.json())
      .catch(error => console.log(`Error in promises ${error}`))
    // const fetchStory = fetch(`${baseUrl}/${storyUrl}?category=${categoryId}`)
    // const fetchStoryPopular = fetch(
    //   `${baseUrl}/${storyUrl}?category=${categoryId}&popular=true`
    // )
    // Promise.all([fetchStory, fetchStoryPopular])
    //   .then(results => Promise.all(results.map(r => r.json())))
    //   .then(result => {
    //     ;[stories, storiesPopular] = result
    //   })
    //   .catch(error => console.log(`Error in promises ${error}`))
  }
  const categories = await fetch(`${baseUrl}/${categoryUrl}`)
    .then(res => res.json())
    .catch(error => console.log(`Error in promises ${error}`))
  return {
    props: {
      categoryId,
      categories,
      storiesPopular,
      stories
    }
  }
}
