import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles/Profil.css"

const Profil = () => {
  const user = useSelector((state) => state.user.user);
  const rentcar = useSelector((store) => store.car?.car);
  const carnews = []; // Assuming you are trying to accumulate results


if (Array.isArray(rentcar)) { // Check if rentcar is an array
  rentcar.forEach((el) => {
    if (Array.isArray(el?.reservation)) { // Check if reservation is an array
      el.reservation.forEach((data) => {
        if (data?.userId === user?._id) {
          carnews.push(el); // Add to the carnews array
        }
      });
    }
  });
}


  console.log(carnews);
 


  return (
    <div className="container-profil">
      <h1 className="">Hello Mr. {user ? `${user.name} ${user.lastname}` : 'Loading...'}</h1>
      {/* <>
      {user?user.image : <p>Loading ...</p>}
      </> */}
      {carnews && carnews.length > 0 ? (
  carnews.map((data, index) => (

    <div key={index} className="details-profil">
      <h2>Détails de votre réservation :</h2>
      <p><strong>Voiture réservée : </strong>{data.model}</p>
      <p><strong>Matriculation : </strong>{data.matriculation}</p>
      {data.reservation?.map((res, idx) => (
        <div key={idx}>
          <p><strong>Date de début : </strong>{res?.startDate}</p>
          <p><strong>Date de fin :</strong> {res?.endDate}</p>
          <p><strong>Statut : </strong>{res?.status}</p>
          <p><strong>Prix total : </strong>{res?.totalPrice} TND</p>
        </div>
      ))}
    </div>
  ))
) : (
  <h2>Aucune réservation</h2>
)}
      
      
    </div>
  );
};

export default Profil;
