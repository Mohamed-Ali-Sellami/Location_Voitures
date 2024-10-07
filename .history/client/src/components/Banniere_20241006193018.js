import React from 'react'
import './styles/Banniere.css'
import image from './images/faza1.webp'
const Banniere = () => {
  return (
    <div>
      <div class="car-imageb">
            <img src={image} alt="Voiture de location"/>
            
            
            <div class="banner">
            <h1>Freedom to Drive, Wherever!</h1>
      <div class="search-container">
        <input className='inputbanner' type="text" placeholder="Rechercher..." />
        <button>
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>


        </div>
       
    </div>
  )
}

export default Banniere
