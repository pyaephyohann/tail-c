import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

const SendEmail = () => {
  const form = useRef();
  const [email, setEmail] = useState({ name: "", email: "", message: "" });
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const values = Object.fromEntries(formData.entries());

    const { user_name, user_email, message } = values;

    const isValid = user_name && user_email && message;

    if (!isValid) return alert("Sir! You have to fill all the requirements");

    emailjs
      .send("service_um0rnsb", "template_8rx4zyi", values, "C7FZHBRWr2fOX03lO")
      .then((response) => {
        alert("Email sent!", response.status, response.text);
        setEmail({ ...email, name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Error sending email:", error);
      });
  };

  return (
    <form
      ref={form}
      className="w-80 flex flex-col items-center mx-auto mt-32"
      onSubmit={handleSubmit}
    >
      <motion.div>
        <TextField
          value={email.name}
          onChange={(event) => setEmail({ ...email, name: event.target.value })}
          name="user_name"
          label="Name"
          variant="outlined"
          fullWidth
        />
      </motion.div>
      <TextField
        value={email.email}
        onChange={(event) => setEmail({ ...email, email: event.target.value })}
        sx={{ mt: 8 }}
        name="user_email"
        label="Email"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={email.message}
        onChange={(event) =>
          setEmail({ ...email, message: event.target.value })
        }
        sx={{ my: 8 }}
        label="Message"
        name="message"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default SendEmail;
