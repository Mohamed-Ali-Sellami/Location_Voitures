import React from 'react'
import './styles/Card.css'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Reservation from './Reservation';
import { Link } from 'react-router-dom';


  

const Cart = ({data}) => {

//faza 7athra min  site "react notification" 
  const createNotification = () => {
          NotificationManager.error('voiture non disponible', 'Choisir une autre!', 5000, () => {
            alert('callback');
          });
      }

//hethi jibnaha mil autentification 5ater user mayod5ol ireservie ken maywali autentifié
      const isAuth = localStorage.getItem("token");
      console.log(isAuth)

  return (
    <div>
      <div className="car-card">

                <img src={data.image} alt="imagecar" className="car-image"/>

               {/* condition   haki ? t3aweth if*/}

                 {data.availability_status == true?                                  
                 
                  <p className='dispo' style={{background:"green"}}>Disponible</p>
              :
                  <p className='dispo' style={{background:"red"}}>Non Dispo</p>
              }
              
                     



                <div className="car-name">{data.model}</div>
                <div className="car-price">
                <p> Prix comprend : <br/>
                - Kilométrage illimité<br/>
                           - Assurance au tiers<br/>
                           - Surcharge Aéroport/Gare<br/>
                           - Caution : 50 TND </p>
                    <p className="price-label">Prix à partir de</p>
                    <p className="price">{data.price_per_day} TND<span>/jour</span></p>


                    <div>
                    {data.availability_status == false?
                    <button  className="reservation-btn "  onClick={()=>createNotification()}> RÉSERVATION</button>
                    :

                    isAuth ? (
                      <Link to=`/reservations/${data._id}``}> <button  className="reservation-btn "> RÉSERVATION</button> </Link>
                    ) : (
                        <Link to="/login"> <button  className="reservation-btn "> RÉSERVATION</button> </Link> // Redirection vers la page de login si non authentifié
                    )
                                      
}
                    <NotificationContainer/>
                    </div>
                    


                </div>
        

    </div>
    </div>
  )
}

export default Cart
