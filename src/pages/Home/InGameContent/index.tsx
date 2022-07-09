import React from 'react'
import Question from '../../../Components/Question'
import { useState, useEffect } from 'react'
import {collection, query, where, getDocs} from "firebase/firestore";
import { db } from '../../../Firebase/auth';

interface QuestionArray{
    id:number;
    answer:string;
    question:string;
    choices:[string, string, string, string];
    isAnswered:boolean
}

const InGameContent:React.FC = () => {
    const [questions, setQuestions] = useState<QuestionArray[]>()

    useEffect(()=>{
        const questionArray:Array<QuestionArray> = []
        async function getQuestionData() {
            
            const questionRef = collection(db, "questions");
            const q = query(questionRef, where("isAnswered", "==", false))

            const querySnapshot = await getDocs(q);
            // console.log(querySnapshot);
            querySnapshot.forEach(doc => {
                const question:any = doc.data();
                questionArray.push(question);
            })
            setQuestions(questionArray)
        }

        getQuestionData();
    },[])

    console.log(questions);
    
  return (
    <Question/>
  )
}

export default InGameContent