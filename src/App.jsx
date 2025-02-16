// src/App.jsx
import React, { useState } from "react";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";

const App = () => {
  const [step, setStep] = useState(1);
  const [ticketType, setTicketType] = useState("");
  const [ticketCount, setTicketCount] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [notes, setNotes] = useState("");

  const handleNext = (type, count) => {
    if (!type) return;
    setTicketType(type);
    setTicketCount(count);
    setStep(2);
  };

  const handleBook = (userName, userEmail, userAvatar, userNotes) => {
    setName(userName);
    setEmail(userEmail);
    setAvatar(userAvatar);
    setNotes(userNotes);
    setStep(3);
  };

  const handleBack = () => setStep(1);
  const handleBookAnother = () => setStep(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {step === 1 && <StepOne onNext={handleNext} />}
      {step === 2 && <StepTwo onBack={handleBack} onBook={handleBook} />}
      {step === 3 && <StepThree name={name} email={email} avatar={avatar} onBookAnother={handleBookAnother} />}
    </div>
  );
};

export default App;