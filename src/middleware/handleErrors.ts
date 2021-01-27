import { Request, Response, NextFunction } from "express";

import GeneralError from "../utils/error";

const handleErrors = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log("hi");
  console.log(err);
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      status: "error",
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: err.message,
  });
};

export default handleErrors;
