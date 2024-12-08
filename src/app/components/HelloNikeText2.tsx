import React from 'react'

const HelloNikeText = () => {
  return (
    <div className='w-full h-auto  bg-[#F5F5F5] py-2'>
      <div className="text-center space-y-2">
        <h1 className='text-[#111111] text-4xl sm:text-3xl md:text-2xl font-bold text-sans'>
          Hello Nike App
        </h1>
        <h2 className='text-[#111111] text-3xl sm:text-2xl md:text-xl font-sans font-bold'>
          Download the app to access everything Nike. 
          <a href="/" className='hover:underline text-black'>Get Your Great</a>
        </h2>
      </div>
    </div>
  )
}

export default HelloNikeText
