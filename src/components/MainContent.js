import React from 'react'

const MainContent = () => {
  return (
    <div className="flex flex-row gap-16">
    <div class="w-[800px] rounded overflow-hidden ">
      <img
        className="w-full h-64"
        src="https://pyxis.nymag.com/v1/imgs/a85/912/a5ef47190c966169cf6e9c6da815b0f0ad-07-john-wick-2-2.rsquare.w700.jpg"
        alt="Sunset in the mountains"
      />
    </div>

  
    <div className="p-4">
      <div className="flex ">
        <img
          className="w-10 h-10"
          src="https://static.vecteezy.com/system/resources/previews/020/336/373/original/netflix-logo-netflix-icon-free-free-vector.jpg"
          alt=""
        />
        <p className="text-sm text-gray-600 mt-2">
          Netflix 12 minute ago
        </p>
      </div>

      <p className="text-6xl font-semibold">
        {" "}
        Where To Watch 'John
        <br /> Wick: Chapter 4
      </p>
      <p className="pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        distinctio, dolores vero quos id adipisci a at et, suscipit
        repellat aspernatur? Aliquid velit reiciendis voluptas, ex
        eligendi voluptate totam vero.
      </p>

      <p className="text-sm text-gray-600 mt-2 ">
        <span className="text-red-700"> Movies</span> 4 min read
      </p>
    </div>
  </div>
  )
}

export default MainContent