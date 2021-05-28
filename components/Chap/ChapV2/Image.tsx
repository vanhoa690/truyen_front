import React from 'react';

interface Props {
  image: any;
}

const Image = ({ image }: Props) => {

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
    </div>

  )
}

export default Image;
