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
            <div className='question__choice'><span>A:</span> ankara</div>
            <div className='question__choice'><span>B:</span> ankara</div>
            <div className='question__choice'><span>C:</span> ankara</div>
            <div className='question__choice'><span>D:</span> ankara</div>

        </div>


        </div>

    </div>
   </>
  )
}

export default Question