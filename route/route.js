import express from "express"
import {home,about} from "../controllers/controllers.js"

const route= express.Router()

route.get("/",home)
route.get("/about",about)

export default route