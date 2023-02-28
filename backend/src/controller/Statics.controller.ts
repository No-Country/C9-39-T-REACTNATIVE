import { Request, Response } from "express";
import { getUserStatics } from "../services/Statics.services";


export class StaticsController {
    constructor(){ /* TODO document why this constructor is empty */ }

    static async getData(req: Request, res: Response){
        const {id} = req.params
        console.log(id);
        
        //const {id} = req.body

        const statics = await getUserStatics(id)

        res.send(statics)
    }
}