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

 

  useEffect(() => {
    fetch(`https://dogapi.dog/api/v2/breeds?page%5Bsize%5D=1`)
      .then(response => response.json())
      .then(resJson => {setDogData(resJson.data[0].attributes)})
  }, []);

  useEffect(()=>{
    if(dogData.name != "" && dogData.life.min >0) setIsDogReceived(true)
  },[dogData])

  
  return (
    <>
      <Header />
      {isDogReceived? <>
      
        <Item data = {dogData} />

  

      </> : null}
      <Footer />
    </>
  )
}

export default App
