import React, { useState } from 'react'
import './styles/Reservations.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Reservation = () => {
  const params=useParams()
  console.log(params.id)
  const allcars = useSelector((store)=>store.car?.car)
  const user=useSelector((store)=>store.user?.user)
  const carreserver = allcars?.filter((data) => data._id === params.id);
  console.log(carreserver)

  const [startDate, setupstartDate] = useState("")

  const [endDate, setupendDate] = useState("")

  const calculateDifference = (prix) => {
    // Créer deux objets Date
    const firstDate = new Date(startDate);
    const secondDate = new Date(endDate);

    // Calculer la différence en millisecondes
    const differenceInMilliseconds = secondDate - firstDate;

    // Convertir la différence en jours
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    const prixtotal=differenceInDays*prix
    return console.log(Math.abs(prixtotal)) ; // Retourne la valeur absolue pour éviter les résultats négatifs
  };




  return (

    <div>
           
<h1 className='titlereservation'>Reserver votre voiture</h1>

startDate

<form>
             <h3> Name and last name : </h3>
            <input type="text" placeholder={`${user?.name} ${user?.lastname}`}/>

            <h3> Model Reservé : </h3>
            {carreserver?.map((data)=>
            <>
            <input type="text" placeholder={data?.model} />

            <h3> Start Date : </h3>
            <input type="date" placeholder="Start Date" onChange={(e)=>setupstartDate({date:e.target.value})} />
            <h3> End Date :</h3>
            <input type="date" placeholder="end Date" onChange={(e)=>setupendDate({date:e.target.value})} />

            { calculateDifference({data.price_per_day})}

            <h3>Total Price :</h3>
            <input type="text" placeholder="Total Price" />
            </>
          )}

            <button type="submit" className='confirmerreservation'>Confirmer</button>
  </form>


</div>



    
  )
}

export default Reservation
