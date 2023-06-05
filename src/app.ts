import express, { Express, json } from "express";

const app: Express = express();

app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(json({ strict: true, limit: "10mb" }));

export default app;
