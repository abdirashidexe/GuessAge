import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Item from './components/Item'

function App() {
  const [size, setSize] = useState("1")
  const [dogData, setDogData] = useState();
  
  console.log("test App working")
  
  useEffect(()=>{
    fetch(`https://dogapi.dog/api/v2/breeds?page[size]=${size}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.data[0].attributes.name)
    setDogData(data.data[0].attributes.name)
  });
  },[]);

  console.log(dogData)

  return (
    <>
      <Header />
      <Item data = {dogData}/>
      <Footer />
    </>
  )
}

export default App
