import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Wine from './Wine'

import './WineList.css'

const WineList = () => {
  const [wines, setWines] = useState(null)

  const getWines = () => {
    axios.get('http://localhost:8000/allWines')
    .then(res => setWines(res.data))
  }

  useEffect(() => getWines(),[])
  
  return wines === null ? "Loading" : (
    <div className='wineList_container'>
      {
        wines.map(wine => <Wine key={wine.id} name={wine.name} region={wine.id_region} year={wine.wine_year}/>)
      }
    </div>
  )
}

export default WineList