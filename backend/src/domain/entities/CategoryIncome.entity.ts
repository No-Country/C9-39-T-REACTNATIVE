import  { Schema } from "mongoose"
import * as mongoose from 'mongoose'
import { ICategory } from "../interfaces/ICategory.interfaces"


let categoryIncomeSchema = new mongoose.Schema<ICategory>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    logo: {type: String, required: true},
    vector: {type: String, required: true}
})

export const CategoryIncome = mongoose.models.categoryincomes || mongoose.model<ICategory>('categoryincomes', categoryIncomeSchema)