import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "",
    loginStatus: false,
    errorMessage: ""
}

const userLoginSlice = createSlice({
    name: "userLogin",
    initialState,
    reducers: {
        checkUserName: (state, action) => {
            const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            state.userName = action.payload
            
            if (state.userName.length < 5) {
                state.loginStatus = false; 
                state.errorMessage= "Username should contain at least 5 characters" 
            }
            else if (specialChars.test(state.userName)) {
                state.loginStatus= false;
                 state.errorMessage= "Username can't contain space or special characters" 
            }
            else if(state.userName.length > 20) {

                state.loginStatus= false;
                 state.errorMessage= "Username length should be less than 20 characters " 
            }
            else {
                 state.loginStatus= true;
                  state.errorMessage=""; 
            }
        }
    }
})

export const userLoginActions = userLoginSlice.actions;
export const userLoginReducer = userLoginSlice.reducer