import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    gmail: null,
    password: null,
    userStatus: null
  },
  reducers: {
    login: (state, action) => {
               state.gmail = action.payload.gmail;
               state.password = action.payload.password
    },
    logout: (state) => {
      state.gmail  = null;
      state.password = false;
    },
    setGamil: (state, action)=>{
      state.gmail = action.payload
    },
    setStatus: (state, action)=> {
      state.userStatus = action.payload
    }

    
  },

});

export const { login, logout, setGamil, setStatus } = userSlice.actions;

export const selectGmail = (state) => state.user.gmail;
export const selectPassword = (state) => state.user.password;
export const selectUserStatus = (state) => state.user.userStatus;

export default userSlice.reducer;
