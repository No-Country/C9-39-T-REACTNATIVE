import bodyParser from "body-parser";
import { Router } from "express";
import { FilterController } from "../controller/Filter.controller";





const filterRouter = Router()
const jsonParser = bodyParser.json()

//Filter by name
filterRouter.get('/name', jsonParser, FilterController.filterByCategory)

export default filterRouter