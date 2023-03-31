import React from "react";
import "../styles/Home.css";
import AccountType from "../component/AccountType";
import Card from "../component/Card";

const Home = () => {
  return (
    <div className="home center max-width">
      <AccountType
        headingText="Choose Account Type"
        customClass="absolute-center"
      />
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Home;
