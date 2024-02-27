import { Express, urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()

//use cors middleware and express middleware
const a =  app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit:"16kb"
}))

app.use(express.urlencoded({
    extended:true,
    limit: "16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())

//routes imported
import userRouter from './routes/user.routes.js'

app.use("/api/v1/users", userRouter)

// link is like this
// http://localhost:8000/api/v1/users/register

export {app}