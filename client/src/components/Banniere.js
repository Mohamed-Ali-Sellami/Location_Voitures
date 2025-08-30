import React, { useState } from 'react'
import './styles/Banniere.css'
import image from './images/f1.png'

const Banniere = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // Logique de recherche ici
      console.log('Recherche:', searchValue);
      // Vous pouvez ajouter votre logique de recherche ou navigation ici
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div>
      <div className="car-imageb">
        <img src={image} alt="Voiture de location"/>
        
        <div className="banner">
          <h1>Your Ride, Your Way.</h1>
          
          <form className="search-container" onSubmit={handleSearch}>
            <input 
              className='inputbanner' 
              type="text" 
              placeholder=" Rechercher un véhicule..." 
              value={searchValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              aria-label="Champ de recherche"
            />
            <button type="submit" aria-label="Lancer la recherche">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Banniere