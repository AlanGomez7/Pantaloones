import { createSlice } from "@reduxjs/toolkit";


interface AuthState {
  userDetails?: string | undefined;
  signInError: string | null;
  signUpError: string | null;
  tokenRefreshError: string | null;
  otpLogin: string|null
}

const initialState: AuthState = {
  userDetails: undefined,
  signInError: null,
  signUpError: null,
  tokenRefreshError: null,
  otpLogin: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    signIn: (state, actions) => {
      state.userDetails = actions?.payload;
    },

    signInError: (state, actions) => {
      state.signInError = actions.payload
    },

    signUpError : (state, actions)=> {
      state.signUpError = actions.payload
    },

    otpLogin: (state, actions) =>{
      state.otpLogin = actions.payload
    },

    tokenRefreshError: (state, actions)=>{
      state.tokenRefreshError = actions.payload
    }
  },
});

export const {signIn, signInError, signUpError, otpLogin} = authSlice.actions;
export default authSlice.reducer;
