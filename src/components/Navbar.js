import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between py-5 '>
        <div className='gap-4 flex'>
        <h2 className='font-bold text-xl text-red-500'> Buletin</h2>
        <p className='pt-1'>Stories</p>
        <p className='pt-1'>Creator</p>
        <p className='pt-1'>Stories</p>
        <p className='pt-1'>Subscibe</p>
        </div>

        <div className='flex  gap-4'>
        <p>Write</p>
        <p>creator</p>
        <img src="" alt="" />
        </div>
    </div>
  )
}

export default Navbar