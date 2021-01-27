import { Router } from "express";
import symbol from "./symbol";

const router = Router();
// mount the test resource
router.use("/symbol", symbol);

export default router;
