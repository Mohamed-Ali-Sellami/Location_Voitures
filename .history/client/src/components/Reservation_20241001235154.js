import React from 'react'

const Reservation = () => {
  return (
    <div>
      
<h1>Reserver votre voiture</h1>


<form  className="add-car-form">
          <input
            type="text"
            name="user"
            value={"model"}
            onChange={""}
            placeholder="Name and Last name"
            className="input"
            required
          />
          <input
            type="text"
            name="model"
            value={model}
            onChange={"handleInputChange"}
            placeholder="Model Reservé"
            className="input"
            required
          />
          <input
            type="text"
            name="startDate"
            value={startDates}
            onChange={""}
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

export default Reservation
