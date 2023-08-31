import { createSlice } from '@reduxjs/toolkit';

const userDetails ={id:"",name:"",email:"",token:""};
const initialState = {
    isAuthenticated: false,
    user: userDetails,
  };
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        login:(state,action)=>{
           
            state.isAuthenticated = true;
            state.user = { ...action.payload };
            
        },
        logout:(state,action)=>{
            state.isAuthenticated = false;
            state.user = userDetails
        }
    }

})

export const { login,logout } = userSlice.actions

export default userSlice.reducer