import { Request, Response } from "express";
import { createDischarge, deleteDischargeById, getAllDischarges, getDischargeById, updateDischargeById } from "../services/Discharge.services";


export class DischargeController {
    constructor(){ /* TODO document why this constructor is empty */ }

    //Create discharge
    static async createDischarge(req: Request, res: Response){
        const {title, description, amount, userId, typeDischarge} = req.body
        const discharge = {title, description, amount, userId, typeDischarge}
        const created = await createDischarge(discharge)

        res.send(created)
    }

    //Get all discharges
    static async getAllDischarges(req: Request, res: Response){
        const data = await getAllDischarges()

        res.status(data.success ? 200 : 400).send(data)
    }

    //Get discharge by ID
    static async getDischargeById(req: Request, res: Response){
        const {id} = req.body

        const data = await getDischargeById(id)

        res.status(data.success ? 200 : 400).send(data)
    }

    //Update discharge
    static async updateDischarge(req: Request, res: Response){
        const {id} = req.body

        const updated = await updateDischargeById(id, req.body)

        res.status(updated.succes ? 200 :400).send(updated)
    }

    //Delete discharge
    static async deleteDischarge(req: Request, res: Response){
        const {id} = req.body

        const deleted = await deleteDischargeById(id)

        res.status(deleted.success ? 200 : 400).send(deleted)
    }
}