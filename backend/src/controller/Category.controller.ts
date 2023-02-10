import { Request, Response } from "express";
import { createCategory } from "../services/Category.services";

export class CategoryController {
    constructor(){ /* TODO document why this constructor is empty */ }

    //Create category
    static async createCategory(req: Request, res: Response){
        
        const created = await createCategory(req.body)

        res.status(created.success ? 200 : 400).send(created)
    }
}