import React from 'react'
import './styles/Reservations.css'
const Reservation = () => {
  return (
    <div>
      
<h1 className='titlereservation'>Reserver votre voiture</h1>


<form>
             <h3> Name and last name </h3>
            <input type="text" placeholder="Name & Last Name" />
            <h3> Name and last name </h3>
            <input type="text" placeholder="Model Reservé" />
            <h3> Name and last name </h3>
            <input type="date" placeholder="Start Date" />
            <h3> Name and last name </h3>
            <input type="date" placeholder="end Date" />
            <input type="text" placeholder="Total Price" />
            <button type="submit" className='confirmerreservation'>Confirmer</button>
        </form>


</div>



    
  )
}

export default Reservation
