import { Router, Request, Response } from "express";
const router = Router();
import data from "./my-favorites.json";

// 내 주식 즐겨찾기 목록 불러와주는 api
router.get("/get-my-favorites", (req: Request, res: Response) => {
  res.send({
    data: data,
    status: 200,
  });
});

// 심볼값 받아서 주식 데이터 던져주는 부분
router.post("/get-profiles", (req: Request, res: Response) => {
  const {
    body: { symbol },
  } = req;
  console.log(symbol);
  res.send({
    status: 200,
  });
});

export default router;
