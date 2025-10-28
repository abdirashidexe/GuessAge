import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Item from './components/Item'

function App() {
  const [size, setSize] = useState("1")
  const [dogData, sitDog] = useState();
  
  console.log("test App working")
  
  useEffect(()=>{
    fetch(`https://dogapi.dog/api/v2/breeds?page[size]=${size}`)
  .then(response => response.json())
  .then(data => {
    sitDog(data)
    console.log(data)
  });
  },[size]);

  console.log("test App working Fetch")

  return (
    <>
      <Header />
      <Item attributes = {dogData.data.attributes}/>
      <Footer />
    </>
  )
}

export default App
