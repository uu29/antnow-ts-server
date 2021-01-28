import "source-map-support/register"; // source-map을 사용하기 위해 추가함.
import App from "./App";
import express, { Request, Response, NextFunction } from "express";
import api from "./api";
import handleErrors from "./middleware/handleErrors";
import mongooseConnect from "./db";

interface Err extends Error {
  status: number;
  data?: any;
}

const port: number = Number(process.env.PORT) || 3000;
const app: express.Application = new App().app;
mongooseConnect();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (request: Request, response: Response, next: NextFunction) => {
  response.send("hello");
});

app.use("/api", api);

app.use(handleErrors);

app.listen(port, () => console.log(`Express server listening at ${port}`)).on("error", (err) => console.error(err));
