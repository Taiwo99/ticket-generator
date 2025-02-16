
// src/components/StepIndicator.jsx
import React from "react";

const StepIndicator = ({ step }) => {
  return (
    <div className="flex justify-center space-x-4 my-4">
      {[1, 2, 3].map((num) => (
        <div
          key={num}
          className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold
            ${num === step ? "bg-blue-600" : "bg-gray-400"}`}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
