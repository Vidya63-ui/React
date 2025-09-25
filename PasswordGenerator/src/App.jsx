import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (charAllow) {
      str += "!@#$%^&*()_+[]{}|;:,.<>/?";
    }
    if (numAllow) {
      str += "0123456789";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, numAllow, charAllow, generatePassword]);

  const PasswordRef = useRef(null);

  const copyPasswordtoClipboard = useCallback(() => {
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0, 31);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🔐 Password Generator
        </h1>

        {/* Input & Copy */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            value={password}
            className="flex-grow border border-gray-300 rounded-l-lg py-2 px-3 text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Generated password"
            ref={PasswordRef}
            readOnly
          />
          <button
            onClick={copyPasswordtoClipboard}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg transition-all duration-300"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          {/* Length Slider */}
          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium">
              Length: <span className="font-bold">{length}</span>
            </label>
            <input
              type="range"
              min={6}
              max={32}
              value={length}
              className="cursor-pointer w-2/3 accent-purple-600"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          {/* Number Option */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numAllow}
              id="numInput"
              className="w-4 h-4 accent-purple-600 cursor-pointer"
              onChange={() => setNumAllow((prev) => !prev)}
            />
            <label htmlFor="numInput" className="text-gray-700">
              Include Numbers
            </label>
          </div>

          {/* Special Characters Option */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllow}
              id="charInput"
              className="w-4 h-4 accent-purple-600 cursor-pointer"
              onChange={() => setCharAllow((prev) => !prev)}
            />
            <label htmlFor="charInput" className="text-gray-700">
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


// import { useState ,useCallback,useEffect,useRef} from 'react'

// import './App.css'

// function App() {
//   const [length, setLength] = useState(8)
//   const [numAllow, setNumAllow] = useState(false)
//   const [charAllow, setCharAllow] = useState(false)
//   const [password, setPassword] = useState("")

//   const generatePassword = useCallback(() => {
//     let pass=""
//     let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     if(charAllow){
//       str += "!@#$%^&*()_+[]{}|;:,.<>/?"
//     }
//     if(numAllow){
//       str += "0123456789"
//     }

//     for(let i=1; i<=length; i++){
//       let char = Math.floor(Math.random() * str.length +1)
//       pass += str.charAt(char)
//     }

//     setPassword(pass)
//   }, [length, numAllow, charAllow, setPassword]) 
//   //  for optimization setpass

//   useEffect(()=>{generatePassword()},[length,numAllow,charAllow,generatePassword])
//   const PasswordRef = useRef(null);

//   const copyPasswordtoClipboard = useCallback(() =>{
//     PasswordRef.current?.select()
//     PasswordRef.current?.setSelectionRange(0,20)
//     window.navigator.clipboard.writeText(password)} ,[password] )


//   return (
//     <>
//       <div className='max-w-md w-full mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-grey-500'>
//         <h1 className='text-4xl text-centre text-white'>Password Generator</h1>
//         <div className='flex shadow rounded-lg overflow-hidden mb-4'>
//           <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password'
//           ref={PasswordRef} readOnly />
//           <button onClick={copyPasswordtoClipboard}
//           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
//         </div>
//         <div className='flex text-sm gap-x-2'>
//           <div className='flex item-centre gap-x-1'>
//             <input type="range" min={6} max={100} value={length} className='cursor-pointer'
//             onChange={(e)=>{setLength(e.target.value)}} />
//             <label >Length : {length}</label>
//           </div>
//           <div className='flex item-centre gap-x-1'>
//             <input type="checkbox" defaultChecked={numAllow} id="numInput"
//             onChange={() => {setNumAllow((prev) => !prev);}} />
//             <label htmlFor="numInput">Number</label>
//           </div>
//           <div className='flex item-centre gap-x-1'>
//             <input type="checkbox" defaultChecked={charAllow} id="charInput"
//             onChange={() => {setCharAllow((prev) => !prev);}} />
//             <label htmlFor="charInput">Charecters</label>
//           </div>
//         </div>
//       </div>
      
//     </>
//   )
// }

// export default App
