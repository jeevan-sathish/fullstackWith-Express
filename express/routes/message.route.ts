import { Router, type Request, type Response } from "express";
import {
  messageMiddleware,
  authMiddleware,
} from "../middleware/messageMiddleware.js";
import multer from "multer";

const upload = multer({
  dest: "upload/",
});

const Messagerouter = Router();

Messagerouter.get(
  "/message/:id",
  authMiddleware,
  messageMiddleware,
  (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      return res.json({
        message: `userID recieved id:${id}`,
      });
    } catch (error) {
      res.status(500).json({
        message: "internal server error",
      });
    }
  },
);

export { Messagerouter };

export const fileRouter = Router();
fileRouter.post(
  "/upload",
  authMiddleware,
  upload.single("image"),
  (req, res) => {
    const rfile = req.file;
    console.log(rfile?.originalname);
    res.json({
      message: "recieved the image",
    });
  },
);
