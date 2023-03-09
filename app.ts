import express, { Application, urlencoded } from "express";

const app: Application = express();

app.use(urlencoded({ extended: true }));
app.use(express.json());

export default app;
