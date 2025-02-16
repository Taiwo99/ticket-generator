
// src/pages/StepThree.jsx
import React from "react";
import StepIndicator from "../components/StepIndicator";

const StepThree = ({ name, email, avatar, onBookAnother }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md max-w-md mx-auto text-center">
      <StepIndicator step={3} />
      <h2 className="text-xl font-bold mb-4">Your Ticket</h2>
      <div className="border p-4 rounded-lg shadow-md">
        <img src={avatar} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{email}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={onBookAnother} className="p-2 bg-blue-500 text-white rounded">Book Another Ticket</button>
        <button className="p-2 bg-green-500 text-white rounded">Download Ticket</button>
      </div>
    </div>
  );
};

export default StepThree;
