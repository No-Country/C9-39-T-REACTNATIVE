import * as mongoose from 'mongoose'
import { Schema } from 'mongoose'
import { IIncome } from "../interfaces/IIncome.interfaces";



let incomeSchema = new mongoose.Schema<IIncome>({
    title: {type: String},
    description: {type: String},
    createAt: {type: Date, default: Date.now()},
    amount: {type: Number},
    type: {type: String, enum: ['discharge', 'income'], required: true},
    logo: {type: String, required: true},
    vector: {type: String, required: true},
    userId: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    category: [{ type: Schema.Types.ObjectId, ref: 'categoryincomes' }]
})

export const Income = mongoose.models.incomes || mongoose.model<IIncome>('incomes', incomeSchema)