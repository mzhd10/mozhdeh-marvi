
import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const [touchedFields, setTouchedFields] = useState([]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setEnteredName(value);
    } else if (name === "email") {
      setEnteredEmail(value);
    } else if (name === "message") {
      setEnteredMessage(value);
    }
  };
  const handleUnputBlur = (event) => {
    const { name } = event.target;
    if (!touchedFields.includes(name)) {
      setTouchedFields((prevFields) => [...prevFields, name]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tge3b0r",
        "template_vpcrm3o",
        e.target,
        "KnzIMkv19I64PY2KE"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    setEnteredName("");
    setEnteredEmail("");
    setEnteredMessage("");
    setTouchedFields([]);
  };

  const isFieldInvalid = (feildName) => {
    if (feildName === "name") {
      return enteredName.trim() === "" && touchedFields.includes(feildName);
    }
    if (feildName === "email") {
      return (
        (!enteredEmail.trim() || !enteredEmail.includes("@")) &&
        touchedFields.includes(feildName)
      );
    }
    if (feildName === "message") {
      return enteredMessage.trim() === "" && touchedFields.includes(feildName);
    }
    return false;
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`${"form-control"} ${isFieldInvalid("name") && "invalid"}`}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={enteredName}
          onChange={handleInputChange}
          autoComplete="off"
          onBlur={handleUnputBlur}
        />
        {isFieldInvalid("name") && (
          <p className="error">Please enter your name.</p>
        )}
      </div>
      <div
        className={`${"form-control"} ${isFieldInvalid("email") && "invalid"}`}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={enteredEmail}
          onChange={handleInputChange}
          autoComplete="off"
          onBlur={handleUnputBlur}
        />
        {isFieldInvalid("email") && (
          <p className="error">Please enter your email address.</p>
        )}
      </div>

      <div
        className={`${"form-control"} ${
          isFieldInvalid("message") && "invalid"
        }`}
      >
        <textarea
          name="message"
          placeholder="Message"
          value={enteredMessage}
          className="textarea"
          onChange={handleInputChange}
          onBlur={handleUnputBlur}
        />
        {isFieldInvalid("message") && (
          <p className="error">Please enter your message.</p>
        )}
      </div>
      <button className="contact-button">Send Message</button>
    </form>
  );
};

export default ContactForm;
