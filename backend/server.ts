import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import formRoutes from "./routes/formRoutes";
const app = express();
const PORT = 4600;

app.use(cors());
app.use(cookieParser());
app.use("/form", formRoutes);

app.listen(PORT, () => console.log(`Server is connected to PORT: ${PORT}`));
