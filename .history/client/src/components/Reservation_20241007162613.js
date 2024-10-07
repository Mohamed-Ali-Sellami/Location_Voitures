import React from 'react'
import './styles/Reservations.css'
import { useParams } from 'react-router-dom'
const Reservation = () => {
  const params=useParams
  return (
    <div>
           
<h1 className='titlereservation'>Reserver votre voiture</h1>



<form>
             <h3> Name and last name : </h3>
            <input type="text" placeholder="Name & Last Name" />
            <h3> Model Reservé : </h3>
            <input type="text" placeholder="Model Reservé" />
            <h3> Start Date : </h3>
            <input type="date" placeholder="Start Date" />
            <h3> End Date :</h3>
            <input type="date" placeholder="end Date" />
            <h3>Total Price :</h3>
            <input type="text" placeholder="Total Price" />
            <button type="submit" className='confirmerreservation'>Confirmer</button>
        </form>


</div>



    
  )
}

export default Reservation
