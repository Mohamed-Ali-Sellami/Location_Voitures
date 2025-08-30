import React from 'react'
import './styles/Voitures.css'
import { useSelector } from 'react-redux'
import Cart from './Cart'
import Navbarpages from './Navbarpages'


const Voitures = () => {
  
const allcars=useSelector((store)=>store.car?.car)
console.log("voila les cars",allcars)

  return (
    <>
    <Navbarpages/>
    <div>

      <div className='boxcarone'>
      <h1 className='titlecars'>Nos Voitures a vos choix</h1>
      <p>"Prenez la route de la liberté avec Sellami Cars, votre partenaire de confiance pour chaque voyage." </p>
      </div>


      
    <div className='contentcars'>
      <div className='boxcars'>
      {allcars?.map((el)=><Cart data={el}/>   )}    
      
      </div>
      </div>
    </div>
    </>
  )
}

export default Voitures

