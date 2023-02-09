import bodyParser from "body-parser"
import { Router } from "express"
import { DischargeController } from "../controller/Discharge.controller"


const dischargeRouter = Router()
const jsonParser = bodyParser.json()

//Created discharge
dischargeRouter.post('/', jsonParser, DischargeController.createDischarge)
//Get all discharges
dischargeRouter.get('/', DischargeController.getAllDischarges)
//Get discharge by ID
dischargeRouter.get('/id', jsonParser, DischargeController.getDischargeById)
//Update discharge by ID
dischargeRouter.patch('/', jsonParser, DischargeController.updateDischarge)
//Delete discharge by ID
dischargeRouter.delete('/', jsonParser, DischargeController.deleteDischarge)

export default dischargeRouter