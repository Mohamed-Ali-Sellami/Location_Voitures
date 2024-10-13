import React, { useState } from "react";
import { useSelector } from "react-redux";

const Profil = () => {
  const user = useSelector((state) => state.user.user);
  const rentcar = useSelector((store) => store.car?.car);
  const carnews = []; // Assuming you are trying to accumulate results

  // rentcar.forEach((el) => {
  //   el.reservation.forEach((data) => {
  //     if (data.userId === user._id) {
  //       carnews.push(el); // Add to the carnews array
  //     }
  //   });
  // });
  // Assuming you are trying to accumulate results

if (Array.isArray(rentcar)) { // Check if rentcar is an array
  rentcar.forEach((el) => {
    if (Array.isArray(el.reservation)) { // Check if reservation is an array
      el.reservation.forEach((data) => {
        if (data.userId === user._id) {
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

      {rentcar?.map((data) => (
 
        <div>
          <h2>Détails de votre réservation :</h2>
          <p>Voiture réservée : {data.model}</p>
          <p>Matriculation : {data.matriculation}</p>
          <p>Date de début : {data.startDate}</p>
          <p>Date de fin : {data.endDate}</p>
          <p>Statut : {data.status}</p>
          <p>Prix total : {data.totalPrice} TND</p>
        </div>
      ) )}:
      
      (
        <p>Aucune voiture réservée pour le moment.</p>
      )
    </div>
  );
};

export default Profil;
