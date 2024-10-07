
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, userCurrent } from "./JS/userSlice";
import Profil from "./components/Profil";
import PrivateRoute from "./routes/PrivateRoute";
import PrivateRouteAdmin from "./routes/PriveRouteAdmin";
import Home from "./components/Home";
import Agences from "./components/Agences";
import Voitures from "./components/Voitures";
import { getcar } from "./JS/carSlice";
import Taarifs from "./components/Taarifs";
import ContactUs from "./components/ContactUs";
import Reservation from "./components/Reservation";
import HomeAdmin from "./components/Dashboard/Components/HomeAdmin";
import GestionCar from "./components/Dashboard/Components/GestionCar";
import GestionUser from "./components/Dashboard/Components/GestionUser";

function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }

    dispatch(getcar());  
  
  }, []);






  return (
    <div className="App">
      {/* <div className="header">
        <h1>Auth workshop</h1>
        {isAuth ? (
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : null}
      </div> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/voitures"  element={<Voitures />} />
        <Route path="/agences" element={<Agences />} />
        <Route path="/tarifs" element={<Taarifs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/dashboard" element={<HomeAdmin/>} />

        {/* dashboard */}
        <Route path="/gestioncars"  element={<GestionCar/>} />
      <Route path="/gestionusers"  element={<GestionUser/>} />
      <Route path="/reservationAdmin"  element={<Reservations/>} />
         




{/*           
        <Route element={<PrivateRoute />}>
        <Route path="/profil" element={<Profil />} />
        </Route> */}
        <Route element={<PrivateRouteAdmin />}>
        <Route path="/dashboard" element={<HomeAdmin/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
