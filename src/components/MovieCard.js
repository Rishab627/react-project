import React from 'react'

const MovieCard = ({title, rating}) => {
   console.log(title, rating);
  return (
  

        <div className='w-[300px] shadow-xl'>
            <img src="https://images.unsplash.com/photo-1720188228786-e6cb3b668aef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
            <div className="p-2">
                <h1>Avatar</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores itaque suscipit ab quos impedit velit a hic ducimus veniam?</p>
            </div>
        </div>

        


   
  )
}

export default MovieCard