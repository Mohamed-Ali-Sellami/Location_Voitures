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
//     
  );
};

export default Profil;



