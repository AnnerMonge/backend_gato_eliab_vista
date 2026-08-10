import express from "express";
import { registrarGato } from "../controllers/gato.controllers.js";

const router = express.Router();

router.post("/gato", registrarGato);

export default router;
