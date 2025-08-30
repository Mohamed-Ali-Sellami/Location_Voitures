import React, { useState, useEffect } from 'react';
import './styles/Reservations.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addreservation, newreservation } from '../JS/carSlice';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const Reservation = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const allcars = useSelector((store) => store.car?.car);
  const user = useSelector((store) => store.user?.user);

  const carreserver = allcars?.filter((data) => data._id === params.id);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateDays = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDifference = endDate.getTime() - startDate.getTime();
    const days = timeDifference / (1000 * 3600 * 24);
    return days > 0 ? days : 0;
  };

  useEffect(() => {
    calcultotalpric();
  }, [startDate, endDate, carreserver]);

  const calcultotalpric = () => {
    if (startDate && endDate && carreserver.length > 0) {
      const pricePerDay = carreserver[0]?.price_per_day;
      const days = calculateDays(startDate, endDate);
      setTotalPrice(days * pricePerDay);
      setaddreservation({ ...addreservation, totalPrice: days * pricePerDay });
    }
  };

  const [addreservation, setaddreservation] = useState({
    startDate: "",
    endDate: "",
    totalPrice: "",
    userId: user?._id,
  });

  const createNotification = () => {
    NotificationManager.success('Félicitations', 'Success Reservation!', 5000);
  };

  return (
    <div className="reservation-page">
      <header className="reservation-header">
        <h1>Réserver votre voiture</h1>
      </header>

      <div className="reservation-container">
        {carreserver?.map((data) => (
          <div key={data._id} className="reservation-card">
            <div className="car-image-section">
              <img src={data?.image || '/path/to/default/image.jpg'} alt={data?.model} className="car-image" />
            </div>

            <div className="reservation-details">
              <h3>Nom et prénom :</h3>
              <input type="text" value={`${user?.name} ${user?.lastname}`} readOnly className="input-field" />

              <h3>Modèle Réservé :</h3>
              <input type="text" value={data?.model} readOnly className="input-field" />

              <h3>Date de début :</h3>
              <input
                type="date"
                value={startDate}
                onChange={(e) => (setStartDate(e.target.value), setaddreservation({ ...addreservation, startDate: e.target.value }))}
                className="input-field"
              />

              <h3>Date de fin :</h3>
              <input
                type="date"
                value={endDate}
                onChange={(e) => (setEndDate(e.target.value), setaddreservation({ ...addreservation, endDate: e.target.value }))}
                className="input-field"
              />

              <h3>Prix total :</h3>
              <input type="text" value={totalPrice ? `${totalPrice} TND` : '0 TND'} readOnly className="input-field" />

              <button
                type="submit"
                className="confirm-button"
                onClick={() => {
                  dispatch(newreservation({ id: data?._id, reservation: addreservation }));
                  createNotification();
                }}
              >
                Confirmer
              </button>
            </div>
          </div>
        ))}
      </div>

      <NotificationContainer />
    </div>
  );
};

export default Reservation;
