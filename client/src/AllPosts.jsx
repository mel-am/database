import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "./components/Home";
import AllPosts from "./components/AllPosts";
import NewPost from "./components/NewPost";

export default function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getShows();
  }, []);

  async function getShows() {
    try {
      const response = await fetch("http://localhost:8080/shows");
      if (!response.ok) {
        throw new Error("Failed to fetch shows");
      }
      const data = await response.json();
      setShows(data);
    } catch (error) {
      console.error("Error fetching shows:", error.message);
    }
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts" exact component={AllPosts} />
        <Route path="/posts/new" exact component={NewPost} />
      </Switch>
      <div>
        <h1>Top TV Shows</h1>
        <h2>Top Shows:</h2>
        <ul>
          {shows.map((show) => (
            <li key={show.id}>
              {show.rating} . {show.show} - {show.year}.
            </li>
          ))}
        </ul>
      </div>
    </Router>
  );
}
