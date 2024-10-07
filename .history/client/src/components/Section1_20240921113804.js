import React from 'react'
import './styles/Section1.css'
import image1 from './images/scoda-fabia.png'
import image2 from './images/seat-ibiza.png'
import image3 from './images/cupra-leon.png'
import image4 from './images/skoda-octavia.png'
const Section1 = () => {
  return (
    <div>
      <div class="container">
        <h2>PROMOTIONS</h2>
        <h1>Promotion location de voiture en Tunisie</h1>
        <p class="description">
            Avec <strong>SELLAMI CARs</strong>, effectuez une location voiture tunisie pas cher. Les meilleures promos de location auto tunisie.<br/>
            Réservez votre voiture à l'aéroport en 3 clics.
        </p>
        <div class="car-grid">
            <div class="car-card">
                <img src={image1} alt="SKODA FABIA" class="car-image"/>
                <div class="car-name">SKODA FABIA</div>
                <div class="car-price">
                    <p> Prix comprend : <br/>
                    - Kilométrage illimité<br/>
                           - Assurance au tiers<br/>
                           - Surcharge Aéroport/Gare<br/>
                           - Caution : 20TND </p>
                    <p class="price-label">Prix à partir de</p>
                    <p class="price">100 TND<span>/jour</span></p>
                    <button class="reservation-btn"> RÉSERVATION</button>
                </div>
            </div>
            <div class="car-card">
                <img src={image2} alt="VOLKSWAGEN POLO" class="car-image"/>
                <div class="car-name">SEAT IBIZA</div>
                <div class="car-price">
                <p> Prix comprend : <br/>
                - Kilométrage illimité<br/>
                           - Assurance au tiers<br/>
                           - Surcharge Aéroport/Gare<br/>
                           - Caution : 20 TND </p>
                    <p class="price-label">Prix à partir de</p>
                    <p class="price">80 TND<span>/jour</span></p>
                    <button class="reservation-btn"> RÉSERVATION</button>
                </div>
            </div>
            <div class="car-card">
                <img src={image3} alt="cupra leon" class="car-image"/>
                <div class="car-name">CUPRA LEON</div>
                <div class="car-price">
                <p> Prix comprend : <br/>
                           - Kilométrage illimité<br/>
                           - Assurance au tiers<br/>
                           - Surcharge Aéroport/Gare<br/>
                           - Caution : 50 TND </p>
                    <p class="price-label">Prix à partir de</p>
                    <p class="price">90 TND<span>/jour</span></p>
                    <button class="reservation-btn"> RÉSERVATION</button>
                </div>
            </div>
            <div class="car-card">
                <img src={image4} alt="SKODA OCTAVIA" class="car-image"/>
                <div class="car-name">SKODA OCTAVIA</div>
                <div class="car-price">
                <p> Prix comprend : <br/>
                           - Kilométrage illimité<br/>
                           - Assurance au tiers<br/>
                           - Surcharge Aéroport/Gare<br/>
                           - Caution : 450 € </p>
                    <p class="price-label">Prix à partir de</p>
                    <p class="price">120TND<span>/jour</span></p>
                    <button class="reservation-btn"> RÉSERVATION</button>
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Section1
