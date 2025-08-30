import React from 'react'
import './styles/Taarifs.css'
import Navbarpages from './Navbarpages'

const Taarifs = () => {
  return (
    <div>
<Navbarpages/>
<div className='bodytaarifs'>
    <div className="headertaarifs">
        <h1>Nos Tarifs de Location</h1>
    </div>
    <div className="contenttaarifs">
        <div className="tarif-container">
            <div className="tarif-card">
                <h3>Économique</h3>
                <p className="pricetaarifs">À partir de 100 TND/jour</p>
                <p>Idéal pour les courts trajets en ville</p>
                <ul>
                    <li>Assurance de base incluse</li>
                    <li>Kilométrage limité</li>
                </ul>
            </div>
            <div className="tarif-card">
                <h3>Confort</h3>
                <p className="pricetaarifs">À partir de 200 TND/jour</p>
                <p>Parfait pour les voyages en famille</p>
                <ul>
                    <li>Assurance tous risques</li>
                    <li>Kilométrage illimité</li>
                </ul>
            </div>
            <div className="tarif-card">
                <h3>Luxe</h3>
                <p className="pricetaarifs">À partir de 350 TND/jour</p>
                <p>Pour une expérience de conduite premium</p>
                <ul>
                    <li>Assurance tous risques</li>
                    <li>Kilométrage illimité</li>
                    <li>GPS inclus</li>
                </ul>
            </div>
        </div>
    </div>
</div>
      
    </div>
  )
}

export default Taarifs
