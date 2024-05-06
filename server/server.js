import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const connectionString = process.env.DATABASE_URL;

const db = new pg.Pool({ connectionString: connectionString });

app.use(cors());
app.use(express.json());

app.get("/", (_request, response) => {
  response.json("Best TV Shows");
});

app.get("/actors", async (_request, response) => {
  const result = await db.query("SELECT * FROM actors;");
  response.json(result.rows);
});


// });
app.get("/shows", async (_request, response) => {
  const result = await db.query("SELECT * FROM shows;");
  response.json(result.rows);
});

app.post("/posts", async (_request, response) => {
  const username = _request.body.username;
  const location = _request.body.location;
  const actor =  _request.body.actor;
  const show =  _request.body.show;
  const post = _request.body.post;


  await db.query(`INSERT INTO posts (username, location, actor, show, post) VALUES ($1, $2, $3, $4, $5)`, [
    username,
    location,
    actor,
    show,
    post
  ]);
  response.json({ success: true });
});
app.listen(8080, () => console.log(" 8080 baby!"));
