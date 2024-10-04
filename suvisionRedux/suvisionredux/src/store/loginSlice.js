import {createSlice} from '@reduxjs/toolkit'

 export const loginSlice=createSlice({
    name:'login',
    initialState:{
        username:'',
        password:''
    },
    reducers:{
        authenticate:(state,action)=>{
            console.log(action.payload)
            if(action.payload[0]==='Akhil' && action.payload[1]==='akhil123'){
                console.log('user loggedIn')
            }else{
                console.warn('Incorrect username and password')
            }
        }
    }
})

export const {authenticate}=loginSlice.actions
export default loginSlice.reducer