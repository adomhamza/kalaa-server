import app from "express"
import { addTrack, addUser, getTracks } from "../controllers/userController"

export const userRouter = app.Router()

userRouter.post("/add", addUser)
userRouter.post("/track", addTrack)
userRouter.post("/getTracks", getTracks)