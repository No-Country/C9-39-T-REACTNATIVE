import * as mongoose from 'mongoose'
import { Schema } from 'mongoose'
import { IDischarge } from "../interfaces/IDIscharge.interfaces"


export const dischargEntity = () => {
    let dischargeSchema = new mongoose.Schema<IDischarge>({
        title: { type: String },
        description: { type: String },
        createAt: { type: Date, default: Date.now() },
        amount: { type: Number },
        userId: [{ type: Schema.Types.ObjectId, ref: 'users' }],
        category: [{ type: Schema.Types.ObjectId, ref: 'category' }]
    })

    return mongoose.models.discharges || mongoose.model<IDischarge>('discharges', dischargeSchema)
}
