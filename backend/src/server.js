//start server with "npm run dev"

import express from "express";
import dotenv from "dotenv";
import {  initDB } from "./config/db.js"; 
import rateLimiter from "./middleware/rateLimiter.js";

import transactionsRoute from "./routes/transactionsRoute.js";

import job from "./config/cron.js";


dotenv.config();

const app = express();

if (process.env.NODE_ENV==="production") job.start()

//middleware
app.use(rateLimiter);
app.use(express.json())


const PORT = process.env.PORT || 5001;

app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
})


app.get("/", (req, res) => {
    res.send("its working");
});


//server.js -> transactionsRoute.js -> transactionsController.js
app.use("/api/transactions", transactionsRoute);


initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on PORT:",PORT);
    });
});


console.log("my port:", process.env.PORT);

