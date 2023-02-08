import bodyParser from "body-parser"
import { Router } from "express"
import { DischargeController } from "../controller/Discharge.controller"


const dischargeRouter = Router()
const jsonParser = bodyParser.json()

dischargeRouter.post('/', jsonParser, DischargeController.createDischarge)

export default dischargeRouter