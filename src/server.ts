import "source-map-support/register"; // source-map을 사용하기 위해 추가함.
import App from "./App";
import express, { Request, Response, NextFunction } from "express";
import api from "./api";
import wrapAsync from "./wrapHandler";
import handleErrors from "./middleware/handleErrors";
import { BadRequest } from "./utils/error";

interface Err extends Error {
  status: number;
  data?: any;
}

const port: number = Number(process.env.PORT) || 3000;
const app: express.Application = new App().app;

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (request: Request, response: Response, next: NextFunction) => {
  response.send("hello");
});

app.use("/api", api);

// app.get(
//   "*",
//   wrapAsync(async function (req: Request, res: Response) {
//     await new Promise((resolve: any) => setTimeout(() => resolve(), 50));
//     // 비동기 에러
//     throw new Error("woops");
//   })
// );

// app.use(function (error: Err, req: Request, res: Response, next: NextFunction) {
//   // wrapAsync() 때문에 호출될 것입니다
//   res.json({ message: error.message });
// });

app.use(handleErrors);

app.listen(port, () => console.log(`Express server listening at ${port}`)).on("error", (err) => console.error(err));
