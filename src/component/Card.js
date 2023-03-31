import React from "react";
import "../styles/card.css";
import img1 from "../images/doctor.jpg";
import img2 from "../images/patient.jpg";
import AccountType from "./AccountType";
import { NavLink } from "react-router-dom";
const Card = ({ customClass }) => {
  return (
    <div className="card-template absolute-center">
      <NavLink className="card-link" to="/doctor">
        <div className={`card ${customClass}`}>
          <img className="card-image" src={img1} alt="doctor" />
          <AccountType headingText="Doctor" customClass="card-name" />
        </div>
      </NavLink>
      <NavLink className="card-link " to="/patient">
        <div className={`card ${customClass}`}>
          <img className="card-image" src={img2} alt="doctor" />
          <AccountType headingText="Patient" customClass="card-name" />
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
