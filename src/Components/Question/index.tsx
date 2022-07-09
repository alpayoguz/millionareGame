import React from 'react'
import "./question.css"

const Question:React.FC = () => {
  return (
   <>
    <div className='question'>
        <div className='question__main'>
        <div className='question__header'>
            <p className=''>What is the founding date of republic ?</p>
        </div>
        <div className='question__choices'>
            <div className='question__choice'>A: ankara</div>
            <div className='question__choice'>B: ankara</div>
            <div className='question__choice'>C: ankara</div>
            <div className='question__choice'>D: ankara</div>

        </div>


        </div>

    </div>
   </>
  )
}

export default Question