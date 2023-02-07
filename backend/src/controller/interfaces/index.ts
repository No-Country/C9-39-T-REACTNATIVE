import { Request, Response } from "express";


export interface IUserController{
    // Create new User
    createUser(req: Request, res: Response): Promise<any>
}