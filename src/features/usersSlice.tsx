import { async } from "@firebase/util";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase/auth';

export interface User{
    isUser: boolean;
    id: number;
    username: string
}

interface UserState{
    users:User[];
    isLoading:boolean;
    errorMessage:string;

}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async()=>{
    const usersArray:User[] = []
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("isUser", "==", true))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc =>{
        const user = doc.data() as User;
        usersArray.push(user);
    })

    return usersArray;
})

const initialState: UserState = {
    users:[],
    isLoading:false,
    errorMessage:""
}

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending, (state, action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.users = action.payload;
            state.errorMessage = "";
        })
        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.isLoading = false;
            state.users = [];
            if(typeof action.error.message === "string" ){
                state.errorMessage = action.error.message
            }
            
        })
    }
})

export const usersActions = usersSlice.actions;
export const userReducer = usersSlice.reducer