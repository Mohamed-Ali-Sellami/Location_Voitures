import React from 'react'
import './styles/Reservations.css'
const Reservation = () => {
  return (
    <div>
      
<h1>Reserver votre voiture</h1>


<form>
            <label for="model">Modèle</label>
            <input type="text" id="model" name="model" required>
            
            <label for="modelReserve">Modèle Réservé</label>
            <input type="text" id="modelReserve" name="modelReserve" required>
            
            <label for="startDate">Date de début</label>
            <input type="date" id="startDate" name="startDate" required>
            
            <label for="endDate">Date de fin</label>
            <input type="date" id="endDate" name="endDate" required>
            
            <label for="totalPrice">Prix total</label>
            <input type="text" id="totalPrice" name="totalPrice" required>
            
            <button type="submit">Confirmer</button>
        </form>

    </div>
  )
}

export default Reservation
