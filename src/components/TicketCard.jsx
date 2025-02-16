

// src/components/TicketCard.jsx
import React from "react";

const TicketCard = ({ name, email, avatar }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md text-center">
      <img src={avatar} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-sm text-gray-600">{email}</p>
    </div>
  );
};

export default TicketCard;
