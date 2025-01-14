import { createSlice } from "@reduxjs/toolkit";
import { productDetailsType } from "../../utils/types/types";

interface IAdminState {
    productToEdit: productDetailsType | undefined
    editedProduct: string | undefined 
}
const initialState:IAdminState = {
    productToEdit: undefined,
    editedProduct: undefined

}
const adminSlice = createSlice({
    name: "adminSlice",
    initialState,
    reducers:{
        setProductToEdit:(state, action)=>{
            state.productToEdit = action.payload
        },

        setEditedProduct : (state, action)=>{
            state.editedProduct = action.payload
        }
    }
})


export const { setProductToEdit, setEditedProduct } = adminSlice.actions
export default adminSlice.reducer