import React from 'react'
import Question from '../../Components/Question'
import { useState, useEffect } from 'react'
import {collection, query, where, getDocs} from "firebase/firestore";
import { db } from '../../Firebase/auth';
import {fetchQuestions} from "../../features/questionsSlice"
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store';
// interface QuestionArray{
//     id:number;
//     answer:string;
//     question:string;
//     choices:[string, string, string, string];
//     isAnswered:boolean
// }

const InGameContent = () => {

  return (
    <Question/>
  )
}

export default InGameContent