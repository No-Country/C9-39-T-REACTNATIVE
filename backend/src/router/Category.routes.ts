import bodyParser from "body-parser"
import { Router } from "express"
import { CategoryController } from "../controller/Category.controller"



const categoryRouter = Router()
const jsonParser = bodyParser.json()


categoryRouter.post('/discharge', jsonParser, CategoryController.createDischargeCategory)
categoryRouter.get('/discharge', CategoryController.getAllDischargeCategory)
categoryRouter.post('/income', jsonParser, CategoryController.createIncomeCategory)
categoryRouter.get('/income', CategoryController.getAllIncomeCategory)

export default categoryRouter