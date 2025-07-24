import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQISTUVWXYZabcdefghijklmnopqrstuvvwxyz"
    
    if (numbersAllowed) str += "0123456789"
    if (charAllowed) str += "#$%&()*+,-./:;<=>?@[]^_`{|}~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass += str.charAt(char)
    }

    setPassword(pass);



  }, [length, numbersAllowed, charAllowed, setPassword])

useEffect(() => {
  passwordGenerator()
}, [length, numbersAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <h1 className=' text-4xl font-bold text-center mt-10 '>Password generator</h1>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg py-4 px-8 my-8 text-white bg-gray-700'>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-500">
          <input
           type="text"
           value={Password}
           className='outline-none w-full py-1 px-3' 
           placeholder='Password'
           readOnly
           
           />

           <button
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
           >Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
             type="range" 
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e) => {setLength(e.target.value)}}
             />
             <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
             type="checkbox" 
             defaultChecked ={numbersAllowed}
             onChange={() => {
              setNumbersAllowed((prev) => !prev)
             }}
             />
             <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
             type="checkbox" 
             defaultChecked ={charAllowed}
             onChange={() => {
              setCharAllowed((prev) => !prev)
             }}
             />
             <label>Character

             </label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
