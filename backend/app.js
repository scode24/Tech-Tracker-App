import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { appController } from "./controllers/appController.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.get("/v1/getGridData", appController);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
