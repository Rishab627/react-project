import React from 'react'

const DisplaySec = () => {
  return (
    <div className='grid grid-cols-2 items-center sm:grid-cols-1 sm:mb-7'>

      <div className="dis-img  ">
      <dotlottie-player src="https://lottie.host/24590414-81cb-4e76-9ff9-154aa1cca69d/sUoD2tUtFl.json" background="transparent" speed="1" loop autoplay></dotlottie-player>

      </div>


      <div className="dis-info space-y-3 sm:text-center sm:px-4">
        <h1 className='text-3xl font-bold'>Hi, I am Rishab</h1>
        <p className='text-pink-600 italic'>Some Dev, Freelancer, Rounder</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias accusamus, quis atque illum aut recusandae. Perferendis nostrum possimus consectetur maxime? Suscipit est veniam praesentium deleniti.</p>


      </div>
        
    </div>
  )
}

export default DisplaySec
