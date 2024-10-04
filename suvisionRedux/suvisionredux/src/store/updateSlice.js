import { createSlice } from "@reduxjs/toolkit";
export  const  updateSlice= createSlice({
    name:'update',
    initialState:{
        isUpdated:false,
        updatedData:[]
    },
    reducers:{

        updateData:async(state,action)=>{
            console.log('in store')
            console.log(action.payload)
            await fetch(`http://localhost:3000/products/${action.payload[0]}`,{
                            method:'PATCH',
                            body:JSON.stringify(action.payload[1])
                        })
                     
                        .then((data)=>{
                            console.log(data)
                            // state.deletedData=data;
                            // state.isDelete=true;
                        }).catch((error)=>{
                            console.log(error)
                            
                        })
        }
    }
})

export default updateSlice.reducer;

export const {updateData} = updateSlice.actions