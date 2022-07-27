import React from 'react'
import Question from '../../components/Question'
import { useState, useEffect } from 'react'
import {collection, query, where, getDocs} from "firebase/firestore";
import { db } from '../../firebase/auth';
import {fetchQuestions} from "../../features/questionsSlice"
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store';
import { QuestionObject } from '../../utils';

//  export interface Question{
//     id:number;
//     answer:string;
//     question:string;
//     choices:[string, string, string, string];
//     isAnswered:boolean
// }

const InGameContent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const questions:Array<QuestionObject> = useSelector((state:any) => state.questions.questions)

  useEffect(()=>{
    dispatch(fetchQuestions())
  },[])

  return (
    <Question questions={questions}/>
  )
}

export default InGameContent