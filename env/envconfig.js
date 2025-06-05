import dotenv from "dotenv"

dotenv.config()
const port = process.env.PORT
const mongodb = process.env.MONGODB
export {port,mongodb} 