import { createSlice } from "@reduxjs/toolkit";
import { productDetailsType } from "../../utils/types/types";

interface IAdminState {
    productToEdit: productDetailsType | undefined
}
const initialState:IAdminState = {
    productToEdit: undefined
}
const adminSlice = createSlice({
    name: "adminSlice",
    initialState,
    reducers:{
        setProductToEdit:(state, action)=>{
            state.productToEdit = action.payload
        }
    }
})


export const {setProductToEdit} = adminSlice.actions
export default adminSlice.reducer