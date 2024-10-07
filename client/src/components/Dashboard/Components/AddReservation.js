import React, { useState } from 'react'

const AddReservation = () => {

    const [showForm, setShowForm] = useState(false);
    const [reservation, setreservation] = useState([]);
      const [newreservation, setNewreservation] = useState({ user: '', model: '', startDate: '',endDate:'', totalPrice:'' });
    
      const handleInputChange = (e) => {
        const { model, value } = e.target;
        setNewreservation({ ...newreservation, [model]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setreservation([...reservation, newreservation]);
        setNewreservation({ user: '', model: '', startDate: '',endDate:'', totalPrice:'' });
        setShowForm(false);
      };


  return (
    <div>
      
      <form onSubmit={handleSubmit} className="add-car-form">
          <input
            type="text"
            name="user"
            value={newreservation.model}
            onChange={handleInputChange}
            placeholder="Name of Client"
            className="input"
            required
          />
          <input
            type="text"
            name="model"
            value={newreservation.model}
            onChange={handleInputChange}
            placeholder="Model Reservé"
            className="input"
            required
          />
          <input
            type="text"
            name="startDate"
            value={newreservation.startDates}
            onChange={handleInputChange}
            placeholder="Start Date"
            className="input"
            required
          />
<input
            type="text"
            name="endDate"
            value={newreservation.endDate}
            onChange={handleInputChange}
            placeholder="end Date"
            className="input"
            required
          />

<input
            type="text"
            name="Total Price"
            value={newreservation.totalPrice}
            onChange={handleInputChange}
            placeholder="Total Price"
            className="input"
            required
          />





          <button type="submit" className="submitButton">
            Submit
          </button>
        </form> 

    </div>
  )
}

export default AddReservation
