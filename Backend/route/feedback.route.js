import express from "express";
import { doubt } from "../controller/feedback.controller.js";

const router = express.Router();

router.post("/doubt", doubt);

export default router;
