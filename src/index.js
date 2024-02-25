// require('dotenv').config({path: './env'})

import dotenv from "dotenv"

import connectDB from "./db/index.js";
import express from "express"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import { Express } from "express";
const app = express()
const port = process.env.PORT || 8080;
dotenv.config(
    {
        path: "./.env"
    }
    )
connectDB()
.then( () => {
    app.on("Error", (error) => {
        console.log("Error :", error);
        throw error;
    })
    app.listen(port, () => {
        console.log(`Server running at http://:${port}/`);
    })
})
.catch( (err) => {
    console.log("MongoDB connection error : ", err);
})











/*


;( async() => {
   try {
    mongoose.connect(`${process.env.MONGO_URI}`/`${DB_NAME}`)
    app.on("Error", (error) => {
        console.log("Error : ", error);
        throw error;
    })

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on PORT :${process.env.PORT} `);
    })
   } catch (error) {
     console.error("Error are introducing");
   }
})()
*/