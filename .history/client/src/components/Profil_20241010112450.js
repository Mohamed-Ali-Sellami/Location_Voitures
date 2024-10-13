import React from "react";
import { useSelector } from "react-redux";

const Profil = () => {
  const user = useSelector((state) => state.user.user);
  const rentcar = useSelector((store) => store.car?.car,.reservation);

  return (
    <div>
      <h1>hello si {user ? user.name : <h1>loading...</h1>}</h1>

      {rentcar ? (
        <div>
          <h2>Détails de votre réservation :</h2>
          <p>Voiture réservée : {rentcar.model}</p>
          <p>Matriculation : {rentcar.matriculation}</p>
          <p>Date de début : {rentcar.startDate}</p>
          <p>Date de fin : {rentcar.endDate}</p>
          <p>Statut : {rentcar.status}</p>
          <p>Prix total : {rentcar.totalPrice} TND</p>
        </div>
      ) : (
        <p>Aucune voiture réservée pour le moment.</p>
      )}
    </div>
  );
};

export default Profil;
