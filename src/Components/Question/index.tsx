import React, { useEffect } from 'react'
import "./question.css"
import { useState } from 'react'
import { makeFirstLetterBig, makeFirstLetterSmall } from "../../utils"
import { letters } from "../../utils/index"
import {QuestionObject} from "../../utils/index"


interface Props {
    questions: QuestionObject[]
}

const Question: React.FC<Props> = ({ questions }) => {

    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
    console.log("question", questions[currentQuestionNumber])
    const [currentQuestion, setCurrentQuestion] = useState<any>(questions[currentQuestionNumber])
    console.log("currentQuestion", currentQuestion)
    let { question, answer, id, choices, isAnswered } = currentQuestion || {}
    question = makeFirstLetterBig(question)

    const onChoiceSelect = (event: any) => {
        event.target!.classList.add("question__selected")
        let spanText = event.target.querySelector("span").innerText
        spanText = makeFirstLetterSmall(spanText);
        setTimeout(() => {
            if (spanText === answer) {
                event.target.classList.remove("question__selected");
                event.target.classList.add("question__correct")
                setTimeout(() => {
                    setCurrentQuestionNumber(prevVal => prevVal + 1);
                    event.target.classList.remove("question__correct")
                    // çok ilginçtir ki compontnt renderlansa bile eklediğimiz class gitmiyor
                }, 2000)

            }
        }, 3000)
    }

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
                            choice = makeFirstLetterBig(choice);
                            return <div onClick={(event: any) => { onChoiceSelect(event) }} key={index} className='question__choice'>{letters[index]}: <span>{choice}</span></div>
                        }
                        )}

                    </div>
                </div>

            </div>
        </>
    )
}

export default Question