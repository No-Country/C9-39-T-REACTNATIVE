import  { Schema } from "mongoose"
import * as mongoose from 'mongoose'
import { ICategory } from "../interfaces/ICategory.interfaces"


export const categoryEntity = () => {
    let Categoryschema = new mongoose.Schema<ICategory>({
        name: {type: String, required: true},
        description: {type: String, required: true}
    })
    
    return mongoose.models.category || mongoose.model<ICategory>('category', Categoryschema)
}