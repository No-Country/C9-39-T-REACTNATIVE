import bodyParser from "body-parser";
import { Router } from "express";
import { UserController } from "../controller/User.controller";


const userRouter = Router()
const jsonParser = bodyParser.json()

userRouter.post('/',jsonParser, UserController.createUser)
userRouter.get('/', UserController.getAllUser)
userRouter.get('/id', jsonParser, UserController.getUserById)
userRouter.patch('/', jsonParser, UserController.updateUser)
userRouter.delete('/', jsonParser, UserController.deleteUser)

export default userRouter