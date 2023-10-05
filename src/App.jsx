import { useState, useCallback } from 'react'



function App() {
  const [length, serLength] = useState(8)
const [numberAllowed, SetNumberAllowed] = useState(false);
const [charAllowed, setcharAllowed] = useState(false)
const[password, setPassword] = useState("")

const passwordGenerator = useCallback(()=> {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if (numberAllowed) str +="0123456789"
  if (charAllowed) str += "!@#$%^&_[]{}`~"
  
  for(let i = 1; i <=Array.length; i++){
    let char =Math.floor(Math.random()* str.length + 1)
    pass = str.charAct(char)

  }
  setPassword(pass)

},[length, numberAllowed, charAllowed, setPassword])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md
     rounded-lg px-4 my-8 text-orange-500 br-gray-700'>

      <h1 className='text-white text-center'>Password Generator </h1>

      <div className='className = "flex shadow rounded-lg overflow-hidden mb-4"'>
       
      <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
         readOnly
      />
      <button>Copy</button>
        </div>
        <div className = 'flex text-sm gap-x-2'>
          <div className = 'flex items-center gap-x-1'></div>
            <input 
            type="range"
            min={6}
            max={100}
            className='cursor-pointer'/>
            onchange={(e)=> {SetLength(e.target.value)}}/>
            <label>length</label>
          <label>length: {length}</label>

          </div>
          <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              SetNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlfor="numberInput">Numbers</label>
        </div>
        
        </ div>
     
    </>
  )
}

export default App
