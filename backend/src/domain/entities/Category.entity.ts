import  { Schema } from "mongoose"
import * as mongoose from 'mongoose'
import { ICategory } from "../interfaces/ICategory.interfaces"


let categorySchema = new mongoose.Schema<ICategory>({
    name: {type: String, required: true},
    description: {type: String, required: true}
})

export const Category = mongoose.models.category || mongoose.model<ICategory>('category', categorySchema)