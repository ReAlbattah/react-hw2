import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
function App() {
  
  const [fNum,setFNum] =useState("");
  const [sNum,setSNum] =useState("");
  const [result,setResult]=useState("");

  
  const addClick= (e)=>{
   
    setResult(parseInt(fNum)+parseInt(sNum));
  
  }

  const minClick= (e)=>{
   
    setResult(parseInt(fNum)-parseInt(sNum));
  
  }

  const multClick= (e)=>{
   
    setResult(parseInt(fNum)*parseInt(sNum));
  
  }

  const divClick= (e)=>{
   
    setResult(parseInt(fNum)/parseInt(sNum));
  
  }

  const remClick= (e)=>{
   
    setResult(parseInt(fNum)+parseInt(sNum));
  
  }
 console.log(result);
 
  return (
    <>
   
    <div className="App">
      <div>
      <h1 >Calculator </h1>
      <div class=" p-3">
  <input onChange={(e)=>setFNum(e.target.value)} value={fNum} type="text" className="form-control" placeholder="Enter First Number" />
  <br></br>
  <input onChange={(e)=>setSNum(e.target.value)} value={sNum} type="text" className="form-control" placeholder="Enter Second Number" />
      
      <div className="p-3 m-3 center">
      <button onClick={addClick}  type="button" className="btn btn-outline-dark">+</button>
      <button onClick={minClick} type="button" className="btn btn-outline-dark">-</button>
      <button onClick={multClick} type="button" className="btn btn-outline-dark">*</button>
      <button onClick={divClick} type="button" className="btn btn-outline-dark">/</button>
      <button onClick={remClick} type="button" className="btn btn-outline-dark">%</button>
      </div>

      <div class=" p-3 ">
      <input onChange={setResult} value={result} type="text" className="form-control" readOnly  {...result}/>
      </div>

      </div>
      </div>

      

    </div>
    </>
  );
}

export default App;
