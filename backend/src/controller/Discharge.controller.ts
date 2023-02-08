import { Request, Response } from "express";
import { createDischarge } from "../services/Discharge.services";


export class DischargeController {
    constructor(){ /* TODO document why this constructor is empty */ }

    //Create discharge
    static async createDischarge(req: Request, res: Response){
        const {title, description, amount, userId, typeDischarge} = req.body
        const discharge = {title, description, amount, userId, typeDischarge}
        const created = await createDischarge(discharge)

        res.send(created)
    }
}