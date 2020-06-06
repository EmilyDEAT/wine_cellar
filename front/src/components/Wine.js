import React from 'react'

import wineRed from '../images/wine_red.png'

import './Wine.css'

const Wine = ({name, region, year}) => {
  return(
    <div className='wine_container'>
      <img src={wineRed}/>
      <p>{name}</p>
      <p>{region}</p>
      <p>{year}</p>
    </div>
  )
}

export default Wine