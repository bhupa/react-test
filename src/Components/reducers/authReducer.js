import { createSlice } from '@reduxjs/toolkit';

const userDetails ={id:"",name:"",email:"",token:"",roles:null,permissions:null};
const initialState = {
    user: userDetails,
  };
export const authReducer = createSlice({
    name:'user',
    initialState,
    reducers:{
        login:(state,action)=>{
          state.user = { ...action.payload };
            
        },
        logout:(state,action)=>{
            state.user = userDetails
        },
        

    },extraReducers: (builder) => {
        builder.addMatcher(
          (action) => action.type === authReducer.actions.login.type,
          (state) => {
            state.isAuthenticated = !!state.user.token;
          }
        );
      },

})

export const { login,logout } = authReducer.actions

export default authReducer.reducer