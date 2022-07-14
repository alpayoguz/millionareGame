import { async } from "@firebase/util";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {collection, query, where, getDocs} from "firebase/firestore";
import { db } from '../Firebase/auth';



interface QuestionState{
    questions : any,
    isLoading: boolean,
    errorMessage: string | undefined

}

export const fetchQuestions =  createAsyncThunk("questions/fetchQuestions", async ()=>{
    const questionArray:any = []
    const questionRef = collection(db, "questions");
    const q = query(questionRef, where("isAnswered", "==", false))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
        const question = doc.data();
        questionArray.push(question);
    })

    return questionArray
})

const initialState : QuestionState = {
    questions:[],
    isLoading: true,
    errorMessage: ""
}
const questionsSlice = createSlice({
    name:"questions",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchQuestions.pending, (state, action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchQuestions.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.questions = action.payload;
            state.errorMessage = "";
        })
        builder.addCase(fetchQuestions.rejected, (state, action)=>{
            state.isLoading = false;
            state.errorMessage = action.error.message;
            state.questions = []

        })
    }

    }
)

export const questionsActions = questionsSlice.actions;
export const questionsReducer = questionsSlice.reducer;