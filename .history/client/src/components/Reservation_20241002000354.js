import React from 'react'
import './styles/Reservations.css'
const Reservation = () => {
  return (
    <div>
      
<h1>Reserver votre voiture</h1>

<div>
<form>
            <input type="text" placeholder="model" />
            <input type="text" placeholder="Model Reservé" />
            <input type="date" placeholder="Start Date" required>
            <input type="date" placeholder="end Date" required>
            <input type="number" placeholder="Total Price" required>
            <button type="submit">Confirmer</button>
        </form>
</div>



    </div>
  )
}

export default Reservation
