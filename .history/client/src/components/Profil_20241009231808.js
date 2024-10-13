import React from "react";
import { useSelector } from "react-redux";

const Profil = () => {
  const user = useSelector((state) => state.user.user);
  const rentcar = useSelector((store) => store.car?.car?.reservation);

  return (
    <div>
      <h1>hello si {user ? user.name : <h1>loading...</h1>}</h1>

      <p>Votre voiture réservée est {rentcar?.reservation}</p>
    </div>
  );
};

export default Profil;
