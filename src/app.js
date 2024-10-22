import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import ReportRouter from "./routes/report.route.js";
import { alertEmailRoute } from "./routes/alertEmail.route.js";
import { etlRoute } from "./routes/etlProcess.route.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());


app.use('/api/v1/report', ReportRouter);
app.use("/api/v1/email", alertEmailRoute);
app.use("/api/v1/etl", etlRoute);

export { app };