
import React, { useState, useEffect } from "react";
import ShowForm from "./ShowForm";

export default function App() {
  const [actors, setActors] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getActors();
    getShows();
    getPosts();
  }, []);
  async function getActors() {
    const response = await fetch("http://localhost:8080/actors");
    const data = await response.json();
    setActors(data);
  }
    async function getShows() {
      const response = await fetch("http://localhost:8080/shows");
      const data = await response.json();
      setShows(data);
    }

  async function getPosts() {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();
    setPosts(data);
  }

  return (
    <div>
      <h1>Top TV Shows</h1>
      <div>
        <h2>Top Shows:</h2>
        <ul>
          {shows.map((show) => (
            <li key={show.id}>
              {show.rating} . {show.show} - {show.year}.
            </li>
          ))}
        </ul>
      </div>
  <div><ShowForm /> </div>
    </div>
  );
}