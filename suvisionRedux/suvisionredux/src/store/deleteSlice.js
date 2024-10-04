import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const deletedata=createAsyncThunk("deletedata",async ()=>{



// })



export const deleteSlice=createSlice({

    name:'delete',
    initialState:{
        deletedData:[],
        isError:false,
        isDelete:false,
        
    },
    reducers:{
        deletemydata:async(state,action)=>{
            let demmo;
            console.log(action.payload)
            console.log(typeof action.payload)
            console.log(`http://localhost:3000/products
${action.payload}`)
            await fetch(`http://localhost:3000/products/
${action.payload}`,{
                method:'DELETE'
            })
            .then((res)=>res.json())
            .then((data)=>{
                demmo=data
                // state.deletedData=data;
                // state.isDelete=true;
            }).catch((error)=>{
                console.log(error)
                
            })
            console.log()
        }
    }
})

export default deleteSlice.reducer;
export const {deletemydata}=deleteSlice.actions