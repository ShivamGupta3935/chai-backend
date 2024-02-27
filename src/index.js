// require('dotenv').config({path: './env'})

import dotenv from "dotenv"

import connectDB from "./db/index.js";
import express from "express"
import {app} from "./app.js"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import { Express } from "express";
const app = express()
// const port = process.env.PORT || 8080;
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
    app.listen(process.env.PORT || 8080, () => {
        console.log(`Server running at http://localhost:${process.env.PORT}`);
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