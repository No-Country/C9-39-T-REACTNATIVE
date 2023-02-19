import bodyParser from "body-parser";
import { Router } from "express";
import { IncomeController } from "../controller/Income.controller";




const incomeRouter = Router()
const jsonParser = bodyParser.json()

// Created income
incomeRouter.post('/', jsonParser, IncomeController.createIncome)
// Get all incomes
incomeRouter.get('/', IncomeController.getAllIncomes)
// Get incomes by user
incomeRouter.get('/byuser', jsonParser, IncomeController.getIncomesByUser)
// Update uncomes by ID
incomeRouter.patch('/', jsonParser, IncomeController.updateIncomeById)
// Delete income by ID
incomeRouter.delete('/', jsonParser, IncomeController.deleteIncomeById)

export default incomeRouter