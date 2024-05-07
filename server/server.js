import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
const connectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: connectionString });



app.get("/", (_request, response) => {
  response.json("Best TV Shows");
});

app.get("/actors", async (_request, response) => {
  const result = await db.query("SELECT * FROM actors;");
  response.json(result.rows);
});


app.get("/shows", async (_request, response) => {
  const result = await db.query("SELECT * FROM shows;");
  response.json(result.rows);
});

app.post("/posts", async (req, res) => {
  console.log("req.body", req.body);


  const username = req.body.username;
  const location = req.body.location;
  const actor =  req.body.actor;
  const show =  req.body.show;
  const post = req.body.post;

  // app.post("/posts", async (_request, _response) => {
  // const username = _request.body.username;
  // const location = _request.body.location;
  // const actor =  _request.body.actor;
  // const show =  _request.body.show;
  // const post = _request.body.post;


  db.query(`INSERT INTO posts (username, location, actor, show, post) VALUES ($1, $2, $3, $4, $5)`, [
    username,
    location,
    actor,
    show,
    post
  ]);
  response.json({ status: "Post received!" });
});

app.get('/posts', async (_req, res) => {
  const { rows } = await pool.query('SELECT * FROM posts');
  res.json(rows);
  
});
app.listen(8080, () => console.log(" 8080 baby!"));
