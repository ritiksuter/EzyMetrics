import { Router } from "express";
import { emailAlert } from "../controllers/alertEmail.controller.js";

const alertEmailRoute = Router();

alertEmailRoute.route('/send-alert').post(emailAlert);

export { alertEmailRoute };