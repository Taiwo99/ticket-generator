// src/pages/StepOne.jsx
import React, { useState } from "react";
import StepIndicator from "../components/StepIndicator";

const StepOne = ({ onNext }) => {
  const [ticketType, setTicketType] = useState("");
  const [ticketCount, setTicketCount] = useState(1);

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-md mx-auto">
      <StepIndicator step={1} />
      <h2 className="text-xl font-bold mb-4">Select Ticket</h2>
      <label className="block mb-2">Ticket Type:</label>
      <select
        className="w-full p-2 border rounded mb-4"
        value={ticketType}
        onChange={(e) => setTicketType(e.target.value)}
      >
        <option value="">Choose Type</option>
        <option value="Standard">Standard</option>
        <option value="VIP">VIP</option>
      </select>
      <label className="block mb-2">Number of Tickets:</label>
      <input
        type="number"
        min="1"
        value={ticketCount}
        onChange={(e) => setTicketCount(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="flex justify-between">
        <button className="p-2 bg-gray-500 text-white rounded">Cancel</button>
        <button 
          onClick={() => ticketType && onNext(ticketType, ticketCount)}
          className={`p-2 text-white rounded ${ticketType ? "bg-blue-500" : "bg-gray-300 cursor-not-allowed"}`} 
          disabled={!ticketType}
        >Next</button>
      </div>
    </div>
  );
};

export default StepOne;