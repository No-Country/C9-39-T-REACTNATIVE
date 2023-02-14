import  { Schema } from "mongoose"
import * as mongoose from 'mongoose'
import { IUser } from "../interfaces/IUser.interfaces"


export const userEntity = () => {
    let userSchema = new mongoose.Schema<IUser>({
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        isVerified: {type: Boolean, default: false},
        createdAt: {type: Date, default: Date.now()},
        updateAt: {type: Date},
        codeVerification: {type: Number, default: 0},
        expenses: [{type: mongoose.Schema.Types.ObjectId, ref: 'discharges'}],
        income: [{type: mongoose.Schema.Types.ObjectId, ref: 'income'}]
    })
    
    
    return mongoose.models.users || mongoose.model<IUser>('users', userSchema)
}