import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "Select One...",
    message: "",
    checkbox: false,
  });
  axios.defaults.withCredentials = true;
  // Function to handle changes in form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "my-portfolio-2-app2.vercel.app/submit-form",

        "https://my-portfolio-2-app2.vercel.app/submit-form",

        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    toast("An email has been sent to Lotfi and will be reviewed", {
      className: "larger-toast",
    });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <br />
        <h2 className="contactM">Contact Me</h2>
        <p className="text-lg"></p>
      </div>
      <form
        className="contact--form--container"
        onSubmit={handleSubmit}
        action="/submit-form"
        method="POST"
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phoneNumber"
              id="phone-number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            className="contact--input text-md"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
          >
            <option>Select Service</option>
            <option>Industrial Engineering Service</option>
            <option>Web development Service</option>
            <option>Mobile development Service</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Description</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
            required
          />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
