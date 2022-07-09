import React from 'react'
import "./question.css"
import { db } from '../../Firebase/auth'
import { doc, getDoc } from "firebase/firestore"

const Question: React.FC = () => {

    async function getDatabase() {
        const docRef = doc(db, "questions", "deneme")
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
    }
    getDatabase();


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