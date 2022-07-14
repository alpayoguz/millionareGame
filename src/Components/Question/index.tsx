import React, { useEffect } from 'react'
import "./question.css"
import { fetchQuestions } from '../../features/questionsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../app/store'
import { useState } from 'react'


// deneme 123

const Question: React.FC = () => {
    const questions: any = useSelector<any>((state) => state.questions.questions)
    const dispatch = useDispatch<AppDispatch>()
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
    console.log("question", questions[currentQuestionNumber])
    const [currentQuestion, setCurrentQuestion] = useState<any>(questions[currentQuestionNumber])
    console.log("currentQuestion", currentQuestion)
    let { question, answer, id, choices, isAnswered } = currentQuestion || {}
    question = question?.charAt(0).toUpperCase() + question?.slice(1)
    // const [choice1, choice2, choice3, choice4] = choices?.map((chc: string) => chc.charAt(0).toUpperCase() + chc.slice(1)) || []
    // console.log(choice1);
    const letters = ["A", "B", "C", "D"];


    const onChoiceSelect = (event: any)=>{
        event.target!.classList.add("active-choice")
        setTimeout(()=>{
            let spanText = event.target.querySelector("span").innerText
            spanText = spanText.charAt(0).toLowerCase() + spanText.slice(1); 
            if(spanText === answer){
                setCurrentQuestionNumber(prevVal => prevVal + 1);
            }
            
        }, 3000)
    }

    useEffect(() => {
        dispatch(fetchQuestions())

    }, [])

    useEffect(() => {
        setCurrentQuestion(questions[currentQuestionNumber])
    }, [currentQuestionNumber, questions])
    return (
        <>
            <div className='question'>
                <div className='question__main'>
                    <div className='question__header'>
                        <p className=''>{question && question} ?</p>
                    </div>
                    <div className='question__choices'>
                        {choices?.map((choice: string, index: number) => {
                            choice = choice.charAt(0).toUpperCase() + choice.slice(1);
                           return <div onClick={(event:any)=> { onChoiceSelect(event)}} key={index} className='question__choice'>{letters[index]}: <span>{choice}</span> </div>
                        }
                        )}

                    </div>
                </div>

            </div>
        </>
    )
}

export default Question