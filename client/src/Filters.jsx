import React, { useState } from "react";

export default function Filters({ onFilter }) {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter(filter);
  };

  return (
    <div>
      <h2>Filters</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Filter by Actor:
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Enter actor's name"
          />
        </label>
        <button type="submit">Apply Filter</button>
      </form>
    </div>
  );
}
