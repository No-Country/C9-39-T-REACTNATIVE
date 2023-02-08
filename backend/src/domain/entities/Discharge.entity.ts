import mongoose, { Schema } from "mongoose"
import { IDischarge } from "../interfaces/IDIscharge.interfaces"

export const dischargeEntity = () =>{
    let dischargeSchema = new mongoose.Schema<IDischarge>({
        title: {type: String},
        description: {type: String},
        createAt: {type: Date, default: Date.now()},
        amount: {type: Number},
        userId: [{type: Schema.Types.ObjectId, ref: 'users', autopopulate: true}],
        typeDischarge: [{type: Schema.Types.ObjectId, ref: 'discharge'}]
    })
    
    return mongoose.models.Discharge || mongoose.model<IDischarge>('Discharge', dischargeSchema)
}