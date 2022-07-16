import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inputValue:"",
    isInputHidden:true,
    inputRef:null,
    inputRefVal:""
}
const guestInputSlice = createSlice({
    name: "guestInput",
    initialState,
    reducers:{
        changeInputState:(state)=>{
            state.isInputHidden = !state.isInputHidden
        },
        changeInputValue:(state, action)=>{
            state.inputValue = action.payload
        }
      
    }
})

export const guestInputActions = guestInputSlice.actions;
export const guestInputReducer = guestInputSlice.reducer;