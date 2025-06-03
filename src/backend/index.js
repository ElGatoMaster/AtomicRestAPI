import serverless from "serverless-http";
import app from "../src/app.js";
import { connectToDatabase } from "../src/config/database.config.js";

await connectToDatabase(); // asegura conexión antes de usar app

export const handler = serverless(app);