import React, { useState } from 'react'
import { addcar } from '../../../JS/carSlice';
import { model } from 'mongoose';
import { useDispatch } from 'react-redux';

const AddCar = () => {

    const [showForm, setShowForm] = useState(false);

    const dispatch=useDispatch()

    const [cars, setCars] = useState([]);
      const [newCar, setNewCar] = useState({ model: '', matriculation: '', availability: '',Year:'',image:'',Price_per_day:'' });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCar({ ...newCar, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setCars([...cars, newCar]);
        setNewCar({ model: '', matriculation: '', availability_status: '' });
        setShowForm(false);
      };


  return (
    <div>

     <form onSubmit={handleSubmit} className="add-car-form">
          <input
            type="text"
            name="model"
            value={newCar.model}
            onChange={(e)=>setNewCar({...newCar,model:e.target.value})}
            placeholder="Model of Car"
            className="input"
            required
          />
          <input
            type="text"
            name="matricule"
            value={newCar.matricule}
            onChange={(e)=>setNewCar({...newCar,matriculation:e.target.value})}
            placeholder="Matricule"
            className="input"
            required
          />
          <input
            type="text"
            name="availability"
            value={newCar.availability_status}
            onChange={(e)=>setNewCar({...newCar,availability:e.target.value})}
            placeholder="Availability"
            className="input"
            required
          />
<input
            type="text"
            name="year"
            value={newCar.year}
            onChange={(e)=>setNewCar({...newCar,year:e.target.value})}
            placeholder="Year"
            className="input"
            required
          />

<input
            type="text"
            name="image"
            value={newCar.image}
            onChange={(e)=>setNewCar({...newCar,image:e.target.value})}
            placeholder="image"
            className="input"
            required
          />

<input
            type="text"
            name="price per day"
            value={newCar.price_per_day}
            onChange={(e)=>setNewCar({...newCar,price_per_day:e.target.value})}
            placeholder="Price per day"
            className="input"
            required
          />





          <button type="submit" className="submitButton" onClick={()=>(dispatch(addcar(newCar)))}>
            Submit
          </button>
        </form> 
    </div>
  )
}

export default AddCar
