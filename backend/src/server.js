import express from 'express'
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import dotenv from "dotenv";
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001



//middleware
app.use(express.json()) // this middleware will parse the JSON boddies: req.body
app.use(rateLimiter)



app.use("/api/notes", notesRoutes)
//Endpoint - combination of URL + HTTP meathod that lets the client interact with a specific resource


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server started");
    })
})
