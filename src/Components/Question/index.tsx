import React, { useEffect } from 'react'
import "./question.css"
import { fetchQuestions } from '../../features/questionsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../app/store'
import { useState } from 'react'


// deneme 123

const Question: React.FC = () => {
    const questions:any = useSelector<any>((state) => state.questions.questions)
    const dispatch = useDispatch<AppDispatch>()
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
    console.log("question", questions[currentQuestionNumber])
    const [currentQuestion, setCurrentQuestion] = useState<any>(questions[currentQuestionNumber])
    console.log("currentQuestion", currentQuestion)
    const { question, answer,  id, choices, isAnswered } = currentQuestion || {}
 

    

    useEffect(()=>{
        dispatch(fetchQuestions())
        
    }, [])
    
    useEffect(()=>{
        setCurrentQuestion(questions[currentQuestionNumber])
    }, [currentQuestionNumber, questions])
    
    
    const numaraArttir = ()=>{
        setCurrentQuestionNumber(prevVal => prevVal + 1)
    }

    return (
        <>
            <div className='question'>
                <div className='question__main'>
                    <div className='question__header'>
                        <p className=''>{question && question}</p>
                    </div>
                    <div className='question__choices'>
                        <div className='question__choice'><span>A:</span> {choices && choices[0] }</div>
                        <div className='question__choice'><span>B:</span> {choices && choices[1]}</div>
                        <div className='question__choice'><span>C:</span> {choices && choices[2]}</div>
                        <div className='question__choice'><span>D:</span> {choices && choices[3]}</div>

                    </div>


                </div>
                <button onClick={numaraArttir}>Degistir</button>

            </div>
        </>
    )
}

export default Question