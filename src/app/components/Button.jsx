import React from "react";

const Button = ({ label }) => {
  return (
    <button className='register-btn'>
      <p className="text-lg">{label}</p>
    </button>
  );
};

export default Button;
