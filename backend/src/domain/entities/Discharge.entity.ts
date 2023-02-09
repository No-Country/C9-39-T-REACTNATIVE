import mongoose, { Schema } from "mongoose"
import { IDischarge } from "../interfaces/IDIscharge.interfaces"

export const dischargeEntity = () =>{
    let Dischargeschema = new mongoose.Schema<IDischarge>({
        title: {type: String},
        description: {type: String},
        createAt: {type: Date, default: Date.now()},
        amount: {type: Number},
        userId: [{type: Schema.Types.ObjectId, ref: 'users'}],
        typeDischarge: [{type: Schema.Types.ObjectId, ref: 'typeDischarge'}]
    })
    
    const Mongomodel = mongoose.models.discharges || mongoose.model<IDischarge>('discharges', Dischargeschema)

    return Mongomodel
}