import React from 'react';

interface Props {
  story: any;
}

const story = ({ story }: Props) => {

  return (
    <div className="flex flex-col md:flex-row overflow-hidden
    bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">

      <div className="h-64 w-auto md:w-1/2">
        <img className="inset-0 h-full w-full object-cover object-center" src={story.img} />
      </div>

      <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
        <h3 className="font-semibold text-lg leading-tight truncate">{story.name}</h3>
        <p className="mt-2">
          {story.content}
        </p>
        <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
          {story.author} &bull; {story.date}
        </p>
      </div>
    </div>
  )
}

export default story;