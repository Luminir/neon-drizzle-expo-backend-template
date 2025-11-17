import express from "express"
import "dotenv/config"
import { ENV } from "./config/env.js";
import {db} from './config/db.js'
import { courses } from "./db/schema.js";

const app = express();
const PORT = ENV.PORT || 5001

app.use(express.json())

// testing
app.get("/api/health", (req, res) => {
    res.status(200).json({sucess: true})
})

// try to ping this using postman, at post raw JSON
app.post('/api/courses', async (req, res) => {
    try {
        const {id, title, subTitle,imageSrc} = req.body;

        if (!id || !title || !subTitle || !imageSrc) {
            return res.status(400).json({
                error: "wrong something"
            })
        }

        const course = await db.insert(courses).values({
            id,
            title,
            subTitle,
            imageSrc
        }).returning();

        res.status(201).json(course[0]);

    } catch (error) {
        console.error("error at api courses")
    }
})

app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT)
})