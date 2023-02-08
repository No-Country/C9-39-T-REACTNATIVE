import { Request, Response } from "express";
import { login, registerUser } from "../services/Auth.services";


export class AuthController{
    constructor(){ /* TODO document why this constructor is empty */ }

    static async registerUser(req: Request, res: Response){
        const {firstname, lastname, email, password, phone, birthday, status} = req.body

        const registered = await registerUser(firstname, lastname, email, password, phone, birthday, status)

        res.status(registered.success ? 200 : 400).send(registered)
    }

    static async loginUser(req: Request, res: Response){

        const {email, password} = req.body

        const data = await login(email, password)

        res.send(data)
    }
}