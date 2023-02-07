import { Request, Response } from "express";
import { createUser } from "../services/User.services";



export class UserController {
    constructor(){ /* TODO document why this constructor is empty */ }

    static async createUser(req: Request, res: Response){

        const {firstname, lastname, email, password, phone, birthday, status} = req.body
        const user = {firstname, lastname, email, password, phone, birthday, status}
        
        const created = await createUser(user)

        res.status(created.success ? 200 : 400).send(created)
    }
}