import "dotenv/config";
import cors from "cors";
import express from "express";
import connectDB from "./config/db.js";
import contactRoute from "./routes/contact.routes.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "dev"
        ? "http://localhost:5173"
        : process.env.ORIGIN,
    methods: ["GET,POST"],
    credentials: true,
  })
);

app.use("/api/v1/contact", contactRoute);

connectDB();

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
