import express from "express"
import route from "./route/route.js"
import {port,mongodb} from "./env/envconfig.js"
import mongoose from "mongoose";
const app= express();

app.get("/home",route)

mongoose.connect(mongodb).then(()=>{
    console.log("mongodb connect")
})
app.use(route)
app.listen(port,()=>{
    console.log(`server running on localhost:${port}`)
})

