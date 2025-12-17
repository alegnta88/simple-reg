import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

await connectDB();

app.use(express.json());

app.use('/api/auth', userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});