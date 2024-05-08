import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/posts">View All Posts</Link>
        </li>
        <li>
          <Link to="/posts/new">Create A New Post</Link>
        </li>
        <li>
          <Link to="/actors">Popular TV Actors</Link>
        </li>
        <li>
          <Link to="/shows">Popular TV Shows</Link>
        </li>
        <li>
          <Link to="/filters">Filters</Link>
        </li>
      </ul>
    </nav>
  );
}
