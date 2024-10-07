import React from 'react'

const Taarifs = () => {
  return (
    <div>

<div className='bodytaarifs'>
    <div className="headertaarifs"><headertaarifs>
        <h1>Nos Tarifs de Location</h1>
    </headertaarifs>
    <main>
        <div className="tarif-container">
            <div className="tarif-card">
                <h3>Économique</h3>
                <p className="pricetaarifs">À partir de 30€/jour</p>
                <p>Idéal pour les courts trajets en ville</p>
                <ul>
                    <li>Assurance de base incluse</li>
                    <li>Kilométrage limité</li>
                </ul>
            </div>
            <div className="tarif-card">
                <h3>Confort</h3>
                <p className="pricetaarifs">À partir de 50€/jour</p>
                <p>Parfait pour les voyages en famille</p>
                <ul>
                    <li>Assurance tous risques</li>
                    <li>Kilométrage illimité</li>
                </ul>
            </div>
            <div className="tarif-card">
                <h3>Luxe</h3>
                <p className="pricetaarifs">À partir de 80€/jour</p>
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
