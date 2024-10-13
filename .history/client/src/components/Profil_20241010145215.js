import React from "react";
import { useSelector } from "react-redux";

const Profil = () => {
  const user = useSelector((state) => state.user.user);
  const rentcar = useSelector((store) => store.car?.car);
  console.log(rentcar)
  const reservationuser=()=>{
    
  }

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
