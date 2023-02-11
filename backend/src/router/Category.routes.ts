import bodyParser from "body-parser"
import { Router } from "express"
import { CategoryController } from "../controller/Category.controller"



const categoryRouter = Router()
const jsonParser = bodyParser.json()


categoryRouter.post('/', jsonParser, CategoryController.createCategory)
categoryRouter.get('/', CategoryController.getAllCategory)

export default categoryRouter