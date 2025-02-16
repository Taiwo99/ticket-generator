// src/pages/StepTwo.jsx
import React, { useState } from "react";
import StepIndicator from "../components/StepIndicator";

const StepTwo = ({ onBack, onBook }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [notes, setNotes] = useState("");

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-md mx-auto">
      <StepIndicator step={2} />
      <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
      <label className="block mb-2">Full Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <label className="block mb-2">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <label className="block mb-2">Upload Avatar:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleAvatarUpload}
        className="w-full p-2 border rounded mb-4"
      />
      {avatar && <img src={avatar} alt="Avatar Preview" className="w-24 h-24 rounded-full mb-4" />}
      <label className="block mb-2">Notes:</label>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="flex justify-between">
        <button onClick={onBack} className="p-2 bg-gray-500 text-white rounded">Back</button>
        <button
          onClick={() => name && email && avatar && onBook(name, email, avatar, notes)}
          className={`p-2 text-white rounded ${name && email && avatar ? "bg-blue-500" : "bg-gray-300 cursor-not-allowed"}`} 
          disabled={!name || !email || !avatar}
        >Book Ticket</button>
      </div>
    </div>
  );
};

export default StepTwo;
