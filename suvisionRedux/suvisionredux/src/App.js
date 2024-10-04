import logo from './logo.svg';
import './App.css';

import {useSelector,useDispatch} from 'react-redux'
// import {increment,decrement} from './store/counterSlice'
import Viewdata from './viewdata';

import UserLogin from './components/userLogin';
import { Routes,Route } from 'react-router-dom';
import UpdateData from './components/updateData';
function App() {
const mystate=useSelector((state)=>state)
console.log(mystate)
const dispatch =useDispatch()
//console.log(mystate)
  return (
    <div className="App">
     <h1>Redux tutorial!</h1>
     <Routes>
     <Route path='/' Component={Viewdata}/>
     <Route path='/update/:id' Component={UpdateData}/>
     </Routes>
     {/* <UserLogin/> */}
      {/* <h2>Count is {mystate.count}</h2>
      <h3>Name is {mystate.name}</h3>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button> */}

      {/* <Viewdata/> */}

<hr/>

     
    </div>
  );
}

export default App;
