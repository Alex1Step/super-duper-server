import env from 'dotenv';
import {Request, Response, NextFunction} from "express";
import express from 'express';
import path from 'path';
import connectDB from "./config/database";

// const todoRoutes = require('./routes/todos');
env.config();

const app = express();
const port: string | number= process.env.PORT || "5000";
const userName: string | undefined = process.env.USER_NAME_MONGO;
const password: string | undefined = process.env.PASSWORD_MONGO;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  next();
});

// app.use(todoRoutes)

async function start(): Promise<void> {
  try {
    await connectDB;
    app.listen(port, () => {
      console.log('Server has been started on port ' + port);
    })
  } catch (e) {
    console.log(e)
  }
}

start();
