import express from "express";
import cors from "cors";
import morgan from "morgan";

import config from "./config/config.js";
import routeAPI from "./backend/atom/routes/index.js";
import { connectToDatabase } from "./config/database.config.js";

const app = express();
await connectToDatabase(); // Asegúrate de estar en Node 18+ o usa otra forma

app.set('port', config.PORT);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const api = config.API_URL;

app.get(`${api}`, (req, res) => {
  res.send(`<h1>RESTful running in root</h1><p>atomic: <b>${api}/api-docs</b></p>`);
});

app.get("/atomic", (req, res) => {
  res.send(`<h1>RESTful running in YVAN</h1><p>eCommerce: <b>${api}/api-docs</b></p>`);
});

routeAPI(app);

export default app;