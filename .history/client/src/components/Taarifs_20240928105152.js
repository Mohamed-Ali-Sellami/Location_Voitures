import React from 'react'

const Taarifs = () => {
  return (
    <div>

<div className='bodytaarifs'>
    <header>
        <h1>Nos Tarifs de Location</h1>
    </header>
    <main>
        <div class="tarif-container">
            <div class="tarif-card">
                <h3>Économique</h3>
                <p class="price">À partir de 30€/jour</p>
                <p>Idéal pour les courts trajets en ville</p>
                <ul>
                    <li>Assurance de base incluse</li>
                    <li>Kilométrage limité</li>
                </ul>
            </div>
            <div class="tarif-card">
                <h3>Confort</h3>
                <p class="price">À partir de 50€/jour</p>
                <p>Parfait pour les voyages en famille</p>
                <ul>
                    <li>Assurance tous risques</li>
                    <li>Kilométrage illimité</li>
                </ul>
            </div>
            <div class="tarif-card">
                <h3>Luxe</h3>
                <p class="price">À partir de 80€/jour</p>
                <p>Pour une expérience de conduite premium</p>
                <ul>
                    <li>Assurance tous risques</li>
                    <li>Kilométrage illimité</li>
                    <li>GPS inclus</li>
                </ul>
            </div>
        </div>
    </main>
</div>
      
    </div>
  )
}

export default Taarifs
