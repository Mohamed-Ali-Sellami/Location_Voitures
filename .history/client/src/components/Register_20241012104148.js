import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userRegister } from "../JS/userSlice";

const Register = () => {
  const [register, setregister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div className="wrapper">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <h2 className="form-signin-heading">Please register</h2>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="name"
            required=""
            autofocus=""
            onChange={(e) => setregister({ ...register, name: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="last name"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, lastname: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, email: e.target.value })
            }
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required=""
            onChange={(e) =>
              setregister({ ...register, password: e.target.value })
            }
          />

<input
            type="text"
            className="form-control"
            name="mobile"
            placeholder="Mobile phone"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, mobile: e.target.value })
            }
          />

         <input
            type="date_of_obtaining_permit"
            className="form-control"
            name="date_of_obtaining_permit"
            placeholder="Year of obtaining permit"
            required=""
            onChange={(e) =>
              setregister({ ...register, date_of_obtaining_permit: e.target.value })
            }
            

          />

<input
            type="image"
            className="form-control"
            name="date_of_obtaining_permit"
            placeholder="Year of obtaining permit"
            required=""
            onChange={(e) =>
              setregister({ ...register, date_of_obtaining_permit: e.target.value })
            }
            

          />

          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={() => {
              dispatch(userRegister(register));
            }}
          >
            register
          </button>

          <h5>
            u already have account <Link to="/login">sign in </Link>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default Register;
