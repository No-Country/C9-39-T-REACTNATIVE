import { Request, Response } from "express";
import { filterByCategory } from "../services/Filter.services";


export class FilterController {
    constructor(){ /* TODO document why this constructor is empty */ }

    //Filter by category
    static async filterByCategory(req: Request, res: Response){

        const {category, id} = req.body

        const filtered = await filterByCategory(category, id)

        res.status(filtered.success ? 200 : 400).send(filtered)
    }
}