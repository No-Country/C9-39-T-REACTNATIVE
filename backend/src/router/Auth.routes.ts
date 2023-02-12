import bodyParser from "body-parser";
import { Router } from "express";
import { AuthController } from "../controller/Auth.controller";



const authRouter = Router()
const jsonParser = bodyParser.json()

authRouter.post('/register',jsonParser, AuthController.registerUser)
authRouter.post('/login', jsonParser, AuthController.loginUser)
authRouter.get('/validate/:token', AuthController.validateEmail)
authRouter.post('/sendresetpassword', jsonParser, AuthController.sendResetPassword)
authRouter.get('/codeverification', jsonParser, AuthController.codeVerification)
authRouter.patch('/resetpassword', jsonParser, AuthController.resetPassowrd)

export default authRouter