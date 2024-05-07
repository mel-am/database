import React from "react";
import { useState, useCallback } from "react";

export default function NewPost() {
  const [form, setForm] = useState({
    username: "",
    location: "",
    actor: "",
    show: "",
    post: "",
  });

  const handleChange = useCallback(
    (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
    },
    [form]
  );

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // function handleChange(event) {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new review</h3>
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
  );
}
