
// src/utils/validation.js
export const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  export const validateForm = (name, email, avatar) => {
    if (!name || !email || !avatar) return "All fields are required.";
    if (!validateEmail(email)) return "Invalid email format.";
    return "";
  };