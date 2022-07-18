import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import {questionsReducer} from "../features/questionsSlice"
import { guestInputReducer } from '../features/guestInputSlice'
import { userLoginReducer } from '../features/userLoginSice'
import { userReducer } from '../features/usersSlice'


const store = configureStore({
    reducer: {
        questions: questionsReducer,
        guestInput: guestInputReducer,
        userLogin: userLoginReducer,
        users: userReducer
    }
})

export default store

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;