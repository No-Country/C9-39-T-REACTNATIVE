import  { Schema } from "mongoose"
import * as mongoose from 'mongoose'
import { ICategory } from "../interfaces/ICategory.interfaces"


let categoryDischargeSchema = new mongoose.Schema<ICategory>({
    name: {type: String, required: true},
    logo: {type: String, required: true},
    vector: {type: String, required: true}
})

export const CategoryDischarge = mongoose.models.categorydischarges || mongoose.model<ICategory>('categorydischarges', categoryDischargeSchema)