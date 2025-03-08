"use client";

import { useState } from "react";

function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });
    const { msg } = await res.json(); // This line was incomplete in your code
    setError(msg);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Please fill all the fields</p> {/* Fixed typo: "filds" to "fields" */}
      {error && <p className="error">{error}</p>} {/* Added error display */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Enter your full name"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="message"
          id="message"
          placeholder="Enter your message"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
