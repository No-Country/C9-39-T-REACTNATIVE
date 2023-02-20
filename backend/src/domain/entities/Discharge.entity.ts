import * as mongoose from 'mongoose'
import { Schema } from 'mongoose'
import { IDischarge } from "../interfaces/IDIscharge.interfaces"

let dischargeSchema = new mongoose.Schema<IDischarge>({
    title: { type: String },
    description: { type: String },
    createAt: { type: Date, default: Date.now() },
    amount: { type: Number },
    type: {type: String, enum: ['discharge', 'income'], required: true},
    logo: {type: String, required: true},
    vector: {type: String, required: true},
    userId: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    category: [{ type: Schema.Types.ObjectId, ref: 'categorydischarges' }]
})

export const Discharge = mongoose.models.discharges || mongoose.model<IDischarge>('discharges', dischargeSchema)
