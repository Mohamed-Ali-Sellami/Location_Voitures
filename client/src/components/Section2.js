import React from 'react'
import './styles/Section2.css'
import img1 from './images/longueduree.jpg'
import img2 from './images/choffeur.jpg'
import img3 from './images/siegebebe.jpg'

const Section2 = () => {
  return (
    <div class="section2">

<h1><span>Nos Produits</span> et services</h1>
    <p class="subtitle">Pour vos locations de voitures en Tunisie, SELLAMI cars vous propose plusieurs produits et services adaptés à vos besoins.</p>
    
    <div class="products-grid">
        <div class="product-card">
            <img src={img1} alt="Location Longue Durée" class="product-image"/>
            <div class="product-info">
                <h3>Location Longue Durée</h3>
                <p>Location voiture longue durée . Assurances tous risques et entretien inclus.</p>
            </div>
        </div>
        
        <div class="product-card">
            <img src={img2} alt="Location voiture avec chauffeur" class="product-image"/>
            <div class="product-info">
                <h3>Location voiture avec chauffeur</h3>
                <p>Location voiture avec un chauffeur à disposition  <br/> <span class="price">400 TND /Jour</span>.</p>
            </div>
        </div>
        
        <div class="product-card">
            <img src={img3} alt="GPS" class="product-image"/>
            <div class="product-info">
                <h3>Siége Bébé</h3>
                <p>Protégez vos petits trésors, où que vous alliez. <br/> <span class="price">20 TND /Jour</span></p>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Section2
