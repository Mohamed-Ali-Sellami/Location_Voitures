import React, { useState } from 'react'
import AddReservation from './AddReservation';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

const Reservations = () => {

const [showsecond, setshowsecond] = useState(false);
const rentcar = useSelector((store) => store.car?.car);
const [carnews, setcarnews] = useState([]); // Initialize as an empty array

useEffect(() => {
  if (rentcar && Array.isArray(rentcar)) {
    const reservations = rentcar.reduce((acc, el) => {
      if (el?.reservation?.length > 0) {
        acc.push(...el.reservation); // Add reservations to the accumulator
      }
      return acc;
    }, []);
    setcarnews(reservations); // Update state once with all the reservations
  }
}, [rentcar]);


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
        {carnews?.map((el) => (
            <tr>
                <td data-label="Utilisateur">{el?.userId}</td>
                {/* <td data-label="Voiture Réservée">Renault Clio 3</td> */}
                <td data-label="stardate">{el?.startDate}</td>
                <td data-label="enddate">{el?. endDate}</td>
                <td data-label="totalprice">{el?.totalPrice}</td>
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
