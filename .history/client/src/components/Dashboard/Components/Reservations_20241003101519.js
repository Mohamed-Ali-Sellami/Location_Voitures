import React, { useState } from 'react'
import AddReservation from './AddReservation';

const Reservations = () => {

const [showsecond, setshowsecond] = useState(false);

  return (
    <div className=" box-gestionuser">
      <Sidebar/>
      <h1>  Reservations</h1>
<div>

<button   className='btnaddcar' onClick={() => setshowsecond(!showsecond)}> ADD Reservation</button>
  {showsecond ? (
            <div >
              <AddReservation setshowsecond={setshowsecond} />{" "}
            </div>
          ) : null}

<div className='bodygestionuser'>
    <table>
        <thead className='tetetable'>
            <tr>
                <th>Users</th>
                <th>Voitures Réservées</th>
                <th>startDate</th>
                <th>endDate</th>
                <th>Total Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-label="Utilisateur">Dali Sellami</td>
                <td data-label="Voiture Réservée">Renault Clio 3</td>
                <td data-label="stardate">1-10-2024</td>
                <td data-label="enddate">3-10-2024</td>
                <td data-label="totalprice">220 TND</td>
            </tr>
            <tr>
            <td data-label="Utilisateur">michel jakson</td>
                <td data-label="Voiture Réservée">Peugeot 308</td>
                <td data-label="stardate">1-10-2024</td>
                <td data-label="enddate">3-10-2024</td>
                <td data-label="totalprice">220 TND</td>
            </tr>
            <tr>
            <td data-label="Utilisateur">med sel</td>
                <td data-label="Voiture Réservée">Seat Ibiza</td>
                <td data-label="stardate">1-10-2024</td>
                <td data-label="enddate">5-10-2024</td>
                <td data-label="totalprice">400 TND</td>
            </tr>
        </tbody>
    </table>
</div>
  
  
   </div>


    </div>
  )
}

export default Reservations
