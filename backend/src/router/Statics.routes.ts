import bodyParser from "body-parser"
import { Router } from "express"
import { StaticsController } from "../controller/Statics.controller"




const staticsRouter = Router()
const jsonParser = bodyParser.json()

// Get statics
staticsRouter.get('/:id', jsonParser, StaticsController.getData)

export default staticsRouter