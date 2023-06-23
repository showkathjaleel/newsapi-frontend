import React from 'react'

const Bulletin = () => {
  return (
    <div className=" flex h-36 bg-gray-100 justify-center items-center  mb-8  text-lg">
    <div>
      <h2 className="text-sm text-gray-600 pl-44">WELCOME TO BULLETIN</h2>

      <p className="font-bold text-3xl">
        Craft Narratives that ignite{" "}
        <span className="text-red-700 "> inspiration ,</span>
      </p>
      <p className="text-red-700 pl-5 font-bold text-3xl">
        {" "}
        knowledge <span className="text-black">and</span>
        <span className="text-red-700 "> entertainment</span>
      </p>
    </div>
  </div>
  )
}

export default Bulletin