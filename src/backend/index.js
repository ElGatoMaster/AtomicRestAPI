import serverless from "serverless-http";
import app from "../app.js";
import { connectToDatabase } from "../config/database.config.js";

await connectToDatabase(); // asegura conexión antes de usar app

let handler;
// Si se encuentra la variable de entorno SERVERLESS, se exporta el handler export const handler = serverless(app);
if (process.env.SERVERLESS) {
  handler = serverless(app);
} else {
  app.listen(app.get("port"), '0.0.0.0', () => {
    console.log(`Server listening on port ${app.get("port")}`);
  });
}

export {handler};