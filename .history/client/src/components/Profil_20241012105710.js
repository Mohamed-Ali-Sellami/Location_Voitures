import React, { useState } from "react";
import { useSelector } from "react-redux";

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
    <div>
      <h1>hello si {user ? user.name : <h1>loading...</h1>}</h1>
      <>
      {}
      </>
      {carnews && carnews.length > 0 ? (
  carnews.map((data, index) => (
    <div key={index}>
      <h2>Détails de votre réservation :</h2>
      <p>Voiture réservée : {data.model}</p>
      <p>Matriculation : {data.matriculation}</p>
      {data.reservation?.map((res, idx) => (
        <div key={idx}>
          <p>Date de début : {res?.startDate}</p>
          <p>Date de fin : {res?.endDate}</p>
          <p>Statut : {res?.status}</p>
          <p>Prix total : {res?.totalPrice} TND</p>
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
