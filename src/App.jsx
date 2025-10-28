import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("Bob")
  useEffect(()=>{
    fetch(`https://api.agify.io?name=${name}`)
  },[name]);

  return (
    <>
      
    </>
  )
}

export default App
