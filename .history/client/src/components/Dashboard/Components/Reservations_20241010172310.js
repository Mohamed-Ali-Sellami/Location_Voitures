import React, { useEffect, useState } from 'react'
import AddReservation from './AddReservation';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

const Reservations = () => {

const [showsecond, setshowsecond] = useState(false);
const rentcar = useSelector((store) => store.car?.car);
const users = useSelector((store) => store.client?.client);
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
const [tooltip, setTooltip] = useState({ visible: false, info: ''});
console.log(tooltip)
const handleMouseEnter = (info) => {
  users.filter((el) => el._id === info)?)
  setTooltip({ visible: true, info});
};

const handleMouseLeave = () => {
  setTooltip({ visible: false, info: ''});
};

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
  {carnews?.length > 0 ? (
    carnews.map((el, index) => (
      <tr key={index}>

        <td data-label="Utilisateur"  onMouseEnter={(e) => handleMouseEnter(`${el?.userId}`)}
      onMouseLeave={handleMouseLeave}>{el?.userId}</td>
        {/* <td data-label="Voiture Réservée">Renault Clio 3</td> */}
        <td data-label="stardate" className='tdadmin'>{el?.startDate}</td>
        <td data-label="enddate" className='tdadmin'>{el?.endDate}</td>
        <td data-label="totalprice" className='tdadmin'>{el?.totalPrice}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={4} style={{ textAlign: "center" }}>No reservations found</td>
    </tr>
  )}
          {tooltip.visible && (
        <div
        >
          {tooltip.info}
        </div>
      )}
</tbody>
    </table>
    
</div>
  
  
   </div>


    </div>
  )
}

export default Reservations
