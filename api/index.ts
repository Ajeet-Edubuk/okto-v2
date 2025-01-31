import express, { Request, Response } from "express";
import { config } from "dotenv";
import { MongoConnection } from "../database/mongo.connection";
import cvRouter from "../routers/cv.router";
import bodyParser from "body-parser";
import cors from "cors";

// Initialize dotenv and Express app
config();
const app = express();
MongoConnection();
// allow specific origin
const corsOptions = {
  origin: "https://www.edubukcvonchain.com",
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};
// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/cv", cvRouter);

app.get("/", (req: Request, res: Response) => {
  return res.json({
    message: "Health is ok !",
  });
});

app.listen(process.env.PORT, () => {
  MongoConnection();
  console.log("Backend running on PORT:", process.env.PORT);
});
// Export the app as a Vercel serverless function
export default app;
