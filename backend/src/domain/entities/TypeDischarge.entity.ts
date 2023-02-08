import mongoose from "mongoose"
import { ITypeDischarge } from "../interfaces/ITypeDischarge.interfaces"


export const typeDischargeEntity = () => {
    let typeDischargeSchema = new mongoose.Schema<ITypeDischarge>({
        name: {type: String, required: true},
        description: {type: String, required: true}
    })
    
    return mongoose.models.TypeDischarge || mongoose.model<ITypeDischarge>('TypeDischarge', typeDischargeSchema)
}