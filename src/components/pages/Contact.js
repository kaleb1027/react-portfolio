

import React, { useState } from "react";
import "./Contact.css";


import { checkPassword, validateEmail } from "../../utils/helpers";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
   
    e.preventDefault();

   
    if (!validateEmail(name) || !email) {
      setErrorMessage("Please enter a valid email address");
     
      return;
     
    }
   


    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <div className="formContainer">
      <form className="form">
        <input
          className="nameBox"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="Full Name"
        />
        <input
          className="emailBox"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          className="messageBox"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message..."
        />
        <button className="submitBtn" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;