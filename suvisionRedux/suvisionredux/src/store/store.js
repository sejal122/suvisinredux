import {combineReducers, configureStore} from '@reduxjs/toolkit'
import counterReducer from '../store/counterSlice'
import getdataReducer from '../store/getdataSlice'
import loginReducer from '../store/loginSlice'
import deleteReducer from '../store/deleteSlice'
import updateReducer from '../store/updateSlice'
export default configureStore({
    reducer:{
        counter:counterReducer,
         getdata:getdataReducer,
         login:loginReducer,
         delete:deleteReducer,
         update:updateReducer
    },
})