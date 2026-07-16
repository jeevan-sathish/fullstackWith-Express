import type { NextFunction, Request, Response } from "express";

export function messageMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const id = Number(req.params.id);
  if (id === 10) {
    return next();
  } else {
    return res.status(404).json({
      message: `user id :${id} not found`,
    });
  }
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const name = req.headers.authorization;
  if (name === "jeevan") {
    return next();
  } else {
    return res.status(401).json({
      message: "unauthorized person",
    });
  }
}
