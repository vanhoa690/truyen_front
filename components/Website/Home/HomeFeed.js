import HomeItem from "./HomeItem"

const HomeFeed = ({ stories, storiesPopular }) => {
  return (
    <div>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="md:col-span-2">
          {storiesPopular
            .slice(0, 1)
            .map(({ id, title, description, category, image }) => (
              <HomeItem
                key={id}
                id={id}
                title={title}
                description={description}
                category={category}
                image={image}
              />
            ))}
        </div>

        {storiesPopular
          .slice(1, 3)
          .map(({ id, title, description, category, image }) => (
            <HomeItem
              key={id}
              id={id}
              title={title}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>

      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stories.map(({ id, title, description, category, image }) => (
          <HomeItem
            key={id}
            id={id}
            title={title}
            description={description}
            category={category}
            image={image}
          />
        ))}
      </div>
    </div>
  )
}
export default HomeFeed
