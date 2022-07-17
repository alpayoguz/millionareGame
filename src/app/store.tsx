import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import {questionsReducer} from "../features/questionsSlice"
import { guestInputReducer } from '../features/guestInputSlice'
import { userLoginReducer } from '../features/userLoginSice'


const store = configureStore({
    reducer: {
        questions: questionsReducer,
        guestInput: guestInputReducer,
        userLogin: userLoginReducer
    }
})

export default store

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;