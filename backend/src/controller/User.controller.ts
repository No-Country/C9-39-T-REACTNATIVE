import { Request, Response } from "express";
import { createUser, deleteUserById, getAllUser, getUserById, updateUserById } from "../services/User.services";



export class UserController {
    constructor(){ /* TODO document why this constructor is empty */ }

    //Create user
    static async createUser(req: Request, res: Response){

        const {firstname, lastname, email, password, phone, birthday, status} = req.body
        const user = {firstname, lastname, email, password, phone, birthday, status}
        
        const created = await createUser(user)

        res.status(created.success ? 200 : 400).send(created)
    }

    //Obtain all user
    static async getAllUser(req: Request, res: Response){

        const data = await getAllUser()

        res.status(data.success ? 200 : 400).send(data)
    }

    //Get user by ID
    static async getUserById(req: Request, res: Response){

        const {id} = req.body

        const data = await getUserById(id)

        res.status(data.success ? 200 : 400).send(data)
    }

    //Update user
    static async updateUser(req: Request, res: Response){
        
        const {id} = req.body

        const updated = await updateUserById(id, req.body)

        res.status(updated.success ? 200 : 400).send(updated)
    }

    //Delete user
    static async deleteUser(req: Request, res: Response){

        const {id} = req.body

        const deleted = await deleteUserById(id)

        res.status(deleted.success ? 200 : 400).send({message: 'User deleted successfully'})
    }
}