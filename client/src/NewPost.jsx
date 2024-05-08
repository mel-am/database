import React from "react";
import { useState } from "react";

export default function NewPost() {
  const [form, setForm] = useState({
    username: "",
    location: "",
    actor: "",
    show: "",
    post: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // To Reset the form fields
      setForm({
        username: "",
        location: "",
        actor: "",
        show: "",
        post: "",
      });

      setSubmitted(true);
    });
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <div>
      {submitted && <p>Thank you! Your post has been submitted!</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={form.username}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          name="location"
          value={form.location}
          placeholder="Location"
          onChange={handleChange}
        />
        <input
          name="actor"
          value={form.actor}
          placeholder="Actor's name"
          onChange={handleChange}
        />
        <input
          name="show"
          value={form.show}
          placeholder="Show"
          onChange={handleChange}
        />
        <input
          name="post"
          value={form.post}
          placeholder="Post"
          onChange={handleChange}
        />

        <button type="submit">Submit review</button>
      </form>
    </div>
  );
}
