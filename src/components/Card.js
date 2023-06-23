import React from 'react'

const Card = ({info}) => {
  return (
    <div className="w-80 rounded overflow-hidden shadow-lg">
  <img className="w-full h-40 rounded-lg" src={info.urlToImage} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{info.title}</div>
  </div>
 
</div>
  )
}

export default Card