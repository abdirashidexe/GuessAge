import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Item from './components/Item'

function App() {
  const [size, setSize] = useState("1")
  const [dogData, setDogData] = useState();

  console.log("test App working 2")

  useEffect(() => {
    console.log("ran something")
    fetch(`https://dogapi.dog/api/v2/breeds?page[size]=${size}`)
      .then(response => { response.json(); console.log(response) })
      .then(data => {
        console.log("test", data)
        console.log(data.data[0].attributes.name)
        setDogData(data.data[0].attributes)
      })
  }, []);

  console.log(dogData)

  return (
    <>
      <Header />
      <div>{dogData.name}</div>
      <Footer />
    </>
  )
}

export default App
