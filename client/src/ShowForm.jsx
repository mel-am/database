import React from "react";
import { useState } from "react";

export default function ShowForm() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    actor: "",
    show: "",
    post: ""
  });
  function handleSubmit(event) {
    event.preventDefault();
 fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
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
  );
}
