import express from "express";
const whatsappRouter = express.Router();
import {sendTemplateMessage} from "../services/whatsappService.js";

whatsappRouter.post("/send-message", sendTemplateMessage);

export default whatsappRouter;