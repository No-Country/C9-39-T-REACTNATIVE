import mongoose from "mongoose"
import { ITypeDischarge } from "../interfaces/ITypeDischarge.interfaces"


export const typeDischargeEntity = () => {
    let Typedischargeschema = new mongoose.Schema<ITypeDischarge>({
        name: {type: String, required: true},
        description: {type: String, required: true}
    })
    
    return mongoose.models.typeDischarge || mongoose.model<ITypeDischarge>('typeDischarge', Typedischargeschema)
}