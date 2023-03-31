import React from "react";
import "../styles/heading.css";
const AccountType = ({ headingText, customClass }) => {
  return (
    <div>
      <h1 className={`user-type-heading ${customClass}`}>{headingText}</h1>
    </div>
  );
};

export default AccountType;
