import bodyParser from "body-parser";
import { Router } from "express";
import { UserController } from "../controller/User.controller";


const userRouter = Router()
const jsonParser = bodyParser.json()

userRouter.post('/',jsonParser, UserController.createUser)

export default userRouter