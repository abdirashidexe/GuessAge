import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Item from './components/Item'

function App() {
  const [size, setSize] = useState("1")
  const [dogData, setDogData] = useState({
    name: "",
    description: "",
    life: {min: 0, max:0},
    female_weight:{min:0, max:0},
    male_weight:{min:0, max:0}
  });
  const [isDogReceived, setIsDogReceived] = useState(false)
  const [dogImg, setDogImg] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(()=>{
    if(dogData.name != ""){
      fetch(`https://dog.ceo/api/breed/${dogData.name.toLowerCase()}/images/random`)
    .then(response => response.json())
    .then(data => {setDogImg(data.message)})
    }
  },[dogData]);

  useEffect(() => {
    fetch(`https://dogapi.dog/api/v2/breeds?page%5Bsize%5D=1`)
      .then(response => response.json())
      .then(resJson => {setDogData(resJson.data[0].attributes)})
  }, []);

  useEffect(()=>{
    if(dogData.name != "" && dogData.life.min >0) setIsDogReceived(true)
  },[dogData])

  function showNext() {
    
  }
  
  return (
    <>
      <Header />
      {isDogReceived? <>
      
        <Item data = {dogData} dogImg = {dogImg} />

  

      </> : null}
      <button onClick={showNext}>Next</button>
      <Footer />
    </>
  )
}

export default App
