import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   product:{
       description:null,
       price:null
   }
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
       addTocart: (state, action) =>{
           state.product = action.payload
           
       }
    }
});
export const  selectProduct = (state) =>(state.product)
export const { addTocart } = cartSlice.actions
export default cartSlice.reducer