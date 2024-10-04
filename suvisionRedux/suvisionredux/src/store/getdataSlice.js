import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchmydata=createAsyncThunk("fetchmydata",async ()=>{
  const url='http://localhost:3000/products'

  const response= await fetch(url);
   const data= response.json()
   .then((res)=>{
      console.log(res)
      return res;
  })
  console.log(data)
 return data;
 
})

export const getdataSlice=createSlice({

    name:'getdata',
    initialState:{
        name:'recepie',
        productList:[],
        dataLoaded:false,
        isError:false
    },
    extraReducers:(builder)=>{
      builder.addCase(fetchmydata.pending,(state,action)=>{
          console.log('LOADING...')
      })
      builder.addCase(fetchmydata.rejected,(state,action)=>{
          console.log("Error",action.payload)
          state.dataLoaded=false;
          state.isError=true;
      })
     builder.addCase(fetchmydata.fulfilled,(state,action)=>{
      state.dataLoaded=true;
      state.productList=action.payload
     })
  
  }})




export default getdataSlice.reducer