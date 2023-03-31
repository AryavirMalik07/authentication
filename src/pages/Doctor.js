import React from "react";
import AccountType from "../component/AccountType";
import Card from "../component/Card";
import "../styles/doctor.css";
import "../styles/Form.css";
import { Link } from "react-router-dom";

const Doctor = () => {
  return (
    <div className="center doctor max-width ">
      <AccountType headingText="Hey Doctor!" />
      <div>
        <Card />
      </div>
      <div className="identity-div">
        <AccountType headingText="Hello doctor!" customClass="text-color" />
        <AccountType
          headingText="Please fill out the form below to get started"
          customClass="text-color"
        />
      </div>
      <div class="login-box">
        <form typeof="submit">
          <div class="user-box absolute-center">
            <input type="text" name="" required="" />
            <label>Email</label>
          </div>
          <div class="user-box  absolute-center">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
        </form>
      </div>
      <div className="login-footer">
        <p className="login-para">
          No account?{" "}
          <Link className="signup-link" to="">
            Signup
          </Link>
        </p>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Doctor;
