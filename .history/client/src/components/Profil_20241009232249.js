// import React from "react";
// import { useSelector } from "react-redux";

// const Profil = () => {
//   const user = useSelector((state) => state.user.user);
//   const rentcar = useSelector((store) => store.car?.car?.reservation);

//   return (
//     <div>
//       <h1>hello si {user ? user.name : <h1>loading...</h1>}</h1>

//       {rentcar ? (
//         <div>
//           <h2>Détails de votre réservation :</h2>
//           <p>Voiture réservée : {rentcar.model}</p>
//           <p>Matriculation : {rentcar.matriculation}</p>
//           <p>Date de début : {rentcar.startDate}</p>
//           <p>Date de fin : {rentcar.endDate}</p>
//           <p>Statut : {rentcar.status}</p>
//           <p>Prix total : {rentcar.totalPrice} €</p>
//         </div>
//       ) : (
//         <p>Aucune voiture réservée pour le moment.</p>
//       )}
//     </div>
//   );
// };

// export default Profil;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Profil = () => {
  const user = useSelector((state) => state.user?.user);
  const rentcar = useSelector((store) => store.car?.car?.reservation);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("État actuel de l'utilisateur:", user);
    console.log("État actuel de la réservation:", rentcar);
    
    // Si nécessaire, déclenchez ici une action pour charger les données de réservation
    // dispatch(loadReservationData(user.id));
  }, [user, rentcar, dispatch]);

  const renderReservationDetails = () => {
    if (!rentcar) {
      console.log("Aucune donnée de réservation trouvée");
      return <p>Aucune voiture réservée pour le moment.</p>;
    }

    console.log("Données de réservation trouvées:", rentcar);
    return (
      <div>
        <h2>Détails de votre réservation :</h2>
        <p>Voiture réservée : {rentcar.model || 'Non spécifié'}</p>
        <p>Matriculation : {rentcar.matriculation || 'Non spécifié'}</p>
        <p>Date de début : {rentcar.startDate || 'Non spécifié'}</p>
        <p>Date de fin : {rentcar.endDate || 'Non spécifié'}</p>
        <p>Statut : {rentcar.status || 'Non spécifié'}</p>
        <p>Prix total : {rentcar.totalPrice ? `${rentcar.totalPrice} €` : 'Non spécifié'}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Bonjour {user ? user.name : "chargement..."}</h1>
      {renderReservationDetails()}
    </div>
  );
};

export default Profil;