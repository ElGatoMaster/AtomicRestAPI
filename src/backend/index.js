import serverless from "serverless-http";
import app from "../app.js";
import { connectToDatabase } from "../config/database.config.js";

await connectToDatabase(); // asegura conexión antes de usar app

export const handler = serverless(app);