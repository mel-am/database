import React from 'react';
import { useState, useEffect } from "react";

export default function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchActors();
  }, []);

  const fetchActors = async () => {
    const response = await fetch("http://localhost:8080/actors");
    const data = await response.json();
    setActors(data);
  };
  return (
    <div className="table-container">
      <h2>Popular TV Actors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Show</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor, index) => (
            <tr key={index}>
              <td>{actor.name}</td>
              <td>{actor.show}</td>
              <td>{actor.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
