import React from 'react'
import './styles/Card.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  

const Cart = ({data}) => {
  const notify = () => toast("This is a toast notification !");

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
                    <button  className="reservation-btn" onClick={notify}> RÉSERVATION</button>
                    </div>


                </div>
        

    </div>
    </div>
  )
}

export default Cart
