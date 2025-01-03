import { configureStore, Store } from "@reduxjs/toolkit";
import countReducer from "./slices/counterSlice"; 
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import adminReducer from "./slices/adminSlice"

const store: Store = configureStore({
  reducer:{
    counter:countReducer,
    auth: authReducer,
    product: productReducer,
    admin: adminReducer
  }
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export default store;
