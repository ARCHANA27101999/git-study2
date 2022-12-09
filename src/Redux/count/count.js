import { createSlice } from "@reduxjs/toolkit"
export const countslice=createSlice ({
    name:"count",
   initialState:{
    value:5
   },
   reducers:{
    increase_count:(state)=>{
        state.value +=1
    },
    decrease_count:(state)=>{
        state.value -=1
    }

   
   }

        

    })
    export const { increase_count,decrease_count} =countslice.actions
    export default countslice.reducer
