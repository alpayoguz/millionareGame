import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import {questionsReducer} from "../features/questionsSlice"


const store = configureStore({
    reducer: {
        questions: questionsReducer
    }
})

export default store

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;