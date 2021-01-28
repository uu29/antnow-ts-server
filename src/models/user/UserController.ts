import { Router, Request, Response } from "express";
import User, { IUser } from "./user.model";
const router = Router();

// User 생성
router.post("/", function (req: Request, res: Response) {
  User.create(
    {
      email: req.body.email,
      password: req.body.password,
    },
    function (err, user) {
      if (err) return res.status(500).send("User 생성 실패.");
      res.status(200).send(user);
    }
  );
});

// User 전체 조회
router.get("/", function (req: Request, res: Response) {
  User.find({}, function (err, users) {
    if (err) return res.status(500).send("User 전체 조회 실패.");
    res.status(200).send(users);
  });
});

// User 조회
router.get("/:id", function (req: Request, res: Response) {
  User.findById(req.params.id, function (err: any, user: IUser) {
    if (err) return res.status(500).send("User 조회 실패");
    if (!user) return res.status(404).send("User 없음.");
    res.status(200).send(user);
  });
});

// // User 삭제
// router.delete("/:id", function (req: Request, res: Response) {
//   User.findByIdAndRemove(req.params.id, function (err: any, user: IUser) {
//     if (err) return res.status(500).send("User 삭제 실패");
//     res.status(200).send("User " + user.email + " 삭제됨.");
//   });
// });

// User 수정
router.put("/:id", function (req: Request, res: Response) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, user) {
    if (err) return res.status(500).send("User 수정 실패.");
    res.status(200).send(user);
  });
});

export default router;
