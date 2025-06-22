import React, { useState, useEffect } from "react";
import styles from "./EmailPrompt.module.css";
import { supabase } from "../supabaseClient";

const EmailModal = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("user_email");
    if (!savedEmail) {
      setTimeout(() => setShow(true), 300); // optional fade-in delay
    }
  }, []);

  const handleSubmit = async(e) => {
  e.preventDefault();

  const trimmedEmail = email.trim();

  if (trimmedEmail) {
    const time =new Date(new Date().getTime()+3*60*60*1000)
    // Save to Supabase
    const data = await supabase
      .from("emails")
      .insert([{ email: trimmedEmail,addedAt: time }]);
const x=false;
    if (x) {
      console.error("Supabase insert error:", "error.message");
      alert("There was an error submitting your email.");
    } else {
      console.log("data inserted successfully", data);
      console.log(new Date().toISOString());
      console.log("Email submitted:", trimmedEmail);
      localStorage.setItem("user_email", trimmedEmail);
      setShow(false);
    }
  }
  };

  if (!show) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2 className={styles.title}>We’d love to stay in touch!</h2>
        <p className={styles.text}> drop your email below!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailModal;
