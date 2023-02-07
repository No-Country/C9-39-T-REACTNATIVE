import bodyParser from "body-parser";
import { Router } from "express";
import { AuthController } from "../controller/Auth.controller";



const authRouter = Router()
const jsonParser = bodyParser.json()

authRouter.post('/register',jsonParser, AuthController.registerUser)
authRouter.post('/login', jsonParser, AuthController.loginUser)

export default authRouter