const express = require('express');
const Car = require('../models/car'); // Corrected the variable name to be capitalized (typically model names are capitalized)
const carRouter = express.Router();

// Add car
carRouter.post('/add', async (req, res) => {
  try {
    const newCar = new Car(req.body); // Corrected the constructor call
    const result = await newCar.save();
    res.send({ car: result, msg: "Voiture ajoutée" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Erreur lors de l'ajout de la voiture" });
  }
});

// Get all cars
carRouter.get('/all', async (req, res) => {
  try {
    const result = await Car.find(); // Added semicolon
    res.send({ car: result, msg: "Toutes les voitures" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Erreur lors de la récupération des voitures" }); // Added error response
  }
});

// Get car by id
carRouter.get('/:id', async (req, res) => {
  try {
    const result = await Car.findById(req.params.id); // Simplified the findById method call
    if (!result) {
      return res.status(404).send({ msg: "Voiture non trouvée" });
    }
    res.send({ car: result, msg: "Les détails de la voiture" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Erreur lors de la récupération de la voiture" });
  }
});

// Delete car
carRouter.delete('/:id', async (req, res) => {
  try {
    const result = await Car.findByIdAndDelete(req.params.id); // Simplified the findByIdAndDelete method call
    if (!result) {
      return res.status(404).send({ msg: "Voiture non trouvée" });
    }
    res.send({ car: result, msg: "Voiture détruite" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Erreur lors de la suppression de la voiture" });
  }
});

// Update car
carRouter.put('/:id', async (req, res) => {
  try {
    const result = await Car.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }); // Added { new: true } to return the updated document
    if (!result) {
      return res.status(404).send({ msg: "Voiture non trouvée" });
    }
    res.send({ car: result, msg: "Voiture mise à jour" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Erreur lors de la mise à jour de la voiture" });
  }
});

carRouter.put('/:id', async (req, res) => {
  try {
    const result = await Car.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }); // Added { new: true } to return the updated document
    if (!result) {
      return res.status(404).send({ msg: "Voiture non trouvée" });
    }
    res.send({ car: result, msg: "Voiture mise à jour" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Erreur lors de la mise à jour de la voiture" });
  }
});









// //**********************************Reservation Car******************************************* */


// // POST route to create a new reservation
// carRouter.post('/api/car-reservations', async (req, res) => {
//   try {
//     const { carId, userId, startDate, endDate } = req.body;

//     // Basic validation
//     if (!carId || !userId || !startDate || !endDate) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     // Create new reservation
//     const newReservation = new Reservation({
//       carId,
//       userId,
//       startDate,
//       endDate
//     });

//     // Save the reservation to the database
//     const savedReservation = await newReservation.save();

//     res.status(201).json(savedReservation);
//   } catch (error) {
//     console.error('Error creating reservation:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // GET route to fetch all reservations
// carRouter.get('/api/car-reservations', async (req, res) => {
//   try {
//     const reservations = await Reservation.find();
//     res.json(reservations);
//   } catch (error) {
//     console.error('Error fetching reservations:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

module.exports = carRouter;