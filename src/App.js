import React from 'react'
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber} from './actions/index';

function App() {
  const myState=useSelector((e)=>e.chgNumber);
  const dispatch=useDispatch();
  return (
  <>
  <div className="container">
    <h1 className='text-success'>Increment/Decrement counter</h1>
    <h4 className='text-warning'>Using React and Redux</h4>
    <div className="quantity">
      <button onClick={()=>dispatch(decNumber(1))} className="btn btn-danger"><span>-</span></button>
      <input type="text" className="input mt-3" value={myState} />
     <button onClick={()=>dispatch(incNumber(4))} className="btn btn-danger"><span>+</span></button>
    </div>
  </div>
  </>
  )
}

export default App
