import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [size, setSize] = useState("1")
  useEffect(()=>{
    fetch(`https://dogapi.dog/api/v2/breeds?page[size]=${size}`)
  .then(response => response.json())
  .then(data => console.log(data.data));
  },[size]);

  return (
    <>
      
    </>
  )
}

export default App
