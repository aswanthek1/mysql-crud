import express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express();
import './config/db.js'


import userRouter from './routes/users.js'

app.use(express.json());
app.use(cors());



app.use("/",userRouter);








app.listen(8800, () => {
  console.log("connected to backend");
});
