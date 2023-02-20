import { Request, Response } from "express";
import { createDischargeCategory, createIncomeCategory, getAllDischargeCategoty, getAllIncomeCategory } from "../services/Category.services";


export class CategoryController {
    constructor(){ /* TODO document why this constructor is empty */ }

    //Create discharge category
    static async createDischargeCategory(req: Request, res: Response){
        
        const created = await createDischargeCategory(req.body)

        res.status(created.success ? 200 : 400).send(created)
    }

    //Get all discharge category
    static async getAllDischargeCategory(req: Request, res: Response){

        const data = await getAllDischargeCategoty()

        res.status(data.success ? 200 : 400).send(data)
    }

    //Create income category
    static async createIncomeCategory(req: Request, res: Response){

        const created = await createIncomeCategory(req.body)

        res.status(created.success ? 200 : 400).send(created)
    }

    //Get all income category
    static async getAllIncomeCategory(req: Request, res: Response){

        const data = await getAllIncomeCategory()

        res.status(data.success ? 200 : 400).send(data)
    }
}