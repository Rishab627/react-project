import React from 'react'

const NotFound = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center flex-col '>
        <div className="info h-[400px] w-[400px]">
        <img src="images/notFound.svg" alt=""/>
        </div>
       
        
        <h1 className='text-3xl text-center'>Page Not Found</h1>

    </div>
  )
}

export default NotFound