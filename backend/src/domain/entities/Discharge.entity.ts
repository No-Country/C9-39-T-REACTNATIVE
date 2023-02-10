import { Schema } from "mongoose"
import * as mongoose from 'mongoose'
import { IDischarge } from "../interfaces/IDischarge.interfaces"


let Dischargeschema = new mongoose.Schema<IDischarge>({
    title: { type: String },
    description: { type: String },
    createAt: { type: Date, default: Date.now() },
    amount: { type: Number },
    userId: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    category: [{ type: Schema.Types.ObjectId, ref: 'category' }]
})

export default module.exports = mongoose.models.discharges || mongoose.model<IDischarge>('Discharges', Dischargeschema)