import { use, useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("Bob")
  useEffect(()=>{
    
  },[name]);

  return (
    <>
      
    </>
  )
}

export default App
