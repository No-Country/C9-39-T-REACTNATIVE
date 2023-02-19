import { Request, Response } from "express";
import { createIncome, getAllIncomes, getIncomesByUser, updateIncomeById, delteIncomeById } from "../services/Income.services";




export class IncomeController {
    constructor(){ /* TODO document why this constructor is empty */ }

    //Create income
    static async createIncome(req: Request, res: Response){
        const {title, description, amount, type, userId, category} = req.body
        const income = {title, description, amount, type, userId, category}

        const created = await createIncome(income)

        res.status(created.success ? 200 : 400).send(created)
    }

    //Get all incomes
    static async getAllIncomes(req: Request, res: Response){
        const data = await getAllIncomes()

        res.status(data.success ? 200 : 400).send(data)
    }

    //Get incomes by user
    static async getIncomesByUser(req: Request, res: Response){
        const {id} = req.body

        const data = await getIncomesByUser(id)

        res.status(data.success ? 200 : 400).send(data)
    }

    //Update income by ID
    static async updateIncomeById(req: Request, res: Response){

        const {id} = req.body

        const data = await updateIncomeById(id, req.body)

        res.status(data.success ? 200 : 400).send(data)
    }

    //Delete income by ID
    static async deleteIncomeById(req: Request, res: Response){

        const {id} = req.body

        const deleted = await delteIncomeById(id)

        res.status(deleted.success ? 200 : 400).send(deleted)
    }
}