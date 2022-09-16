
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRouter from "../Server/Routers/Users.js";
import videoRoutes from "../Server/Routers/Videos.js";
import commentRoutes from "../Server/Routers/Comments.js";
import authRoutes from "../Server/Routers/Auth.js";
import cookieParser from "cookie-parser";


const app = express();

const PORT = process.env.PORT || 3500 ;
dotenv.config();

app.get('/' , (req , res) => {
    res.send('<h1>Server is Runing</h1>')
})


mongoose.connect(process.env.MONGO_URL , () => {
    app.listen(PORT , () => {
    console.log("server runing")
})
   
}).then((Error) => {
    console.log(Error)
})

 