import React from 'react'
import { BiColor } from 'react-icons/bi'
import { DiAndroid, DiAppstore, DiCss3, DiHtml5, DiJavascript, DiNodejs, DiPython, DiReact } from 'react-icons/di'
const Tech = () => {
  return (
    <div >

      <h1 className='text-5xl font-bold text-center'>Technologies I Use</h1>
       <div className="dev-icons grid grid-cols-4 justify-items-center space-y-8 gap-10">
       <DiAndroid size={150} />
       <DiPython size={150} />
       <DiCss3 size={150} />
       <DiReact size={150} />
       <DiHtml5 size={150} />
       <DiJavascript size={150} />
       <DiNodejs size={150} className='animate-bounce' />
       <DiAppstore size={150} />
      


       </div>
        
    </div>
  )
}

export default Tech