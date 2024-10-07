import React from 'react'
import './styles/Card.css'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


  

const Cart = ({data}) => {
  const createNotification = () => {
          NotificationManager.error('voiture non disponible', 'Choisir une autre!', 5000, () => {
            alert('callback');
          });
      }
  return (
    <div>
      <div className="car-card">

                <img src={data.image} alt="imagecar" className="car-image"/>

{/* condition   haki ? t3aweth if*/}
                 {data.availability_status == true?                                  
                 
                  <p className='dispo' style={{background:"green"}}>Dispo</p>
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
                    data.availability_status == true?
                    <button  className="reservation-btn "  onClick={()=>createNotification()}> RÉSERVATION</button>
                    <NotificationContainer/>
                    </div>
                    


                </div>
        

    </div>
    </div>
  )
}

export default Cart
