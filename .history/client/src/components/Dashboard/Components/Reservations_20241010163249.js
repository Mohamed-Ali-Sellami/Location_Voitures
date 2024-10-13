import React, { useState } from 'react'
import AddReservation from './AddReservation';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

const Reservations = () => {

const [showsecond, setshowsecond] = useState(false);
const rentcar = useSelector((store) => store.car?.car);
const carnews=[];

if (Array.isArray(rentcar)) { // Check if rentcar is an array
  rentcar.forEach((el) => {
    if (el?.reservation.length>0)
      {
      carnews.push(el?.reservation); // Add el to carnews if el.reservation is an array
    }
  });
}
console.log(carnews)


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
                {/* <th>Voitures Réservées</th> */}
                <th>startDate</th>
                <th>endDate</th>
                <th>Total Price</th>
            </tr>
        </thead>
        <tbody>
        {carnews?.map((res) => (
          
            <tr>
                <td data-label="Utilisateur">{res.userId}</td>
                {/* <td data-label="Voiture Réservée">Renault Clio 3</td> */}
                <td data-label="stardate">{res.startDate}</td>
                <td data-label="enddate">{res. endDate}</td>
                <td data-label="totalprice">{res.totalPrice}</td>
            </tr>
        ))} 
        </tbody>
    </table>
</div>
  
  
   </div>


    </div>
  )
}

export default Reservations
