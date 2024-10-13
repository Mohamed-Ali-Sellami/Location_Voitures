import React from "react";
import { useSelector } from "react-redux";

const Profil = () => {
  const user = useSelector((state) => state.user.user);
  const allcars = useSelector((store) => store.car?.car);

  return (
    <div>
      <h1>hello si {user ? user.name : <h1>loading...</h1>}</h1>

      <p>votre car reservé est {car?.car.reservation}</p>
    </div>
  );
};

export default Profil;
