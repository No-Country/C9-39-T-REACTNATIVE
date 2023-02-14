import { Request, Response } from "express";
import { codeVerification, login, registerUser, resetPassowrd, sendMailResetPassowrd, validateEmail } from "../services/Auth.services";


export class AuthController {
    constructor() { /* TODO document why this constructor is empty */ }

    static async registerUser(req: Request, res: Response) {
        const { firstname, lastname, email, password, phone, birthday, status } = req.body

        const registered = await registerUser(firstname, lastname, email, password, phone, birthday, status)

        res.status(registered.success ? 200 : 400).send(registered)
    }

    static async loginUser(req: Request, res: Response) {

        const { email, password } = req.body

        const data = await login(email, password)

        res.send(data)
    }

    static async validateEmail(req: Request, res: Response) {

        const { token } = req.params

        const validated = await validateEmail(token)
        res.redirect('http://localhost:8000/api')
    }

    static async sendResetPassword(req: Request, res: Response) {
        
        const {email} = req.body

        const data = await sendMailResetPassowrd(email)

        res.status(data.success ? 200 : 400).send(data)
    }

    static async codeVerification(req: Request, res: Response){
        const {id, code} = req.body

        const data = await codeVerification(code, id)

        res.send(data)
    }

    static async resetPassowrd(req: Request, res: Response){

        const {id, password} = req.body

        const updated = await resetPassowrd(password, id)

        res.status(updated.success ? 200 : 400).send(updated)
    }
}