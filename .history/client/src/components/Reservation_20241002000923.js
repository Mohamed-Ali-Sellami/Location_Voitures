import React from 'react'
import './styles/Reservations.css'
const Reservation = () => {
  return (
    <div>
      
<h1 className='titlereservation'>Reserver votre voiture</h1>


<form>
            <input type="text" placeholder="model" />
            <input type="text" placeholder="Model Reservé" />
            <input type="date" placeholder="Start Date" />
            <input type="date" placeholder="end Date" />
            <input type="number" placeholder="Total Price" />
            <button type="submit" className='confirmerreservation'>Confirmer</button>
        </form>


</div>



    
  )
}

export default Reservation
